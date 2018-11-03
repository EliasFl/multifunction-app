import React, { Component } from 'react';

class PrimeNumberButton extends Component {
  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.props.color }}>1</button>
      </div>
    );
  }
}

export default PrimeNumberButton;