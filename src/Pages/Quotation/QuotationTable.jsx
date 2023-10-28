import { Table } from "react-bootstrap";

const QuotationTable = ({ quotationTableData }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th className="text-center">Quotation Number</th>
          <th className="text-center">Quotation Date</th>
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Start Date</th>
          <th className="text-center">End Date</th>
          <th className="text-center">Basic Premium</th>
          <th className="text-center">Quotation Amount</th>
          <th className="text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {quotationTableData?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-center">{data?.quotationNo}</td>
            <td className="text-center">{data?.quotationDate}</td>
            <td className="text-center">{data?.proposerName}</td>
            <td className="text-center">{data?.startDate}</td>
            <td className="text-center">{data?.endDate}</td>
            <td className="text-center">{data?.basicPremium}</td>
            <td className="text-center">{data?.premiumAmount}</td>
            <td className="text-center">{data?.quotationStatus}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default QuotationTable;

// basicPremium: "154.64";
// endDate: "31 Dec 2022";
// premiumAmount: "195.66";
// proposerName: "DHP GROUP";
// quotationDate: "06 Jun 2022";
// quotationNo: "GAIKE/06/22/QUT-1000011";
// quotationStatus: "INVOICED";
// startDate: "01 Jan 2022";
