import React, { useState, useCallback } from 'react'
import Input from './InputFnComponent';
export default function CompA() {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => setValue(e.target.value), []);
  console.log('component A render');

  return (
    <div>
      <Input onChange={onChange} />
      <p>The value is: {value}</p>
    </div>
  );
}