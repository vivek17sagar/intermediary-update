import Table from "react-bootstrap/Table";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export const EndorsementCustomizedTable = ({ tableData }) => {
  return (
    <Table striped bordered responsive hover className="tableSize">
      <thead>
        <tr className="justify-center">
          <th className="text-center">Invoice No</th>
          <th className="text-center">Invoice Date</th>
          <th className="text-center">Reference No</th>
          <th className="text-center">Policy Code</th>
          <th className="text-center">Policy Type</th>
          <th className="text-center">Period From</th>
          <th className="text-center">Period To</th>
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Basic Premium</th>
          <th className="text-center">Net Premium</th>
          <th className="text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-xs text-center">{data?.invoiceNo}</td>
            <td className="text-xs text-center">{data?.invoiceDate}</td>
            <td className="text-xs text-center">{data?.refNo}</td>
            <td className="text-xs text-center">{data?.policyCode}</td>
            <td className="text-xs text-center">{data?.policyType}</td>
            <td className="text-xs text-center">{data?.periodFrom}</td>
            <td className="text-xs text-center">{data?.periodTo}</td>
            <td className="text-xs text-center">{data?.proposerName}</td>
            <td className="text-xs text-center">{data?.basicPremium}</td>
            <td className="text-xs text-center">{data?.premiumAmount}</td>
            <td className="text-xs text-center">{data?.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
