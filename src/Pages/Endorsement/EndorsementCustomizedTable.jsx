import Table from "react-bootstrap/Table";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export const EndorsementCustomizedTable = ({ tableData }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr className="justify-center">
          <th className="text-center">Invoice No</th>
          <th className="text-center">Invoice Date</th>
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Basic Premium</th>
          <th className="text-center">Net Premium</th>
          <th className="text-center">Policy Code</th>
          <th className="text-center">Start Date</th>
          <th className="text-center">End Date</th>
          <th className="text-center">Reference Number</th>
          <th className="text-center">Status</th>
          <th className="text-center">Policy Type</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-xs text-center">{data?.invoiceNo}</td>
            <td className="text-xs text-center">{data?.invoiceDate}</td>
            <td className="text-xs text-center">{data?.proposerName}</td>
            <td className="text-xs text-center">{data?.premiumAmount}</td>
            <td className="text-xs text-center">{data?.basicPremium}</td>
            <td className="text-xs text-center">{data?.policyCode}</td>
            <td className="text-xs text-center">{data?.periodFrom}</td>
            <td className="text-xs text-center">{data?.periodTo}</td>
            <td className="text-xs text-center">{data?.refNo}</td>
            <td className="text-xs text-center">{data?.status}</td>
            <td className="text-xs text-center">{data?.policyType}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
