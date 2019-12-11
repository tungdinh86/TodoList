import React, { useState } from 'react'
import Utilities from '../../lib/utilities';

function TodoInputBox(props) {
  const [value, setValue] = useState('');

  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (value.trim() === '') {
        alert('Tên công việc không được phép để trống!');
        return;
      }
      const item = {
        id: Utilities.randomKey(),
        active: true,
        title: value
      };
      // call doAddNewTodoItem function
      props.doAddNewTodoItem(item);
      //reset textbox to ''
      setValue('');
    }
  }
  return (
    <div className="form-group">
      <label>Nhập công việc cần làm</label>
      <input
        className="form-control"
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value} />
    </div>
  );
}

export default TodoInputBox;
