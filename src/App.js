import React from 'react';
import TodoListMain from './Components/TodoListMain'
import './App.css'
import TodoProvider from './Components/Provider';
export default function App() {
  return (
    <TodoProvider>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col col-6">
            <TodoListMain />
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
