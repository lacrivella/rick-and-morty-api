import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterElements = characters.map((character) => (
    <li key={`${character.image}+${character.name}+${character.species}+${character.status}`}>
      <Character character={character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

export default Characters;
