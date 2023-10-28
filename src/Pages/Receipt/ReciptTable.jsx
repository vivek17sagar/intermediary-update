import { Table } from "react-bootstrap";

const ReciptTable = ({ Data }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th className="text-center">Receipt Number</th>
          <th className="text-center">Receipt Date</th>
          <th className="text-center">Proposer Name</th>
          {/* <th className="text-center">Start Date</th> */}
          {/* <th className="text-center">End Date</th> */}
          <th className="text-center">Invoice Number</th>
          <th className="text-center">Receipt Amount</th>
          <th className="text-center">Payment Mode</th>
          <th className="text-center">Reference Number</th>
        </tr>
      </thead>
      <tbody>
        {Data?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-center">{data?.receiptNo}</td>
            <td className="text-center">{data?.receiptDate}</td>
            <td className="text-center">{data?.proposerName}</td>
            {/* <th className="text-center">{"Start Date"}</th> */}
            {/* <th className="text-center">{"End Date"}</th> */}
            <td className="text-center">{data?.invoiceNo}</td>
            <td className="text-center">{data?.premium}</td>
            <td className="text-center">{data?.paymentType}</td>
            <td className="text-center">{data?.paymentRefNo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReciptTable;

// basicPremium: "154.64";
// invoiceDate: "06 Jun 2022";
// invoiceNo: "GAIKE/06/22/INV-1000069";
// paymentRefNo: "12345";
// paymentType: "CHEQUE";
// premium: "195.66";
// printAmount: "195.66";
// proposerName: "DHP GROUP";
// receiptDate: "06 Jun 2022";
// receiptNo: "GAIKE/06/22/RCP-1000014";
