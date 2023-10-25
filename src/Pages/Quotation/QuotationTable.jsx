import React from "react";
import { Table } from "react-bootstrap";

const QuotationTable = ({ quotationTableData }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th className="text-center">Quotation No.</th>
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Basic Premium</th>
          <th className="text-center">Net Premium</th>
        </tr>
      </thead>
      <tbody>
        {quotationTableData?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-center">{data?.quotationNo}</td>
            <td className="text-center">{data?.proposerName}</td>
            <td className="text-center">{data?.basicPremium}</td>
            <td className="text-center">{data?.premiumAmount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default QuotationTable;
