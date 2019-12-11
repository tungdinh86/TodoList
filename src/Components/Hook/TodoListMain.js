import React, { useState } from 'react'
import TodoInputBox from './TodoInputBox'
import TodoListItems from './TodoListItems'
import TodoDataItems from '../../consts/TodoDataItems'

function TodoListMain(props) {
  const [todolist, setTodolist] = useState(TodoDataItems);
  const [count, setCount] = useState(0);

  const onCouterClick = () => {
    setCount(count + 1);
  }

  //addnew todo item
  const doAddNewTodoItem = (item) => {
    //setState 
    setTodolist([...todolist, item]);
  }

  // set active = false
  const onFinish = (id) => {
    const updateList = todolist.map(todo => todo.id === id ? { ...todo, active: false } : todo);
    //setState
    setTodolist(updateList);
  }

  // thực hiện edit item by id
  const doEditTodoItem = (item) => {
    const updateList = todolist.map(todo => todo.id === item.id ? { ...todo, title: item.title } : todo);
    //setStete
    setTodolist(updateList);
  }

  //render 
  return (
    <div className='card'>
      <div className='card-body'>
        <TodoInputBox
          doAddNewTodoItem={doAddNewTodoItem} />
        <hr />
        <TodoListItems
          todolist={todolist}
          onFinish={onFinish}
          doEditTodoItem={doEditTodoItem} />
        <button onClick={onCouterClick} className="btn btn-success">Counter ++</button>
        <br /> {count}
      </div>
    </div>
  );
}

export default TodoListMain;
