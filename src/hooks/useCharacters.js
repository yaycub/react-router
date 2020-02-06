import { useEffect, useState } from 'react';
import { getCharacters } from '../services/getCharacters';

export const useCharacters = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getCharacters(page)
      .then(setCharacters)
      .finally(setLoading(false));
  }, [page]);

  return { setPage, characters, page, loading };
};
