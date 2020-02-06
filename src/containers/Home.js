import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import List from '../components/rickandmorty/List';

const Home = () => {
  const { setPage, characters, page, loading } = useCharacters();

  const handleIncrement = () => {
    if(page === 25) return;
    setPage(page => page + 1);
  };

  const handleDecrement = () => {
    if(page === 1) return;
    setPage(page => page - 1);
  };

  if(loading) return <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Loadingsome.gif" alt="loading" />;

  return (
    <List characterArr={characters} onIncrement={handleIncrement} onDecrement={handleDecrement} page={page} />
  );
};

export default Home;
