const { Router } = require('express');
const Recipe = require('../models/Recipe');
// const fetch = require('node-fetch');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    res.json({});
  } catch (e) {
    next(e);
  }
});
