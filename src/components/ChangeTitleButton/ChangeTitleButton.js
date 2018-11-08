import React from 'react';

const MoveTitleButton = ({color, onMoveTitle}) => {
  return (
    <div>
      <button 
        style={{ backgroundColor: color }}
        onClick={onMoveTitle}
      >
        Move
      </button>
    </div>
  );
}

export default MoveTitleButton;