const mockNewData = require('./RickAndMortyData');
const { getCharacter, getManyCharacters } = require('./RickAndMorty');

jest.mock('superagent', () => ({
  get(url) {
    const id = url.split('/').slice(-1);
    return Promise.resolve({
      body: mockNewData[id - 1]
    });
  }
}));

describe('Rick and Morty function test', () => {
  it('gets a character by ID with GET', async() => {
    const character = await getCharacter('2');
    console.log(character);
    expect(character).toEqual({
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
    });
  });
  it('gets many characters by ID with GET', async() => {
    const characters = await getManyCharacters(['1', '2', '3']);
  
    expect(characters).toEqual([
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
      },
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
      },
      {
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human',
      }
    ]);
  });

});
