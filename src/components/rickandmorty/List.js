import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './styles/List.css';
import { Link } from 'react-router-dom';

const List = ({ characterArr, onIncrement, onDecrement, page }) => {
  const characterEls = characterArr.map(character => {
    return (
      <li key={character.id}>
        <Link to={`/characters/${character.id}`}>
          <ListItem {...character} /> 
        </Link>
      </li>
    );
  });

  return (
    <>
      <section className={styles.List}>
        <div>
          <button onClick={onDecrement}>&#8592;</button>
          <span>{page}/25</span>
          <button onClick={onIncrement}>&#8594;</button>
        </div>
        <ul>
          {characterEls}
        </ul>
      </section>
    </>
  );
};

List.propTypes = {
  characterArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired
};

export default List;
