import React, { Component } from 'react';

class PictureDogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImage: "",
      name,
      array
    };
  }

  componentDidMount() {
    this.fecthFunction();
  }

  fecthFunction = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => {
        this.setState({ dogImage: result})
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogImage.message.includes("terrier")) return false;
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("URL", this.state.dogImage.message)
    alert(this.state.dogImage.message.split("/")[4]);
  }

  render() {
    const { dogImage } = this.state;
    if (dogImage === "") return <h1>Loading...</h1>
    return (
      <div>
        <h2>Doguinho</h2>
        <div>
          <img src={dogImage.message} width="400"/>
        </div>
        <br />
        <div>
          <button onClick={this.fecthFunction}>Novo doguinho</button>
        </div>
      </div>
    )
  }
}

export default PictureDogs;
