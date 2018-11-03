import React from 'react';

//Importing the ButtonContainer component
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Elias</h1>
        <h3>eliasflores13@outlook.com</h3>
        <ButtonsContainer />
      </div>
    );
  }
}

export default App;