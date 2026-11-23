// Static build: copies the deck into dist/ with a content hash stamp.
// No bundler, no dependency — the deliverable is the same files that run in dev.
import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

const OUT = 'dist'
const ASSETS = ['index.html', 'assets']

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else files.push(full)
  }
  return files.sort()
}

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })
for (const asset of ASSETS) await cp(asset, join(OUT, asset), { recursive: true })

const hash = createHash('sha256')
for (const file of await walk(OUT)) hash.update(await readFile(file))
const stamp = hash.digest('hex').slice(0, 12)

const html = await readFile(join(OUT, 'index.html'), 'utf8')
await writeFile(
  join(OUT, 'index.html'),
  html.replace('</head>', `  <meta name="deck-build" content="${stamp}" />\n  </head>`),
  'utf8',
)

const files = await walk(OUT)
console.log(`build ${stamp} — ${files.length} fichiers dans dist/`)
for (const file of files) console.log('  ' + file)
