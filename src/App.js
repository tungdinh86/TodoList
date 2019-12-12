import React from 'react';
import TodoListMain from './Components/Hook/TodoListMain'
import './App.css'
import Main from './Components/learnusecallback/main'
function App() {
  return (
    <div className='container'>
     <div className='row  justify-content-center'>
        <div className='col   '>
          <TodoListMain />
        </div>
      </div>
      <hr/>
      <hr/>
      <hr/>
      <div className='row  justify-content-center'>
        <div className='col'>
          <Main />
        </div>
      </div>
     
    </div>
  );
}

export default App;
