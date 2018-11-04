import React from 'react';
import './App.css'; // <-- CSS of App.js
import { Route } from 'react-router-dom';

//Helpers
import {getRandomColor, alternateLetters} from './helpers/helpers';

//Importing the components
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';
import FormContainer from './components/FormContainer/FormContainer';

class App extends React.Component {
  state = {
    title: 'Elias',
    backgroundColor: '',
  };

  componentDidMount() {
    this.setBackgroundColor();
  };

  startMovingTitle = () => {
    this.setState((prevState) => {
      return {
        title: alternateLetters(prevState.title)
      }
    });
  };

  moveTitle = () => {
    setInterval(this.startMovingTitle, 500);
  };

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
        
        <Route exact path="/" render={() => (
          <ButtonsContainer
            onChangeBackgroundColor={this.changeBackgroundColor}
            onMoveTitle={this.moveTitle}
            backgroundColor={this.state.backgroundColor}
          />
        )} />
        <Route path="/form" component={FormContainer} />
      </div>
    );
  }
}

export default App;