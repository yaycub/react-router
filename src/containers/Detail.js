import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Detail.css';
import { useOneCharacter } from '../hooks/useOneCharacter';

const Detail = ({ match }) => {
  const oneCharacter = useOneCharacter(match.params.id);
  const { name, status, species, origin, location, image } = oneCharacter;
  
  return (
    <article className={styles.Detail}>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
      <ul>
        <li>Statue: {status}</li>
        <li>Species: {species}</li>
        <li>Origin: {origin}</li>
        <li>Location: {location}</li>
      </ul>
    </article>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Detail;
