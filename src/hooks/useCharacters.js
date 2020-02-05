import { useEffect, useState } from 'react';
import { getCharacters } from '../services/getCharacters';

export const useCharacters = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters(page)
      .then(setCharacters);
  }, [page]);

  return { setPage, characters, page };
};
