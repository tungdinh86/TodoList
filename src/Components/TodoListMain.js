import React from 'react'
import TodoInputBox from './TodoInputBox'
import TodoListItems from './TodoListItems'
import TodoDataItems from '../consts/TodoDataItems'

class TodoListMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: TodoDataItems
    };
    this.doAddNewTodoItem = this.doAddNewTodoItem.bind(this);
    this.onFinish = this.onFinish.bind(this);
    this.doEditTodoItem = this.doEditTodoItem.bind(this);
  }

  //addnew todo item
  doAddNewTodoItem(item) {
    //setState 
    const todolist = [...this.state.todolist, item];
    this.setState({ todolist: todolist });
  }

  // set active = false
  onFinish = (id) => {
    const { todolist } = this.state;
    const updateList = todolist.map(todo => todo.id === id ? { ...todo, active: false } : todo);
    //setStete
    this.setState({ todolist: updateList });
  }

  // thực hiện edit item by id
  doEditTodoItem(item) {
    const { todolist } = this.state;
    const updateList = todolist.map(todo => todo.id === item.id ? { ...todo, title: item.title } : todo);
    //setStete
    this.setState({ todolist: updateList });
  }

  //render
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <TodoInputBox
            doAddNewTodoItem={this.doAddNewTodoItem} />
          <hr />
          <TodoListItems
            todolist={this.state.todolist}
            onFinish={this.onFinish}
            doEditTodoItem={this.doEditTodoItem} />
        </div>
      </div>
    );
  }
}

export default TodoListMain;