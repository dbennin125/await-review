const { getCharacter } = require('./RickAndMorty');

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
});
