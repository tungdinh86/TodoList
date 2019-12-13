import React from 'react'
import TodoInputBox from './TodoInputBox'
import TodoListItems from './TodoListItems'

function TodoListMain() {
  //render 
  return (
    <div className="card">
      <div className="card-body">
        <TodoInputBox />
        <hr />
        <TodoListItems />
      </div>
    </div>
  );
}

export default TodoListMain;
