const Movie = require('../models/Movie');
const Review = require('../models/Review');
const chance = require('chance').Chance();

const seed = async({ movieAmount, reviewAmount } = { movieAmount: 7, reviewAmount: 100 }) => {
  

  const movieArray = await Promise.all([...Array(movieAmount)].map(() => {
    return Movie.create({
      title: chance.word(),
      description: chance.sentence(),
      studio: chance.name()
    });
  }));
  await Promise.all([...Array(reviewAmount)].map(() =>{
    return Review.create({
      movie: chance.pickone(movieArray).id,
      authorName: chance.name(),
      comment: chance.sentence({ words: 10 })
    });
  }));
};

module.exports = seed;
