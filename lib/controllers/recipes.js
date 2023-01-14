const { Router } = require('express');
const { grabScraped } = require('../../scraper.js');
const Recipe = require('../models/Recipe');
// const {
// getUrlToScrape,
// scraper,
// } = require('../services/scraper/site-scrapers/food-network.js');
// const fetch = require('node-fetch');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const recipes = await Recipe.getAll();
      res.json(recipes);
    } catch (e) {
      next(e);
    }
  })
  .post('/myrecipes', async (req, res, next) => {
    try {
      const user = await req.body.userId;
      const url = await req.body.url;

      await grabScraped(url, user);
    } catch (e) {
      next(e);
    }
  });
//
