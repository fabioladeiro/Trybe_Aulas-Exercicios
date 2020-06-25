import React, { Component } from 'react';

class StrictAccess extends Component {
  render() {
    const { user } = this.props
    return (
      <h1>{console.log(this.props)}</h1>
    )
  }
}

export default StrictAccess;