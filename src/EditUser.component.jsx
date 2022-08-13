import { Component } from "react";
export default class EditUser extends Component {
  constructor(props) {
    super();
    this.state = {
      fName: { value: props.fName, isChanged: false },
      lName: { value: props.lName, isChanged: false },
      age: { value: props.age, isChanged: false },
      email: { value: props.email, isChanged: false },
      password: { value: props.password, isChanged: false },
    };
  }
  setStateByInput(key, e) {
    switch (key) {
      case "fName":
        this.state.fName.value = e.target.value;
        this.state.fName.isChanged = true;
        break;
      case "lName":
        this.state.lName.value = e.target.value;
        this.state.lName.isChanged = true;
        break;
      case "age":
        this.state.age.value = e.target.value;
        this.state.age.isChanged = true;
        break;
      case "email":
        this.state.email.value = e.target.value;
        this.state.email.isChanged = true;
        break;
      case "password":
        this.state.password.value = e.target.value;
        this.state.password.isChanged = true;
        break;
      default:
        console.log("Invalid Key as argument");
        break;
    }
    this.setState({});
  }
  checkEditForm(e) {
    e.preventDefault();
    let isValueFull = true;
    for (let key in this.state) {
      if (this.state[key]["value"] === "") isValueFull = false;
    }
    isValueFull
      ? alert("Edit completed successfully")
      : alert("Edit failed, empty value detected");
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.checkEditForm(e)}>
          <div>
            <input
              onChange={(e) => this.setStateByInput("fName", e)}
              type="text"
              placeholder="Enter First Name"
            />
            <span>
              {this.state.fName.isChanged ? "Value has been Changed" : ""}
            </span>
          </div>
          <div>
            <input
              onChange={(e) => this.setStateByInput("lName", e)}
              type="text"
              placeholder="Enter Last Name"
            />
            <span>
              {this.state.lName.isChanged ? "Value has been Changed" : ""}
            </span>
          </div>
          <div>
            <input
              onChange={(e) => this.setStateByInput("age", e)}
              type="number"
              placeholder="Enter Age"
            />
            <span>
              {this.state.age.isChanged ? "Value has been Changed" : ""}
            </span>
          </div>
          <div>
            <input
              onChange={(e) => this.setStateByInput("email", e)}
              type="email"
              placeholder="Enter Email"
            />
            <span>
              {this.state.email.isChanged ? "Value has been Changed" : ""}
            </span>
          </div>
          <div>
            <input
              onChange={(e) => this.setStateByInput("password", e)}
              type="password"
              placeholder="Enter Password"
            />
            <span>
              {this.state.password.isChanged ? "Value has been Changed" : ""}
            </span>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
