import React from "react";
import { Table } from "react-bootstrap";

const ReciptTable = ({ Data }) => {
  return (
    <Table striped bordered responsive hover>
      <thead>
        <tr>
          <th className="text-center">Invoice No.</th>
          <th className="text-center">Basic Premium</th>
          <th className="text-center">Net Premium</th>
          <th className="text-center">Premium Concat</th>
          <th className="text-center">Print Amount</th>
        </tr>
      </thead>
      <tbody>
        {Data?.map((data) => (
          <tr key={Math.floor(Math.random() * 100000)}>
            <td className="text-center">{data?.invoiceNo}</td>
            <td className="text-center">{data?.basicPremium}</td>
            <td className="text-center">{data?.premium}</td>
            <td className="text-center">{data?.premiumConcat}</td>
            <td className="text-center">{data?.printAmount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ReciptTable;
