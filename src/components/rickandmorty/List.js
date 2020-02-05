import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ characterArr }) => {
  const characterEls = characterArr.map(character => {
    return (
      <li key={character.id}>
        <ListItem {...character} /> 
      </li>
    );
  });

  return (
    <ul>
      {characterEls}
    </ul>
  );
};

List.propTypes = {
  characterArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  })).isRequired
};

export default List;
