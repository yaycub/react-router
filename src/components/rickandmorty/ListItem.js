import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name, image }) => (
  <>
    <h2>{name}</h2>
    <img src={image} alt={name} />
  </>
);

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ListItem;
