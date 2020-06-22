const request = require('superagent');

const getCharacter = async id => {
  const { body }  = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
 
  return {
    name: body.name,
    status: body.status,
    species: body.species
  };
};

const getManyCharacters = async arrayIds => {
  
  const characters = Promise.all(
    arrayIds.map(id => getCharacter(id))
  );
  return characters;

};

module.exports = {
  getCharacter,
  getManyCharacters
};
