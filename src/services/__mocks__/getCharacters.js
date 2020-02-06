export const getCharacters = () => Promise.resolve([
  {
    id: 1,
    name: 'name one',
    image: 'imageonoe.jpeg'
  },
  {
    id: 2,
    name: 'name two',
    image: 'imagetwo.jpeg'
  }
]); 

export const getOneCharacter = () => Promise.resolve({
  name: 'cool name',
  status: 'ded',
  species: 'test',
  origin: 'mock',
  location: '__mocks__',
  image: 'testimage.jpeg'
});
