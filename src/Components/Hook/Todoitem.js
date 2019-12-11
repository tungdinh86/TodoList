import React, { useState } from 'react'
import EditBox from './EditBox'
function TodoItem(props) {
  const [editMode, setEditMode] = useState(false);

  const onCloseEditBox = () => setEditMode(false);

  const onEditClick = () => setEditMode(true);

  const activeClass = props.item.active ? 'li-active' : 'li-deactive';
  const btns = props.item.active ? (<>
    <button className='text text-success'
      onClick={onEditClick}>
      <i className='fa fa-pencil' /> Sửa
    </button>
    <span>-</span>
    <button className='text text-danger'
      onClick={() => props.onFinish(props.item.id)}>
      <i className='fa fa-trash-o' /> Hoàn thành
    </button>
  </>) : '';
  //return
  return (
    <li className={`list-group-item ${activeClass} `}
      key={props.id} >
      {props.item.title}
      <br />
      <EditBox
        item={props.item}
        editMode={editMode}
        onCloseEditBox={onCloseEditBox}
        doEditTodoItem={props.doEditTodoItem} />
      {btns}
    </li>
  );
}

export default TodoItem;
