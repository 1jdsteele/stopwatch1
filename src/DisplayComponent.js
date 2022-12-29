import React from 'react';

function DisplayComponent(props) {
  return (
    <div>
        <h1>hello form display component</h1>
        <span>{props.time.h}</span>&nbsp;:&nbsp;
    </div>
  );
}

export default DisplayComponent;
