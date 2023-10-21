import React from "react";
import { Table } from "react-bootstrap";

const QuotationTable = ({ quotationTableData }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th>Basic Premium</th>
          <th>Premium Amount</th>
          <th>Proposer Name</th>
          <th>Quotation No.</th>
        </tr>
      </thead>
      <tbody>
        {quotationTableData?.map((data) => (
          <tr key={Math.floor(Math.random() * 10000)}>
            <td>{data?.basicPremium}</td>
            <td>{data?.premiumAmount}</td>
            <td>{data?.proposerName}</td>
            <td>{data?.quotationNo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default QuotationTable;
