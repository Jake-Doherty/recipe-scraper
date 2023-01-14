const fnScraperObject = {
  // scraper function
  async scraper(browser, url, user) {
    console.log('BEFORE page object creation');

    const userId = user;

    const page = await browser.newPage();
    page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    console.log('AFTER page creation');
    /* eslint-disable no-console */
    console.log(`Navigating to ${url}...`);

    // navigate to the selected page
    await page.goto(url);

    // site querySelector ordered as such (marthastewart, delish, food52, bbcgoodfood)

    const title = await page.$eval(
      '.headline.heading-content.elementFont__display, .recipe__header .recipe__title, .css-byrnjb.exadjwu8, .heading-1',
      (text) => text.textContent.replace(/[\n'']/g, '').trim()
    );

    // const cookTime = await page.$eval(
    //   '.recipe-meta-item .recipe-meta-item-body.elementFont__subtitle, .body-copy-extra-small.list-item',
    //   (text) => text.textContent.replace(/[\n'']/g, '').trim()
    // );

    const ingredients = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          '.ingredients-item, .recipe__list.recipe__list--ingredients ul li, .css-1rmzm7g, .recipe__ingredients.col-12.mt-md.col-lg-6 section ul li'
        ),
        (li) => li.textContent.replace(/[\n'']/g, '').trim()
      )
    );

    const instructions = await page.evaluate(() =>
      Array.from(
        document.querySelectorAll(
          '.section-body.elementFont__body--paragraphWithin.elementFont__body--linkWithin div p, .css-1rk79nl.et3p2gv0 li, .recipe__list-step ol li span, .editor-content p'
        ),
        (span) => span.textContent
      )
    );

    const recipe = {
      userId,
      title,
      // timeToCook: cookTime,
      // servings,
      ingredients,
      instructions,
      recipeUrl: url,
    };

    await page.close();

    // close the headless browser session
    await browser.close();
    // return scrapedObjects;
    return recipe;
  },
};
// console.log('after scraper object', grabbedUrl);

module.exports = fnScraperObject;
