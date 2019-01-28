import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import { DisplayPokemon } from './DisplayPokemon';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayPokemon: {},
      error: false
    }
  }

updateError = (boolean) => {
  this.setState({error: boolean})
}

  setPokemon = (pokemon) => {
    this.setState({displayPokemon: pokemon})
  }
  render() {
    return (
      <div className="App">
      <Form setPokemon={this.setPokemon} updateError={this.updateError}/>
      {!this.state.error ?
      <DisplayPokemon abilities={this.state.displayPokemon.abilities}
      base_experience={this.state.displayPokemon.base_experience}/>
      :  "NOT FOUND!"
    }
      </div>
    );
  }
}

export default App;
