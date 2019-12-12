import React, { useState } from 'react'
import Input from './InputFnComponent';
export default function CompB() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  const onCouterClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Input onChange={e => setValue(e.target.value)} />
      <p>The value is: {value}</p>
      <button className="btn btn-success" onClick={onCouterClick}>Click me</button>
    </div>
  );
}