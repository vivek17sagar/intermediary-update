import React from "react";
import { Table } from "react-bootstrap";

const ReciptTable = ({ Data }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th className="text-center">Receipt Number</th>
          <th className="text-center">Recipt Date</th>
          <th className="text-center">Proposer Name</th>
          <th className="text-center">Start Date</th>
          <th className="text-center">End Date</th>
          <th className="text-center">Invoice Number</th>
          <th className="text-center">Recipt Amount</th>
          <th className="text-center">Payment Mode</th>
          <th className="text-center">Reference Number</th>
        </tr>
      </thead>
      <tbody>
        {Data?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-center">{data?.premiumConcat}</td>
            <td className="text-center">{data?.invoiceDate}</td>
            <td className="text-center">{data?.proposerName}</td>
            <th className="text-center">{"Start Date"}</th>
            <th className="text-center">{"End Date"}</th>
            <td className="text-center">{data?.invoiceNo}</td>
            <td className="text-center">{data?.basicPremium}</td>
            <td className="text-center">{data?.premium}</td>
            <td className="text-center">{data?.printAmount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReciptTable;
