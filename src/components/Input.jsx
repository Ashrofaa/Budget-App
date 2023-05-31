import React from 'react';

export default function Input(props) {

  let id = props.id;
  let type = props.type;
  let text = props.text;
  let value = props.value;
  
  function handleChange(event) {
    var newValue = event.target.value;
    var newName = event.target.name;
    
    props.fn(prevState => {
      return {
        ...prevState,
        [newName]: newValue
      }
    });
  };
  
  
  return (
    <div>
        <label htmlFor={id}>{text}</label>
        <input type={type} id={id} className='setupInput' name={id} onChange={handleChange} value={value} ></input>
    </div>
  )
}
