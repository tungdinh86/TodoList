import React, { Component } from 'react'
import Input from './Input'
class A extends Component {
  state = { value: '' }
  onChange = e => { 
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <Input onChange={this.onChange} />
        <p>The value is: {this.state.value}</p>
      </div>
    );
  }
}
export default A;