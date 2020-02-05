import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import List from '../components/rickandmorty/List';

const Home = () => {
  const { setPage, characters, page } = useCharacters();

  const handleIncrement = () => {
    if(page === 25) return;
    setPage(page => page + 1);
  };

  const handleDecrement = () => {
    if(page === 1) return;
    setPage(page => page - 1);
  };

  return (
    <List characterArr={characters} onIncrement={handleIncrement} onDecrement={handleDecrement} page={page} />
  );
};

export default Home;
