import React from "react";
import { Table } from "react-bootstrap";

const InvoiceTable = ({ Data }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th className="text-center">Invoice Number</th>
          <th className="text-center">Invoice Date</th>
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Basic Premium</th>
          <th className="text-center">Invoice Approved</th>
          <th className="text-center">Policy Code</th>
          <th className="text-center">Start Date</th>
          <th className="text-center">End Date</th>
          <th className="text-center">Ref Number</th>
          <th className="text-center">Status</th>
          <th className="text-center">Policy Type</th>
        </tr>
      </thead>

      <tbody>
        {Data?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-center">{data?.invoiceNo}</td>
            <td className="text-center">{data?.invoiceDate}</td>
            <td className="text-center">{data?.proposerName}</td>
            <td className="text-center">{data?.basicPremium}</td>
            <td className="text-center">{data?.premiumAmount}</td>
            <td className="text-center">{data?.policyCode}</td>
            <td className="text-center">{data?.periodFrom}</td>
            <td className="text-center">{data?.periodTo}</td>
            <td className="text-center">{data?.refNo}</td>
            <td className="text-center">{data?.status}</td>
            <td className="text-center">{data?.policyType}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InvoiceTable;
