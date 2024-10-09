import React from 'react';
import '../App.css';

function Input({ value, task, onChange, placeholder='' }) {
  return (
    <input 
      className='input'
      value={value} 
      defaultValue={task}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;