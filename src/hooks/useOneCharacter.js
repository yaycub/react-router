import { useEffect, useState } from 'react';
import { getOneCharacter } from '../services/getCharacters';

export const useOneCharacter = id => {
  const [oneCharacter, setOneCharacter] = useState({});

  useEffect(() => {
    getOneCharacter(id)
      .then(setOneCharacter);
  }, [id]);

  return oneCharacter;
};
