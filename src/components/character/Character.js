import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, status, species, image }) {
  return (
    <>
      <img src={image} />
      <p>{name}</p>
      <p>{species}</p>
      <p>{status}</p>
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
