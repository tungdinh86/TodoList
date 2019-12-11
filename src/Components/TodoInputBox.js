import React from 'react'
import Utilities from '../lib/utilities';

class TodoInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  //txtTitle On Change
  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      if (this.state.value.trim() === '') {
        alert('Tên công việc không được phép để trống!');
        return;
      }
      //item
      const item = {
        id: Utilities.randomKey(),
        active: true,
        title: this.state.value
      };
      // addnew todo item
      this.props.doAddNewTodoItem(item);
      //reset textbox
      this.setState({ value: '' });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.value !== nextState.value;
  }

  render() {
    return (
      <div className="form-group">
        <label>Nhập công việc cần làm</label>
        <input
          className="form-control"
          type="text"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.value} />
      </div>
    );
  }
}

export default TodoInputBox;