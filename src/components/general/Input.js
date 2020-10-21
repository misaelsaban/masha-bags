import React from 'react';


function Input(props) {
  //console.log(props);
  return (
    <input onChange={props.handleChange} value={props.count} style={{"text-align": "center"}}/>
  )
}

export default Input;