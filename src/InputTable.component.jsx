export default function InputTable({ fName, lName, age, email, password }) {
  if (fName === "") return;
  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Password</th>
      </thead>
      <tbody>
        <td>{fName}</td>
        <td>{lName}</td>
        <td>{age}</td>
        <td>{email}</td>
        <td>{password}</td>
      </tbody>
    </table>
  );
}
