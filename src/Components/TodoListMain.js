import React from 'react'
import Utilities from '../lib/utilities'
import TodoInputBox from './TodoInputBox'
import TodoListItems from './TodoListItems'

class TodoListMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtTitle: '',
      txtTime: '',
      currentId: '',
      todolist: [
        { id: Utilities.randomKey(), title: 'ăn sáng', time: '7h30' },
        { id: Utilities.randomKey(), title: 'ăn trưa', time: '12h10' },
        { id: Utilities.randomKey(), title: 'ăn tối', time: '19h30' },
      ]
    }
    this.txtTitleOnChange = this.txtTitleOnChange.bind(this);
    this.txtTimeOnChange = this.txtTimeOnChange.bind(this);
    this.doEditTodoItem = this.doEditTodoItem.bind(this);
    this.reset = this.reset.bind(this);
  }

  //txtTitle On Change
  txtTitleOnChange(event) {
    this.setState({ txtTitle: event.target.value });
  }

  //txtTime On Change
  txtTimeOnChange(event) {
    this.setState({ txtTime: event.target.value });
  }

  ///submit: add new item or edit current item
  submit = () => {
    if (this.state.txtTime.trim() === '' ||
      this.state.txtTitle.trim() === '') {
      alert('Tên công việc và thời gian không được phép để trống!');
      return;
    }
    if (this.state.currentId === '') {
      // add new todo item
      const item = {
        id: Utilities.randomKey(),
        title: this.state.txtTitle,
        time: this.state.txtTime
      };
      //setState
      const todolist = [...this.state.todolist, item];
      this.setState(
        {
          txtTitle: '',
          txtTime: '',
          currentId: '',
          todolist: todolist
        }
      );
    }
    else {
      // edit todoitem
      this.doEditTodoItem(this.state.currentId);
    }
  }

  // delete item by Id
  deleteItem = (id) => {
    let todolist = this.state.todolist.filter(x => x.id !== id);
    this.setState(
      {
        txtTitle: '',
        txtTime: '',
        todolist: todolist
      }
    );
  }

  // Edit Todo item by Id
  editItem = (id) => {
    let editItem = this.state.todolist.filter(x => x.id === id);
    this.setState(
      {
        txtTitle: editItem[0].title,
        txtTime: editItem[0].time,
        currentId: editItem[0].id
      }
    );
  }

  // thực hiện edit item by id
  doEditTodoItem(id) { 
    const todolist = this.state.todolist;
    for (let i = 0; i < todolist.length; i++) {
      if (todolist[i].id === id) {
        todolist[i].title = this.state.txtTitle;
        todolist[i].time = this.state.txtTime;
        break;
      }
    }
    //setStete
    this.setState({ todolist: todolist });
  }

  reset = () => {
    this.setState({
      txtTitle: '',
      txtTime: '',
      currentId: ''
    });
  }

  //render
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <TodoInputBox
            txtTitle={this.state.txtTitle}
            txtTime={this.state.txtTime}
            txtTimeOnChange={this.txtTimeOnChange}
            submit={this.submit}
            txtTitleOnChange={this.txtTitleOnChange}
            reset={this.reset} />
          <hr />
          <TodoListItems
            todolist={this.state.todolist}
            editItem={this.editItem}
            deleteItem={this.deleteItem} />

        </div>
      </div>
    );
  }
}

export default TodoListMain;