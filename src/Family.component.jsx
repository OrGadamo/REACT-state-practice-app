import { Component } from "react";
export default class Family extends Component {
  constructor(props) {
    super();
    this.state = { lName: "Gadamo" };
  }
  setFamilyNameByInput(e) {
    this.setState({ lName: e.target.value });
  }
  componentWillMount() {
    alert("Welcome");
  }
  render() {
    return (
      <div>
        Family Component:
        <input type="text" onChange={(e) => this.setFamilyNameByInput(e)} />
      </div>
    );
  }
  componentDidMount() {
    console.log("Hello World!");
  }
  componentDidUpdate() {
    console.log("new update detected");
  }
}
