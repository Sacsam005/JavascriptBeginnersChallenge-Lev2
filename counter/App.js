import React, { Component } from 'react'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.double = this.double.bind(this);
    this.multiply = this.multiply.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  double() {
    this.setState(prevState => {
      return {
        count: prevState.count + 2
      }
    })
  }

  multiply() {
    this.setState(prevState => {
      return {
        count: prevState.count * 5
      }
    })
  }

  reset() {
    this.setState(prevState => {
      return {
        count: 0
      }
    })
  }

  render() {

    return (
      <div>
        <h1 className='text-center'>{this.state.count}</h1>
        <div className='text-center'>
          <button className="btn btn-primary text-center mx-2" onClick={this.increment}>Increment +1</button>
          <button className="btn btn-warning text-center mx-2" onClick={this.double}>Double me</button>
          <button className="btn btn-warning text-center mx-2" onClick={this.multiply}>Mulitply * 5</button>
          <button className="btn btn-secondary text-center mx-2" onClick={this.reset}>Reset</button>
        </div>
      </div>

    )
  }
}

export default App

