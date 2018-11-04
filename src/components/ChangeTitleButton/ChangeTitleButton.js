import React from 'react';

const MoveTitleButton = (props) => {
  return (
    <div>
      <button 
        style={{ backgroundColor: props.color }}
        onClick={props.onMoveTitle}
      >
        Move
      </button>
    </div>
  );
}

export default MoveTitleButton;