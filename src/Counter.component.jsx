import { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super();
    this.state = { previous: +props.startNum, counter: +props.startNum };
    this.counterUp = this.counterUp.bind(this);
    this.counterDown = this.counterDown.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }
  counterUp() {
    this.state.counter += 1;
    if (this.state.counter % 7 === 0) {
      this.setState({ previous: this.state.counter, counter: "Boom" });
    } else {
      this.setState({
        previous: this.state.counter,
        counter: this.state.counter,
      });
    }
  }
  counterDown() {
    this.state.counter -= 1;
    if (this.state.counter % 7 === 0) {
      this.setState({ previous: this.state.counter, counter: "Boom" });
    } else {
      this.setState({
        previous: this.state.counter,
        counter: this.state.counter,
      });
    }
  }
  resetCounter() {
    this.setState({ counter: 0, previous: 0 });
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.counterUp}>Press Up</button>
        <button onClick={this.counterDown}>Press Down</button>
        <button onClick={this.resetCounter}>Press Reset</button>
      </div>
    );
  }
}
