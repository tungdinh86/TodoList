import React, { useState, memo } from 'react'
import Utilities from '../lib/utilities';
import TodoContext from './TodoContext';

export default memo(function TodoInputBox(props) {
  const [value, setValue] = useState('');

  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = (event, context) => {
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
      // call addTodo function 
      context.addTodo(item);
      //reset textbox to ''
      setValue(''); 
    }
  }

  return (
    <TodoContext.Consumer>
      {
        context => (
          <div className="form-group">
            <label>Nhập công việc cần làm</label>
            <input
              className="form-control"
              type="text"
              onChange={onChange}
              onKeyDown={event => onKeyDown(event, context)}
              value={value} />
          </div>
        )
      }
    </TodoContext.Consumer>);
});
