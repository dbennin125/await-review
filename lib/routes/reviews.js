const { Router } = require('express');
const Review = require('../models/Review');

module.exports = Router()
  .get('/', (req, res, next) => {
    Review
      .find(req.query)
      .then(reviews => res.send(reviews))
      .catch(next);
  });

