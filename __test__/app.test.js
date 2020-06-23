const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../utils.js/connect');
const seed = require('../lib/data-helpers/seed');

const request = require('supertest');
const app = require('../app');
const Movie = require('../lib/models/Movie');
const Review = require('../lib/models/Review');

describe('Seed test', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });

  it('will seed movie data', async() => {
    await seed();
    const result = await Movie.find();
    expect(result).toHaveLength(7);
  });

  it('will seed review data', async() => {
    await seed();
    const result = await Review.find();
    expect(result).toHaveLength(100);
  });

  it('will seed movie and review data with given object', async() => {
    const moviesAndReviews = await { movieAmount: 20, reviewAmount: 5 };
    await seed(moviesAndReviews);
    const movieResult = await Movie.find();
    const reviewResult = await Review.find();
    expect(movieResult).toHaveLength(20),
    expect(reviewResult).toHaveLength(5);
  });
  
});
