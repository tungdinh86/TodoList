import React from 'react'

class EditBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.item.title,
    };
    this.txtEditOnChange = this.txtEditOnChange.bind(this);
    this.txtEditOnKeyDown = this.txtEditOnKeyDown.bind(this);
  }

  //txtEdit On Change
  txtEditOnChange(event) {
    this.setState({ value: event.target.value });
  }

  //txtEditOnKeyDown
  txtEditOnKeyDown(event) {
    if (event.key === 'Enter') {
      if (this.state.value.trim() === '') {
        alert('Tên công việc không được phép để trống!');
        return;
      }
      const item = {
        id: this.props.item.id,
        title: this.state.value
      };
      // call doEditTodoItem function
      this.props.doEditTodoItem(item);
      // reset text box
      this.setState({ value: this.props.item.title });
      // call close textbox function
      this.props.onCloseEditBox();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState
  }

  render() {
    const html = this.props.editMode ?
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Nhập tiêu đề công việc"
          onChange={this.txtEditOnChange}
          onKeyDown={this.txtEditOnKeyDown}
          value={this.state.value} />
      </div> : '';
    return (<>{html}</>);
  }
}

export default EditBox;