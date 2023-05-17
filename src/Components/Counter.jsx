import React from "react";
import ThrowBall from "../images/attack.png";
import CatchBall from "../images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleOffence = () => {
    this.setState((previousState) => {
        let newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
      };
    });
  }
  handleDefence = () => {
    this.setState((previousState) => {
        let newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
      };
    });
  }

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode == 0) {
        this.handleOffence();
    } else {
        this.handleDefence();
    }
  }

  handleReset = () => {
    this.setState(() => {
        return {
            count: 0,
        };
    });
  }

  render() {
    return (
      <div className="row text-center">
        <h1>Score: {this.state.count}</h1>
        <p>You win at +10 points and lose at -10 points!</p>
        <p>Last Play: </p>
        <h3>Game Status: </h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            className="image-styles image-border-green p-4 rounded"
            title="imgOffence"
            alt="image offence"
            src={ThrowBall}
            onClick={this.handleOffence}
          ></img>
        </div>
        <div className="col-6 col-md-3">
          <img
            className="image-styles image-border-red p-4 rounded"
            title="imgDefence"
            alt="image defence"
            src={CatchBall}
            onClick={this.handleDefence}
          ></img>
        </div>
        <div className="col-12 col-md-4 offset-md-4">
            <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button>
            <br/>
            <button className="btn btn-secondary w-100 mt-2" onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
