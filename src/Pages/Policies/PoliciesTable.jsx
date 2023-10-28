import Table from "react-bootstrap/Table";

// eslint-disable-next-line react/prop-types
export const PoliciesTable = ({ tableData }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr className="justify-center">
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Policy Number</th>
          <th className="text-center">Start Date</th>
          <th className="text-center">End Date</th>
          <th className="text-center">Client Type</th>
          <th className="text-center">Mobile Number</th>
          <th className="text-center">Email Id</th>
          <th className="text-center">Active Member Count</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-xs text-center">{data?.proposer}</td>
            <td className="text-xs text-center">{data?.policyNo}</td>
            <td className="text-xs text-center">{data?.startDate}</td>
            <td className="text-xs text-center">{data?.endDate}</td>
            <td className="text-xs text-center">{data?.type}</td>
            <td className="text-xs text-center">{data?.mobile}</td>
            <td className="text-xs text-center">{data?.email}</td>
            <td className="text-xs text-center">{data?.activeMemberCount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
