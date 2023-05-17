import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0
    }
  }

  handleOffence() {
    alert("attack clicked");
  }
  handleDefence() {
    alert("defence clicked");
  }
  render() {
    return (
      <div className="row">
        <h1>Counter: {this.state.cou}</h1>
        <button onClick={this.handleOffence} className="width-200px">
          +1
        </button>
        <button onClick={this.handleDefence} className="width-200px">
          -1
        </button>
      </div>
    );
  }
}

export default Counter;
