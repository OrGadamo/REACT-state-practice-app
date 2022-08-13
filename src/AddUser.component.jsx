import { Component } from "react";
export default class AddUser extends Component {
  constructor(props) {
    super();
    this.state = {
      fName: "",
      lName: "",
      age: "",
      email: "",
      password: "",
      rePassword: "",
      isPasswordsMatch: true,
    };
  }
  setStateByInput(key, e) {
    switch (key) {
      case "lName":
        this.state.lName = e.target.value;
        break;
      case "fName":
        this.state.fName = e.target.value;
        break;
      case "age":
        this.state.age = e.target.value;
        break;
      case "email":
        this.state.email = e.target.value;
        break;
      case "password":
        this.state.password = e.target.value;
        break;
      case "rePassword":
        this.state.rePassword = e.target.value;
        break;
      default:
        console.log("Invalid Key as argument");
        break;
    }
    this.setState({});
  }
  checkForm(e) {
    e.preventDefault();
    this.state.password === this.state.rePassword
      ? alert("User has been added successfully")
      : alert("Passwords don't match");
  }
  checkPasswordsMatch() {
    this.state.isPasswordsMatch = this.state.password === this.state.rePassword;
    this.setState({});
  }
  render() {
    return (
      <div>
        <form action="" onSubmit={(e) => this.checkForm(e)}>
          <div>
            <input
              onChange={(e) => this.setStateByInput("fName", e)}
              type="text"
              placeholder="Enter First Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => this.setStateByInput("lName", e)}
              type="text"
              placeholder="Enter Last Name"
            />
          </div>
          <div>
            <input
              onChange={(e) => this.setStateByInput("age", e)}
              type="number"
              placeholder="Enter Age"
            />
          </div>
          <div>
            <input
              onChange={(e) => this.setStateByInput("email", e)}
              type="email"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <input
              onChange={(e) => {
                this.setStateByInput("password", e);
                this.checkPasswordsMatch();
              }}
              type="password"
              placeholder="Enter Paswword"
            />
            <span>
              {this.state.isPasswordsMatch ? "" : "Passwords don't Match"}
            </span>
          </div>
          <div>
            <input
              onChange={(e) => {
                this.setStateByInput("rePassword", e);
                this.checkPasswordsMatch();
              }}
              type="password"
              placeholder="Confirm Password"
            />
            <span>
              {this.state.isPasswordsMatch ? "" : "Passwords don't Match"}
            </span>
          </div>
          <button type="submit">Submit User</button>
        </form>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.fName}</td>
              <td>{this.state.lName}</td>
              <td>{this.state.age}</td>
              <td>{this.state.email}</td>
              <td>{this.state.password}</td>
              <td>{this.state.rePassword}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
