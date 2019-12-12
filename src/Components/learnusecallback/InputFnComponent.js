import React, { useRef, memo } from 'react'

export default memo(function Input({ onChange }) {
  const rendercount = useRef(0);
  rendercount.current++;
  console.log('render input component');
  return (
    <div>
      <input onChange={onChange} />
      <p>Input Component is render {rendercount.current} times</p>
    </div>
  )
});     