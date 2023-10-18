import Table from "react-bootstrap/Table";

export const CustomisedTable = ({ count }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(count).keys()].map((data) => (
          <tr key={data}>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
