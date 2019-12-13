import React, { useState, memo } from 'react'
import EditBox from './EditBox'
import TodoContext from './TodoContext';
export default memo(function TodoItem(props) {
  const [editMode, setEditMode] = useState(false);

  const onCloseEditBox = () => setEditMode(false);

  const onEditClick = () => setEditMode(true);

  const onFinshClick = (context) => context.finshTodo(props.item.id);

  const activeClass = props.item.active ? 'li-active' : 'li-deactive';

  const showHideBtns = context => {
    return (props.item.active ?
      (<>
        <button className="text text-success"
          onClick={onEditClick}>
          <i className="fa fa-pencil" /> Sửa
        </button>
        {btnFinish(context)}
      </>) : <></>)
  };

  const btnFinish = context => {
    return (!editMode ?
      <><span>-</span>
        <button className="text text-danger"
          onClick={() => onFinshClick(context)}>
          <i className="fa fa-trash-o" /> Hoàn thành
        </button></>
      : <></>)
  };
  return (
    <TodoContext.Consumer>
      {context => (
        <li className={`list-group-item ${activeClass} `}
          key={props.id} >
          {props.item.title}
          <br />
          <EditBox
            item={props.item}
            editMode={editMode}
            onCloseEditBox={onCloseEditBox}
            doEditTodoItem={props.doEditTodoItem} />
          {showHideBtns(context)}
        </li>
      )}
    </TodoContext.Consumer>
  );
});
