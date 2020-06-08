import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="pokedex-list">
        {list.map(element => <Pokemon className="content-pokemon" pokemons={element} />)}
      </div>
    )
  }
}

export default Pokedex;