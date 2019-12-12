import React, { useState } from 'react'

function EditBox(props) {
  const [value, setValue] = useState(props.item.title);
  const onChange = (event) => setValue(event.target.value);
  const onKeyDown = (event) => {
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
      props.doEditTodoItem(item);
      // call close textbox function
      props.onCloseEditBox();
    }
  }
  return (
    props.editMode ?
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Nhập tiêu đề công việc"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value} />
      </div> : <></>
  );
}

export default EditBox;
