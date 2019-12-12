import React, { useState } from 'react';
// import TodoListMain from './Components/Hook/TodoListMain'
// import './App.css'
import Main from './Components/learnusecallback/main'
import MemoComponent from './Components/learnusecallback/MemoComponent'
function App() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  }
  return (
    <div className='container'>
      <div className='row  justify-content-center'>
        <div className='col'>
          <Main />
        </div>
      </div>

    </div>
  );
}

export default App;
