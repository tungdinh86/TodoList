import React from 'react'
import Utilities from '../lib/utilities'
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtTitle: '',
            txtTime: '',
            todolist: [
                { id: Utilities.randomKey(), title: 'ăn sáng', time: '7h30' },
                { id: Utilities.randomKey(), title: 'ăn trưa', time: '12h10' },
                { id: Utilities.randomKey(), title: 'ăn tối', time: '19h30' },
            ]
        }
        this.txtTitleOnChange = this.txtTitleOnChange.bind(this);
        this.txtTimeOnChange = this.txtTimeOnChange.bind(this);
    }

    txtTitleOnChange(event) {
        this.setState({ txtTitle: event.target.value });
    }

    txtTimeOnChange(event) {
        this.setState({ txtTime: event.target.value });
    }

    ///add current item to list and reset txtbox
    addTodoitem = () => {
        if (this.state.txtTime.trim() === '' || this.state.txtTitle.trim() === '') {
            alert('Tên công việc và thời gian không được phép để trống!');
            return;
        }
        const item = { id: Utilities.randomKey(), title: this.state.txtTitle, time: this.state.txtTime };
        let todolist = this.state.todolist;
        todolist = [...todolist, item];
        this.setState({ txtTitle: '', txtTime: '', txtId: '', todolist: todolist });
    }

    //delete item
    deleteItem = (id) => {
        // delete item by Id
        let todolist = this.state.todolist.filter(x => x.id !== id);
        this.setState({ txtTitle: '', txtTime: '', txtId: '', todolist: todolist });
    }
    //render
    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className="form-group">
                        <label  >Nhập công việc cần làm</label>
                        <input id="txtTitle" className="form-control" type="text" name="" value={this.state.txtTitle} onChange={this.txtTitleOnChange}></input>
                    </div>
                    <div className="form-group">
                        <label  >Thời gian thực hiện</label>
                        <input id="txtTime" className="form-control" type="text" name="" value={this.state.txtTime} onChange={this.txtTimeOnChange}></input>
                    </div>

                    <div className="form-group">
                        <input type="button" onClick={this.addTodoitem} className="btn btn-default" name='btnSubmit' id='btnSubmit' value="Tạo công việc mới" />
                    </div>
                    <hr />
                    <ul className="list-group" id='todolist'>
                        {this.state.todolist.map(item => (
                            <li className="list-group-item  " aria-disabled="true" key={item.id}>{item.title} - {item.time} <br /> <button className='text text-success' onClick={() => this.deleteItem(item.id)}><i className='fa fa-pencil' /> Sửa</button> - <button className='text text-danger' onClick={() => this.deleteItem(item.id)}><i className='fa   fa-trash-o' /> Xóa</button> </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoList;