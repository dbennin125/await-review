const fsPromises = require('fs').promises;

const copy = async(source, destination) => {
  const readFile = await fsPromises.readFile(source, { encoding: 'utf8' });
  await fsPromises.writeFile(destination, readFile, { encoding: 'utf8' });
  return readFile;
};

const transform = async(src) => {
  const transformedPromise =  await fsPromises.readFile(src, { encoding: 'utf8' });
  return transformedPromise.split('').filter(item => {
    return item === item.toLocaleLowerCase();
  }).map(item => {
    return item.toUpperCase();
  }).reverse().join('');
};

module.exports = {
  copy, 
  transform
};
