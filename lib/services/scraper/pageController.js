const fnScraper = require('./site-scrapers/food-network');

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    await fnScraper.scraper(browser);
  } catch (e) {
    /* eslint-disable no-console */
    console.log('could not resolve the browser instance', e);
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
