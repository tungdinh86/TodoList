import React from 'react'
import EditBox from './EditBox'
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    }
    this.onCloseEditBox = this.onCloseEditBox.bind(this);
  }

  onCloseEditBox() {
    this.setState({ status: false });
  }

  onEditClick = () => {
    // change edit
    this.setState({ status: true });
  }

  render() {
    let activeClass = this.props.item.active ? 'li-active' : 'li-deactive';
    let btns = '';
    if (this.props.item.active) {
      btns = (<>
        <button
          className='text text-success'
          onClick={this.onEditClick}>
          <i className='fa fa-pencil' /> Sửa
        </button>
        <span>-</span>
        <button
          className='text text-danger'
          onClick={() => this.props.onFinish(this.props.item.id)}>
          <i className='fa fa-trash-o' /> Hoàn thành
         </button>
      </>)
    }
    //return
    return (
      <li className={`list-group-item ${activeClass} `}
        key={this.props.id}>
        {this.props.item.title}
        <br />
        <EditBox
          item={this.props.item}
          status={this.state.status}
          onCloseEditBox={this.onCloseEditBox}
          doEditTodoItem={this.props.doEditTodoItem}
        />
        {btns}
      </li>
    );
  }
}

export default TodoItem;