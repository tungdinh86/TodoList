import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item  "
        key={this.props.id}>
        {this.props.title} - {this.props.time}
        <br />
        <button
          className='text text-success'
          onClick={() => this.props.editItem(this.props.id)}>
          <i className='fa fa-pencil' /> Sửa
        </button>
        <span>-</span>
        <button
          className='text text-danger'
          onClick={() => this.props.deleteItem(this.props.id)}>
          <i className='fa   fa-trash-o' /> Xóa
         </button>
      </li>
    );
  }
}

export default TodoItem;