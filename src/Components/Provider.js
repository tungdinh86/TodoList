import React, { useState } from 'react'
import TodoDataItems from '../consts/TodoDataItems'
import TodoContext from './TodoContext';

export default function TodoProvider(props) {

  const [todolist, setTodolist] = useState(TodoDataItems);

  const addTodo = function (item) {
    const newList = [...todolist, item];
    setTodolist(newList);
  }

  const editTodo = function (item) {
    const updateList = todolist.map(todo => todo.id === item.id ? { ...todo, title: item.title } : todo);
    setTodolist(updateList);
  }
  const finshTodo = id => {
    const newList = todolist.map(todo => todo.id === id ? { ...todo, active: false } : todo);
    setTodolist(newList);
  }

  return (
    <TodoContext.Provider value={{ todolist, addTodo, editTodo, finshTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
}