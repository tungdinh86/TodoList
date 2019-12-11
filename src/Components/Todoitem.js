import React from 'react'
import EditBox from './EditBox'
class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
    };
    this.onCloseEditBox = this.onCloseEditBox.bind(this);
  }

  onCloseEditBox() {
    this.setState({ editMode: false });
  }

  onEditClick = () => {
    // change edit
    this.setState({ editMode: true });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  render() {
    const activeClass = this.props.item.active ? 'li-active' : 'li-deactive';
    const btns = this.props.item.active ? (<>
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
    </>) : '';
    //return
    return (
      <li className={`list-group-item ${activeClass} `}
        key={this.props.id} >
        {this.props.item.title}
        <br />
        <EditBox
          item={this.props.item}
          editMode={this.state.editMode}
          onCloseEditBox={this.onCloseEditBox}
          doEditTodoItem={this.props.doEditTodoItem} />
        {btns}
      </li>
    );
  }
}

export default TodoItem;