import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ characterArr, onIncrement, onDecrement, page }) => {
  const characterEls = characterArr.map(character => {
    return (
      <li key={character.id}>
        <ListItem {...character} /> 
      </li>
    );
  });

  return (
    <>
      <div>
        <button onClick={onDecrement}>&#8592;</button>
        <span>{page}/25</span>
        <button onClick={onIncrement}>&#8594;</button>
      </div>
      <ul>
        {characterEls}
      </ul>
    </>
  );
};

List.propTypes = {
  characterArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  })).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default List;
