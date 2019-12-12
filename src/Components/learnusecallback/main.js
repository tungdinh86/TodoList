import React, { useState } from 'react'
import FnB from './FnCompB'
export default function Main() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  }
  console.log('main render');
  return (
    <div className="row">
      <div className="col">
        <div ><FnB /></div>
        <button className="btn btn-success" onClick={onClick}>Click me!</button> <br />
        {count}
      </div>
    </div>
  )
} 
