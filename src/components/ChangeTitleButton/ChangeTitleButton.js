import React from 'react';

const ChangeTitleButton = React.memo(function ChangeTitleButton(props) {
  return (
    <div>
      <button style={{ backgroundColor: props.color }}>Modify title</button>
    </div>
  );
});

export default ChangeTitleButton;