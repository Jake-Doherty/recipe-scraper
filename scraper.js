const dotenv = require('dotenv');
dotenv.config();
const { startBrowser } = require('./lib/services/scraper/browser.js');
// const nodeCron = require('node-cron');
const scraperObject = require('./lib/services/scraper/pageScraper.js');
// const Event = require('./lib/models/Event.js');

async function grabScraped() {
  const browser = await startBrowser();
  const events = await scraperObject.scraper(browser);
  try {
    // map through settled promises and insert into db
    // await Promise.allSettled(events.map((event) => Event.insert(event)));
    // const settledData = await Promise.allSettled(events);
    // console.log(settledData);
  } catch (e) {
    console.error(e);
  }
  return events;
}

// nodeCron.schedule('*/5 * * * *', async () => {
//   await grabScraped();
// });

grabScraped();

// module.exports = { grabScraped };
