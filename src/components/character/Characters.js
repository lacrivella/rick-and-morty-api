import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterElements = characters.map(({ name, status, species, image }) => (
    <li key={character}>
      <Character
        name={name}
        status={status}
        species={species}
        image={image} />
    </li>
  ));
  return (
    <ul>
      {characterElements}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
