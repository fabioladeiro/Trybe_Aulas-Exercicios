import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemons;

    return (
        <p>
          <strong>{ name }</strong><br />
          {type}<br />
          {averageWeight.value}{averageWeight.measurementUnit}<br />
          <img src={image} alt="Imagem Pokemon"></img>
        </p>
    )
  }
}

export default Pokemon;