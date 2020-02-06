import { useEffect, useState } from 'react';
import { getOneCharacter } from '../services/getCharacters';

export const useOneCharacter = id => {
  const [oneCharacter, setOneCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getOneCharacter(id)
      .then(setOneCharacter)
      .finally(setLoading(false));
  }, [id]);

  return { oneCharacter, loading };
};
