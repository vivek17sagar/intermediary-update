import Table from "react-bootstrap/Table";

export const CustomisedTable = ({ claimProcessData }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th>memberName</th>
          <th>admissionDate</th>
          <th>claimNo</th>
          <th>displayMemberShipNo</th>
          <th>entryTime</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {claimProcessData?.map((data) => (
          <tr key={data?.claimNo}>
            <td>{data?.memberName}</td>
            <td>{data?.admissionDate}</td>
            <td>{data?.claimNo}</td>
            <td>{data?.displayMemberShipNo}</td>
            <td>{data?.entryTime}</td>
            <td>{data?.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
