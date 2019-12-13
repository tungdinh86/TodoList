import React, { useState, memo } from 'react'
import TodoContext from './TodoContext';

export default memo(function EditBox(props) {
  const [value, setValue] = useState(props.item.title);
  const onChange = (event) => setValue(event.target.value);

  const onKeyDown = (event, context) => {
    if (event.key === 'Enter') {
      if (value.trim() === '') {
        alert('Tên công việc không được phép để trống!');
        return;
      }
      const item = {
        id: props.item.id,
        title: value
      };
      // call doEditTodoItem function
      context.editTodo(item);
      // call close textbox function
      props.onCloseEditBox();
    }
  }

  return (
    <TodoContext.Consumer>
      {context => {
        return (
          props.editMode ?
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Nhập tiêu đề công việc"
                onChange={onChange}
                onKeyDown={event => onKeyDown(event, context)}
                value={value} />
            </div> : <></>
        )
      }}
    </TodoContext.Consumer>
  );
});
