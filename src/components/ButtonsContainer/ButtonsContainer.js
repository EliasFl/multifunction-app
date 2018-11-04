import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonsContainer.css'; // <-- CSS of this component

//Importing the individual buttons components
import ChangeColorButton from '../ChangeColorButton/ChangeColorButton';
import MoveTitleButton from '../ChangeTitleButton/ChangeTitleButton';
import PrimeNumberButton from '../PrimerNumberButton/PrimeNumberButton';

const ButtonsContainer = (props) => {
  return (
    <div className="ButtonsContainer">
      <ChangeColorButton color={props.backgroundColor} onPressButton={props.onChangeBackgroundColor}/>
      <PrimeNumberButton color={props.backgroundColor} />
      <MoveTitleButton 
        color={props.backgroundColor}
        onMoveTitle={props.onMoveTitle} 
      />
      <Link className="button" to="/form" style={{ backgroundColor: props.backgroundColor }}>
        Introduction form
      </Link>
      <div className="hidden-button">
        <button onClick={() => window.alert('whatever')} style={{ backgroundColor: props.backgroundColor }}>Whatever</button>
      </div>
    </div>
  );
};

export default ButtonsContainer;