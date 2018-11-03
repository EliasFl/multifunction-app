import React from 'react';

//Importing the individual buttons components
import ChangeColorButton from '../ChangeColorButton/ChangeColorButton';
import ChangeTitleButton from '../ChangeTitleButton/ChangeTitleButton';
import PrimeNumberButton from '../PrimerNumberButton/PrimeNumberButton';

const ButtonsContainer = (props) => {
  return (
    <div>
      <ChangeColorButton />
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