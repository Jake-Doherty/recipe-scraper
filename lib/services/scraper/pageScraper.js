// const chalkAnimation = require('chalk-animation');

const scraperObject = {
  // site to scrape
  url: 'https://deploy-preview-1--just-the-recipe-project.netlify.app/',

  // scraper function
  async scraper(browser) {
    const page = await browser.newPage();
    page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    /* eslint-disable no-console */
    console.log(`Navigating to ${this.url}...`);

    // navigate to the selected page
    await page.goto(this.url);

    // console.log('entering scraper email');
    // await page.type('input[type=email]', 'as@as.com');
    // console.log('entering scraper password');
    // await page.type('input[type=password]', 'asdfasdf');
    // console.log('credentials entered!');

    // console.log('submitting');
    // await Promise.all([
    //   chalkAnimation.radar('..........'),
    //   page.click('button'),
    //   page.waitForNavigation(),
    // ]);
    // chalkAnimation.neon('logged in!');

    // await Promise.all([
    //   await page.click('.toggle-menu-closed'),
    //   await page.click('.discover'),
    //   await page.waitForNavigation(),
    // ]);

    // // const addToFavorites = document.q;

    // //
    // // const urls = await page.evaluate(() =>
    // //   Array.from(
    // //     document.querySelectorAll(
    // //       '.tribe-events-calendar-list div .tribe-events-calendar-list__event-wrapper.tribe-common-g-col article div header h3 a[href]'
    // //     ),
    // //     (a) => a.getAttribute('href')
    // //   )
    // // );
    // // const scrapedObjects = [];

    // // loop through links
    // // for (let i = 0; i < urls.length; i++) {
    // //   const url = urls[i];
    // //   const newPage = await browser.newPage();
    // //   await newPage.goto(url);

    // //   const eventTitle = await newPage.$eval(
    // //     '.tribe-events-single-event-title',
    // //     (text) => text.textContent
    // //   );
    // //   //multiple classes separated by '.' as opposed to spaces that the copied path might contain
    // //   const eventDate = await newPage.$eval(
    // //     '.tribe-events-abbr.tribe-events-start-date.published.dtstart',
    // //     (text) => text.textContent
    // //   );

    // //   const eventCalendar = await newPage.$eval(
    // //     '.tribe-events-c-subscribe-dropdown .tribe-events-c-subscribe-dropdown__content .tribe-events-c-subscribe-dropdown__list .tribe-events-c-subscribe-dropdown__list-item .tribe-events-c-subscribe-dropdown__list-item-link',
    // //     (a) => a.getAttribute('href')
    // //   );

    // //   const dataObj = {
    // //     title: eventTitle,
    // //     date: eventDate,
    // //     detail_url: url,
    // //     add_to_cal_url: eventCalendar,
    // //   };

    // //   scrapedObjects.push(dataObj);

    // await newPage.close();
    // }
    await page.close();

    // close the headless browser session
    await browser.close();
    // return scrapedObjects;
  },
};

module.exports = scraperObject;
