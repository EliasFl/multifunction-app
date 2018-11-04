import React from 'react';
import './ButtonsContainer.css'; // <-- CSS of this component

//Importing the individual buttons components
import ChangeColorButton from '../ChangeColorButton/ChangeColorButton';
import MoveTitleButton from '../ChangeTitleButton/ChangeTitleButton';
import PrimeNumberButton from '../PrimerNumberButton/PrimeNumberButton';

const ButtonsContainer = (props) => {
  return (
    <div className="ButtonsContainer">
      <ChangeColorButton color={props.backgroundColor} className="button" onPressButton={props.onChangeBackgroundColor}/>
      <PrimeNumberButton color={props.backgroundColor} />
      <MoveTitleButton 
        color={props.backgroundColor}
        onMoveTitle={props.onMoveTitle} 
      />
      <button style={{ backgroundColor: props.backgroundColor }}>Fill form</button>
      <div>
        <button style={{ backgroundColor: props.backgroundColor }}>Whatever</button>
      </div>
    </div>
  );
};

export default ButtonsContainer;