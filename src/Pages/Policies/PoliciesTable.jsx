import Table from "react-bootstrap/Table";

// eslint-disable-next-line react/prop-types
export const PoliciesTable = ({ tableData }) => {
  console.log(tableData);

  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr className="justify-center">
          <th className="text-center">Proposer</th>
          <th className="text-center">Policy Number</th>
          <th className="text-center">Email</th>
          <th className="text-center">Mobile</th>
          <th className="text-center">Start Date</th>
          <th className="text-center">End Date</th>
          <th className="text-center">Active Member Count</th>
          <th className="text-center"> Type</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((data) => (
          <tr key={data?.refNo}>
            <td className="text-xs text-center">{data?.proposer}</td>
            <td className="text-xs text-center">{data?.policyNo}</td>
            <td className="text-xs text-center">{data?.email}</td>
            <td className="text-xs text-center">{data?.mobile}</td>
            <td className="text-xs text-center">{data?.startDate}</td>
            <td className="text-xs text-center">{data?.endDate}</td>
            <td className="text-xs text-center">{data?.activeMemberCount}</td>
            <td className="text-xs text-center">{data?.type}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

/*activeMemberCount: 1;
email: "null@mail.com";
endDate: "21 Aug 2023";
mobile: "9877896780";
policyNo: "KEA1B/CC669/22/000012/02";
proposer: "GA INSURANCE (Kenya)";
startDate: "22 Aug 2022";
type: "CORPORATE";
*/
