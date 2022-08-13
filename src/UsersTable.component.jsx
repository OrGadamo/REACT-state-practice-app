import { Component } from "react";
export default class UsersTable extends Component {
  constructor(props) {
    super();
    this.state = {
      users: [
        {
          fName: "Or1",
          lName: "Gadamo",
          age: "23",
          email: "or@gmail.com",
          password: "OrSama",
        },
        {
          fName: "Or2",
          lName: "Gadamo",
          age: "23",
          email: "or@gmail.com",
          password: "OrSama",
        },
        {
          fName: "Or3",
          lName: "Gadamo",
          age: "23",
          email: "or@gmail.com",
          password: "OrSama",
        },
        {
          fName: "Or4",
          lName: "Gadamo",
          age: "23",
          email: "or@gmail.com",
          password: "OrSama",
        },
      ],
    };
    this.updateUsersTable = this.updateUsersTable.bind(this);
  }
  updateUsersTable(index) {
    let isUpdated = false;
    for (let key in this.state.users[index]) {
      let inputTag = document.getElementById(`${key}${index}_input`);
      if (inputTag.value !== this.state.users[index][key]) {
        this.state.users[index][key] = inputTag.value;
        inputTag.style.color = "red";
        isUpdated = true;
      }
    }
    this.setState({});
    if (isUpdated) alert("Updated successfully");
  }
  deleteUserFromTable(userIndex) {
    console.log(userIndex);
    this.state.users = this.state.users.filter(
      (user, index) => index !== userIndex
    );
    this.setState({});
    alert("User has been deleted");
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Password</th>
          </thead>
          <tbody>
            {this.state.users.map((user, index) => (
              <tr>
                <td>
                  <input
                    id={`fName${index}_input`}
                    type="text"
                    defaultValue={user.fName}
                  />
                </td>
                <td>
                  <input
                    id={`lName${index}_input`}
                    type="text"
                    defaultValue={user.lName}
                  />
                </td>
                <td>
                  <input
                    id={`age${index}_input`}
                    type="number"
                    defaultValue={user.age}
                  />
                </td>
                <td>
                  <input
                    id={`email${index}_input`}
                    type="email"
                    defaultValue={user.email}
                  />
                </td>
                <td>
                  <input
                    id={`password${index}_input`}
                    type="text"
                    defaultValue={user.password}
                  />
                </td>
                <td>
                  <button onClick={() => this.updateUsersTable(index)}>
                    Check Changes
                  </button>
                </td>
                <td>
                  <button onClick={() => this.deleteUserFromTable(index)}>
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
