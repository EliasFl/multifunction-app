import React from 'react';
import './App.css'; // <-- CSS of App.js
import {getRandomColor} from './helpers/helpers';

//Importing the ButtonContainer component
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';

class App extends React.Component {
  state = {
    title: 'Elias',
    backgroundColor: '',
  };

  componentDidMount() {
    this.setBackgroundColor();
  }

  setBackgroundColor = () => {
    this.setState({
      backgroundColor: getRandomColor()
    })
  }; 

  changeBackgroundColor = () => {
    this.setBackgroundColor();
  }

  render(){
    document.body.style.backgroundColor = this.state.backgroundColor;

    return (
      <div className="App">
        <h1 className="title">{this.state.title}</h1>
        <h4 className="subtitle">eliasflores13@outlook.com</h4>
        <ButtonsContainer
          onChangeBackgroundColor={this.changeBackgroundColor}
          backgroundColor={this.state.backgroundColor}
        />
      </div>
    );
  }
}

export default App;