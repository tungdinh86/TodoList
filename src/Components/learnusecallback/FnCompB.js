import React, { useState, useCallback, memo } from 'react'
import Input from './InputFnComponent';
export default memo(function CompB() {
  const [value, setValue] = useState('');
  const onChange = useCallback(function (e) { setValue(e.target.value) }, []);
  console.log('comp B render');
  return (
    <div>
      <Input onChange={onChange} />
    </div>
  );
}
) 
