const dotenv = require('dotenv');
const Recipe = require('./lib/models/Recipe.js');
dotenv.config();
const { startBrowser } = require('./lib/services/scraper/browser.js');
// const nodeCron = require('node-cron');
const fnScraperObject = require('./lib/services/scraper/site-scrapers/food-network.js');

async function grabScraped(url, user) {
  console.log('in the grabScraped function');
  const browser = await startBrowser();
  console.log('after starting the browser session');

  const recipe = await fnScraperObject.scraper(browser, url, user);
  console.log('after scraper finished', recipe);
  try {
    await Recipe.insert(recipe);
    // map through settled promises and insert into db
    // await Promise.allSettled(events.map((event) => Event.insert(event)));
    // const settledData = await Promise.allSettled(events);
    // console.log(settledData);
  } catch (e) {
    console.error(e);
  }
  return recipe;
}

// nodeCron.schedule('*/5 * * * *', async () => {
//   await grabScraped();
// });

// grabScraped();

module.exports = { grabScraped };
