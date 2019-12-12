import React, { Component } from 'react'
import A from './classA'
import B from './classB'
import FnA from './FnCompA'
import FnB from './FnCompB'
class Main extends Component {
  render() {
    return <div className="row">
      <div className="col">
        <div ><A /></div>
        <hr />
        <div ><B /></div>
      </div>
      <div className="col">
        <div ><FnA /></div>
        <hr />
        <div ><FnB /></div>
      </div>
    </div>
  }
}

export default Main;