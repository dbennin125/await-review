const Movie = require('../models/Movie');
const Review = require('../models/Review');
const chance = require('chance').Chance();

const seed = async() => {
  const movieArray = await Promise.all([...Array(7)].map(() => {
    return Movie.create({
      title: chance.word(),
      description: chance.sentence(),
      studio: chance.name()
    });
  }));
  await Promise.all([...Array(100)].map(() =>{
    return Review.create({
      movie: chance.pickone(movieArray).id,
      authorName: chance.name(),
      comment: chance.sentence()
    });
  }));
};

module.exports = seed;
