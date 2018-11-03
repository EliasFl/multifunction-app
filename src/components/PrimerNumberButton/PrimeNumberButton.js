import React, { Component } from 'react';

//Helpers
import { getNextPrimeNumber } from '../../helpers/helpers';

class PrimeNumberButton extends Component {
  state = {
    number: 1,
  }

  handleGetNextPrimeNumber = () => {
    this.setState((prevState) => {
      return {
        number: getNextPrimeNumber(prevState.number),
      }
    })
  };

  render() {
    return (
      <div>
        <button 
          style={{ backgroundColor: this.props.color }}
          onClick={this.handleGetNextPrimeNumber}
        >
          {this.state.number}
        </button>
      </div>
    );
  }
}

export default PrimeNumberButton;