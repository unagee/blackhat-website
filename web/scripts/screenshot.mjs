import { existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { parseArgs } from 'node:util'
import { chromium } from 'playwright-core'

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    base: { type: 'string', default: 'http://localhost:4321' },
    out: { type: 'string', default: 'screenshots' },
    label: { type: 'string', default: 'after' },
  },
})

const paths = positionals.length > 0 ? positionals : ['/']

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
]

const candidates = [process.env.CHROMIUM_PATH, '/opt/pw-browsers/chromium'].filter(Boolean)
const executablePath = candidates.find((path) => existsSync(path))

mkdirSync(values.out, { recursive: true })

const browser = await chromium.launch(executablePath ? { executablePath } : {})

try {
  for (const path of paths) {
    const slug = path.replace(/^\/|\/$/g, '').replace(/[^a-z0-9]+/gi, '-') || 'home'
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport })
      const url = new URL(path, values.base).toString()
      const response = await page.goto(url, { waitUntil: 'networkidle' })
      const file = join(values.out, `${slug}-${viewport.name}-${values.label}.png`)
      await page.screenshot({ path: file, fullPage: true })
      console.log(`${response?.status() ?? '???'} ${url} -> ${file}`)
      await page.close()
    }
  }
} finally {
  await browser.close()
}
