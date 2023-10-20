import Table from "react-bootstrap/Table";

// eslint-disable-next-line react/prop-types
export const EndorsementCustomizedTable = ({ tableData }) => {
  console.log(tableData);

  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr className="justify-center">
          <th className="text-center">Basic Premium</th>
          <th className="text-center">Invoice Date</th>
          <th className="text-center">Invoice No</th>
          <th className="text-center">Period From</th>
          <th className="text-center">Period To</th>
          <th className="text-center">Policy Code</th>
          <th className="text-center">Policy Type</th>
          <th className="text-center">Premium Amount</th>
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Reference No</th>
          <th className="text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((data) => (
          <tr key={data?.refNo}>
            <td className="text-xs text-center">{data?.basicPremium}</td>
            <td className="text-xs text-center">{data?.invoiceDate}</td>
            <td className="text-xs text-center">{data?.invoiceNo}</td>
            <td className="text-xs text-center">{data?.periodFrom}</td>
            <td className="text-xs text-center">{data?.periodTo}</td>
            <td className="text-xs text-center">{data?.policyCode}</td>
            <td className="text-xs text-center">{data?.policyType}</td>
            <td className="text-xs text-center">{data?.premiumAmount}</td>
            <td className="text-xs text-center">{data?.proposerName}</td>
            <td className="text-xs text-center">{data?.refNo}</td>
            <td className="text-xs text-center">{data?.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

// basicPremium: "-1,044.00";
// invoiceDate: "06 Jun 2022";
// invoiceNo: "GAIKE/06/22/INV-1000072";
// periodFrom: "01 Jan 2022";
// periodTo: "31 Dec 2022";
// policyCode: "KEA1B/PC527/22/000002/01";
// policyType: "NEW";
// premiumAmount: "-1,049.00";
// proposerName: "DHP GROUP";
// refNo: "KEA1B/PC527/22/000001/01/221000075";
// status: "AWAITING APPROVAL";
