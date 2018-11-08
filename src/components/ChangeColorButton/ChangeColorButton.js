import React from 'react';

const ChangeColorButton = React.memo(function ChangeColorButton({onPressButton, color}) {
  return (
    <div onClick={onPressButton}>
      <button style={{ backgroundColor: color }}>
        Change color
      </button>
    </div>
  );
});

export default ChangeColorButton;