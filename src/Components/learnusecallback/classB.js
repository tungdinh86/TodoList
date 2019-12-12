import React, { Component } from 'react'
import Input from './Input'
class B extends Component {

  state = { value: '' }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <Input onChange={e => this.onChange(e)} />
        <p>The value is: {this.state.value}</p>
      </div>
    );
  }
}
export default B;