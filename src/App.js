import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { DisplayPokemon } from './DisplayPokemon';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayPokemon: {}
    }
  }

  setPokemon = (pokemon) => {
    this.setState({displayPokemon: pokemon})
  }
  render() {
    return (
      <div className="App">
      <Form setPokemon={this.setPokemon}/>
      {this.state.displayPokemon.abilities ?
      <DisplayPokemon abilities={this.state.displayPokemon.abilities} base_experience={this.state.displayPokemon.base_experience}/>
      : null
    }
      </div>
    );
  }
}

export default App;
