export const getCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(({ results }) => {
      return results.map(character => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          origin: character.origin.name,
          location: character.location.name,
          image: character.image
        };
      });
    });
};
