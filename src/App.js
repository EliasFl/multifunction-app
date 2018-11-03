import React from 'react';
import './App.css'; // <-- CSS of App.js

//Importing the ButtonContainer component
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1 className="title">Elias</h1>
        <h4 className="subtitle">eliasflores13@outlook.com</h4>
        <ButtonsContainer />
      </div>
    );
  }
}

export default App;