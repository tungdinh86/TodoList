import React, { useState, useCallback } from 'react'
import TodoInputBox from './TodoInputBox'
import TodoListItems from './TodoListItems'
import TodoDataItems from '../consts/TodoDataItems'

function TodoListMain() {
  const [todolist, setTodolist] = useState(TodoDataItems);
  const [count, setCount] = useState(0);
  const onCounterClick = () => {
    setCount(count + 1);
  }
  //addnew todo item
  const doAddNewTodoItem = useCallback(function (item) {
    //setState 
    setTodolist([...todolist, item]);
  }, [todolist]);

  // set active = false
  const onFinish = useCallback(id => {
    const updateList = todolist.map(todo => todo.id === id ? { ...todo, active: false } : todo);
    //setState
    setTodolist(updateList);
  }, [todolist]);

  // thực hiện edit item by id
  const doEditTodoItem = useCallback((item) => {
    const updateList = todolist.map(todo => todo.id === item.id ? { ...todo, title: item.title } : todo);
    //setStete
    setTodolist(updateList);
  }, [todolist]);

  //render 
  return (
    <div className="card">
      <div className="card-body">
        count = {count}
        <button className="btn btn-success" onClick={onCounterClick}>CLick me now</button>
        <hr />
        <TodoInputBox
          doAddNewTodoItem={doAddNewTodoItem} />
        <hr />
        <TodoListItems
          todolist={todolist}
          onFinish={onFinish}
          doEditTodoItem={doEditTodoItem} />
      </div>
    </div>
  );
}

export default TodoListMain;
