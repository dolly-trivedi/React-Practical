import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCounter() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrementCounter() {
    if (this.state.count === 0) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }
  resetCounter() {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementCounter.bind(this)}>Increment</button>
        <button onClick={this.resetCounter.bind(this)}>Reset</button>
        <button onClick={this.decrementCounter.bind(this)}>Decrement</button>
        <h4>{this.props.name}</h4>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
