import React, { useState, memo } from 'react'
import EditBox from './EditBox'
export default memo(function TodoItem(props) {
  const [editMode, setEditMode] = useState(false);

  const onCloseEditBox = () => setEditMode(false);

  const onEditClick = () => setEditMode(true);

  const onFinshClick = () => {
    //check editmode
    if (editMode)
      alert('Trạng thái công việc hiện tại không thể chuyển sang hoàn thành được');
    else
      props.onFinish(props.item.id);
  }
  const activeClass = props.item.active ? 'li-active' : 'li-deactive';
  const btns = props.item.active ? (<>
    <button className="text text-success"
      onClick={onEditClick}>
      <i className="fa fa-pencil" /> Sửa
    </button>
    <span>-</span>
    <button className="text text-danger"
      onClick={onFinshClick}>
      <i className="fa fa-trash-o" /> Hoàn thành
    </button>
  </>) : '';

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
});
