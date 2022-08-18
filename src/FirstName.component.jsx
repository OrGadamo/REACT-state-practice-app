import { Component } from "react";
export default class FirstName extends Component {
  constructor(props) {
    super();
    this.state = { fName: "Or" };
  }
  setNameByInput(e) {
    this.setState({ fName: e.target.value });
  }
  componentWillMount() {
    alert("sup? sup? haa? sup?");
  }
  render() {
    return (
      <div>
        First Name Component:
        <input type="text" onChange={(e) => this.setNameByInput(e)} />
      </div>
    );
  }
  componentDidMount() {
    console.log("redered successfully");
  }
  componentDidUpdate() {
    console.log("update detected");
  }
}
