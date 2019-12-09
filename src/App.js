import React from 'react';
import TodoList from './Components/TodoList'
function App() {

  return (
    <div className='container'> 
      <div className='row  justify-content-center'>
        <div className='col col-6  '>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
