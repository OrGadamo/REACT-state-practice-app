import { Component } from "react";
import AddUser from "./AddUser.component";
import EditUser from "./EditUser.component";
import UsersTable from "./UsersTable.component";
export default class Home extends Component {
  constructor(props) {
    super();
    this.state = { componentToggle: 0 };
    this.toggleComponent = this.toggleComponent.bind(this);
  }
  toggleComponent() {
    this.state.componentToggle += 1;
    if (this.state.componentToggle > 2) this.state.componentToggle = 0;
    this.setState({});
  }
  render() {
    return (
      <div>
        {(() => {
          switch (this.state.componentToggle) {
            case 0:
              return <AddUser />;
            case 1:
              return <EditUser />;
            case 2:
              return <UsersTable />;
            default:
              console.log("Invalid Value in state component");
          }
        })()}
        <button onClick={this.toggleComponent}>Change Form</button>
      </div>
    );
  }
}
