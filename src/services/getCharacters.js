export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(({ results }) => {
      return results.map(character => {
        return {
          id: character.id,
          name: character.name,
          image: character.image
        };
      });
    });
};

export const getOneCharacter = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      return {
        name: res.name,
        status: res.status,
        species: res.species,
        origin: res.origin.name,
        location: res.location.name,
        image: res.image
      };
    });
};
