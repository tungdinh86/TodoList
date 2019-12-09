import React from 'react'

class TodoInputBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="form-group">
          <label>Nhập công việc cần làm</label>
          <input
            id="txtTitle"
            className="form-control"
            type="text"
            name=""
            value={this.props.txtTitle}
            onChange={this.props.txtTitleOnChange} />
        </div>
        <div className="form-group">
          <label>Thời gian thực hiện</label>
          <input
            id="txtTime"
            className="form-control"
            type="text"
            name=""
            value={this.props.txtTime}
            onChange={this.props.txtTimeOnChange} />
        </div>
        <div className="form-group">
          <input type="button"
            className="btn btn-default"
            name='btnSubmit'
            id='btnSubmit'
            value="Submit"
            onClick={this.props.submit} />
            <input type="button"
            className="btn btn-default" 
            value="Reset"
            onClick={this.props.reset} />
        </div>
      </>
    );
  }
}

export default TodoInputBox;