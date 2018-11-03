import React from 'react';

const ChangeColorButton = React.memo(function ChangeColorButton(props) {
  return (
    <div onClick={props.onPressButton}>
      <button style={{ backgroundColor: props.color }}>
        Change color
      </button>
    </div>
  );
});

export default ChangeColorButton;