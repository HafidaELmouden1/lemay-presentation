// Export the two PDFs from the deck itself (no external tool):
//   1. the presentation, one 16:9 page per slide
//   2. the speaker notes, A4
const fs = require('fs');
const http = require('http');

const PORT = 9222;
const BASE = process.env.DECK_URL || 'http://127.0.0.1:5174';
const OUT = process.argv[2] || '.';

function json(pathname) {
  return new Promise((resolve, reject) => {
    http.get({ host: '127.0.0.1', port: PORT, path: pathname }, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const list = await json('/json/list');
  const page = list.find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) {
      pending.get(m.id)(m.result);
      pending.delete(m.id);
    }
  });
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const mid = ++id;
      pending.set(mid, resolve);
      ws.send(JSON.stringify({ id: mid, method, params }));
      setTimeout(() => pending.has(mid) && (pending.delete(mid), resolve({})), 60000);
    });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  await send('Network.setCacheDisabled', { cacheDisabled: true });

  const jobs = [
    { hash: '#/print', file: 'Hafida-El-Mouden-Presentation-Lemay.pdf', mode: 'deck' },
    { hash: '#/notes', file: 'Hafida-El-Mouden-Discours-Lemay.pdf', mode: 'notes' },
  ];

  for (const job of jobs) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await send('Page.navigate', { url: `${BASE}/index.html?pdf=1&v=${Date.now()}${job.hash}` });
    await sleep(3000);
    await send('Runtime.evaluate', {
      expression: "document.querySelectorAll('.anim,.anim-fade').forEach(function(el){el.style.animation='none';});",
    });
    await sleep(500);

    const pdf = await send('Page.printToPDF', {
      printBackground: true,
      preferCSSPageSize: true,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      displayHeaderFooter: false,
    });

    if (!pdf.data) {
      console.log(job.file, 'ÉCHEC', JSON.stringify(pdf).slice(0, 200));
      continue;
    }
    const path = require('path').join(OUT, job.file);
    fs.writeFileSync(path, Buffer.from(pdf.data, 'base64'));
    const size = fs.statSync(path).size;
    console.log(`${job.file} — ${(size / 1024).toFixed(0)} Ko`);
  }
  process.exit(0);
})();
