const fsPromises = require('fs').promises;
const { copy, transform } = require('./functions.js');


describe('test function', () => {
  beforeAll(() => {
    return Promise.all([
      fsPromises.writeFile('./newFile1.txt', 'Sup, this is a newFile.'),
      fsPromises.writeFile('./newFile2.txt', 'WhAtEvEr') 
    ]);
  });
  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./newFile1.txt'),
      fsPromises.unlink('./newFile3.txt'),
      fsPromises.unlink('./newFile2.txt')
    ]);
  });
  it('can copy a file after the file is read', async() => {
    const newFile  = await copy('./newFile1.txt', './newFile3.txt', { encoding: 'utf8' });
    const copiedFile = await fsPromises.readFile('./newFile3.txt', { encoding: 'utf8' });
    expect(newFile).toEqual(copiedFile);
  });

  it('can transform text by removing all capitals then rest of the letters become capital letters and reversed', async() => {
    const transformedFile = await transform('./newFile2.txt', { encoding: 'utf8' });
    expect(transformedFile).toEqual('RVTH');

  }); 
});
 
