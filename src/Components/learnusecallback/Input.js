import React, { PureComponent } from 'react'

class Input extends PureComponent {
  rendercount = 0;
  render() {
    this.rendercount ++;
    return (
      <div>
        <input onChange={this.props.onChange} />
        <p>Input Component is render {this.rendercount} times</p>
      </div>
    )
  }
}
export default Input;