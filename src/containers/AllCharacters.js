import React, { Component } from 'react';
import Characters from '../components/character/Characters';
import { getCharacters } from '../services/rickandmortyApi';

export default class AllCharacters extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    getCharacters()
      .then(characters => {
        this.setState({ characters });
      });
  }
  render() {
    return <Characters characters={this.state.characters} />; 
  }
}
