import React from 'react';
import './ButtonsContainer.css'; // <-- CSS of this component

//Importing the individual buttons components
import ChangeColorButton from '../ChangeColorButton/ChangeColorButton';
import ChangeTitleButton from '../ChangeTitleButton/ChangeTitleButton';
import PrimeNumberButton from '../PrimerNumberButton/PrimeNumberButton';

const ButtonsContainer = (props) => {
  return (
    <div className="ButtonsContainer">
      <ChangeColorButton className="button" />
      <ChangeTitleButton />
      <PrimeNumberButton />
      <button>Fill form</button>
      <div>
        <button>Whatever</button>
      </div>
    </div>
  );
};

export default ButtonsContainer;