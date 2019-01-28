import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: ""
    }
  }

  handleChange = (e) => {
    this.setState({pokemonName: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get("https://pokeapi.co/api/v2/pokemon/" + this.state.pokemonName.toLowerCase())
    .then(response => {
      this.props.setPokemon(response.data)
      this.props.updateError(false)
    })
    .catch(err => {
      this.props.updateError(true)
    })
    this.setState({pokemonName: ""})

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        placeholder="Pokemon Name"
        value={this.state.pokemonName}
        onChange={this.handleChange} />
        <input type="submit" value="Seach Pokemon!" />
      </form>
    )
  }
}

export default Form;
