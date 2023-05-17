import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleOffence = this.handleOffence.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
        count: 0,
    }
  }

  handleOffence() {
    //alert("attack clicked");
    this.setState({count: this.state.count + 1});
  }
  handleDefence() {
    //alert("defence clicked");
    this.setState({count: this.state.count - 1});
  }
  handleReset() {
    this.setState({count: 0});
  }
  render() {
    return (
      <div className="row">
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleOffence} className="width-200px">
          +1
        </button>
        <button onClick={this.handleDefence} className="width-200px">
          -1
        </button>
        <button onClick={this.handleReset} className="width-200px">Reset</button>
      </div>
    );
  }
}

export default Counter;
