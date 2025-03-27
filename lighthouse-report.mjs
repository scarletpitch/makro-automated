import fs from 'fs'
import { launch } from 'chrome-launcher'
import lighthouse from 'lighthouse'

const url = 'https://maknet-webapp.mango-qa.siammakro.cloud/en'

const chrome = await launch({ chromeFlags: ['--headless'] })

const options = {
  logLevel: 'info',
  output: ['html', 'json'],
  onlyCategories: ['performance', 'accessibility', 'seo'],
  port: chrome.port,
}

const runnerResult = await lighthouse(url, options)

fs.writeFileSync('lighthouse-report.html', runnerResult.report[0])
fs.writeFileSync('lighthouse-report.json', runnerResult.report[1])

console.log('✅ Lighthouse reports generated successfully!')

await chrome.kill()
