import React from 'react';

function Button(props) {
  return <button onClick={props.onClick} className={props.class}>{props.sign}</button> 
};

export default Button;

