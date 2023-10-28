import Table from "react-bootstrap/Table";

// eslint-disable-next-line react/prop-types
export const CommissionTable = ({ tableData }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr className="justify-center">
          <th className="text-center">Invoice Number</th>
          <th className="text-center">Invoice Date</th>
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Policy Code</th>
          <th className="text-center">Start Date</th>
          <th className="text-center">End Date</th>
          <th className="text-center">Invoice Amount</th>
          <th className="text-center">Withholding Tax</th>
          <th className="text-center">Status</th>
          <th className="text-center">Policy Type</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-xs text-center">{data?.inoiceNo}</td>
            <td className="text-xs text-center">{data?.inoiceDate}</td>
            <td className="text-xs text-center">{data?.proposerName}</td>
            <td className="text-xs text-center">{data?.policyCode}</td>
            <td className="text-xs text-center">{data?.startDate}</td>
            <td className="text-xs text-center">{data?.endDate}</td>
            <td className="text-xs text-center">{data?.invoiceAmount}</td>
            <td className="text-xs text-center">{data?.widthHoldTax}</td>
            <td className="text-xs text-center">{data?.status}</td>
            <td className="text-xs text-center">{data?.policyType}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// agentCommision: "0.00";
// basicPremium: "24,000.00";
// endDate: "31 Dec 2050";
// inoiceDate: "10 Oct 2023";
// inoiceNo: "GAIKE/10/23/INV-1000031";
// invoiceAmount: "24,000.00";
// policyCode: "KEA1B/MC853/23/000002/01";
// policyType: "NEW";
// proposerName: "ALEX COMMUNITY";
// refNo: "KEA1B/MC853/23/000002/01/231001513";
// startDate: "01 Jan 2020";
// status: "AWAITING APPROVAL";
// widthHoldTax: "0.00";
