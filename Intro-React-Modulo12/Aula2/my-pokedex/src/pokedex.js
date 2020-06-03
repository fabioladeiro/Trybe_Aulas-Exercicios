import React from 'react';
import PokedexList from './pokedexList';

class Pokedex extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="pokedex-list">
        {list.map(element => <PokedexList className="content-pokemon" pokemons={element} />)}
      </div>
    )
  }
}

export default Pokedex;