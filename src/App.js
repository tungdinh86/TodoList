import React from 'react';
import TodoListMain from './Components/TodoListMain'
function App() {

  return (
    <div className='container'> 
      <div className='row  justify-content-center'>
        <div className='col col-6  '>
          <TodoListMain />
        </div>
      </div>
    </div>
  );
}

export default App;
