// Minimal static server: no dependency, so the deck runs anywhere Node runs.
// Usage: node scripts/serve.mjs [dir=. ] [port=5174]
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { extname, join, normalize, resolve } from 'node:path'

const root = resolve(process.argv[2] ?? '.')
const port = Number(process.argv[3] ?? 5174)

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
}

async function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0])
  const target = normalize(join(root, clean === '/' ? '/index.html' : clean))
  if (!target.startsWith(root)) return null
  try {
    const info = await stat(target)
    if (info.isDirectory()) return resolveFile(join(clean, 'index.html'))
    return target
  } catch {
    return null
  }
}

createServer(async (req, res) => {
  const file = await resolveFile(req.url ?? '/')
  // Single-page behaviour: unknown paths fall back to index.html so /speaker works.
  const fallback = join(root, 'index.html')
  const path = file ?? fallback
  try {
    const body = await readFile(path)
    res.writeHead(200, {
      'Content-Type': TYPES[extname(path)] ?? 'application/octet-stream',
      'Cache-Control': 'no-cache',
    })
    res.end(body)
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('404')
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Présentation : http://127.0.0.1:${port}`)
  console.log(`Mode orateur : http://127.0.0.1:${port}/#/speaker`)
  console.log(`Répétition   : http://127.0.0.1:${port}/#/rehearse`)
})
