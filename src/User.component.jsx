import { Component } from "react";
import InputTable from "./InputTable.component";
export default class User extends Component {
  constructor(props) {
    super();
    this.state = {
      fName: "NO NAME",
      lName: "",
      age: "",
      email: "",
      password: "",
      printTable: false,
    };
    this.changeStateNameToMine = this.changeStateNameToMine.bind(this);
  }
  printMyName() {
    console.log("Or Gadamo");
  }
  changeStateNameToMine() {
    this.setState({ fName: "Or Gadamo" });
  }
  changeStateValueByKey(e, key) {
    switch (key) {
      case "fName":
        this.setState({ fName: e.target.value });
        break;
      case "lName":
        this.setState({ lName: e.target.value });
        break;
      case "age":
        this.setState({ age: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        console.log("invalid key as argument");
        break;
    }
  }
  printInputTable(e) {
    e.preventDefault();
    this.setState({ printTable: true });
  }
  render() {
    return (
      <div>
        <button onClick={this.printMyName}>console</button>
        <button onClick={this.changeStateNameToMine}>print name</button>
        <h1>{this.state.fName}</h1>
        <form onSubmit={(e) => this.printInputTable(e)} action="">
          <input
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => this.changeStateValueByKey(e, "fName")}
          />
          <input
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => this.changeStateValueByKey(e, "lName")}
          />
          <input
            type="number"
            placeholder="Enter Age"
            onChange={(e) => this.changeStateValueByKey(e, "age")}
          />
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => this.changeStateValueByKey(e, "email")}
          />
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => this.changeStateValueByKey(e, "password")}
          />
          <button type="submit">Submit</button>
        </form>
        {(() => {
          if (this.state.printTable) {
            return (
              <InputTable
                fName={this.state.fName}
                lName={this.state.lName}
                age={this.state.age}
                email={this.state.email}
                password={this.state.password}
              />
            );
          }
        })()}
      </div>
    );
  }
}
