import React, { useState } from 'react'
import Input from './Input'
function CompC() {
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  return (
    <div>
      <Input onChange={onChange} />
      <p>The value is: {value}</p>
    </div>
  );
}
export default CompC;