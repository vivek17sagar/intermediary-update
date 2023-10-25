import Table from "react-bootstrap/Table";

export const CustomisedTable = ({ Data, table }) => {
  return (
    <>
      {table === "claim" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th className="text-center">Member Name</th>
              <th className="text-center">Admission Date</th>
              <th className="text-center">Claim No.</th>
              <th className="text-center">Display MemberShipNo</th>
              <th className="text-center">Entry Time</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td className="text-center">{data?.memberName}</td>
                <td className="text-center">{data?.admissionDate}</td>
                <td className="text-center">{data?.claimNo}</td>
                <td className="text-center">{data?.displayMemberShipNo}</td>
                <td className="text-center">{data?.entryTime}</td>
                <td className="text-center">{data?.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : table === "invoice" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>Invoice No.</th>
              <th>Invoice Date</th>
              <th>Proposer Name</th>
              <th>Basic Premium</th>
              <th>Premium Amount</th>
              <th>Policy Code</th>
              <th>Period From</th>
              <th>Period To</th>
              <th>Ref No.</th>
              <th>Status</th>
              <th>Policy Type</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td>{data?.invoiceNo}</td>
                <td>{data?.invoiceDate}</td>
                <td>{data?.proposerName}</td>
                <td>{data?.basicPremium}</td>
                <td>{data?.premiumAmount}</td>
                <td>{data?.policyCode}</td>
                <td>{data?.periodFrom}</td>
                <td>{data?.periodTo}</td>
                <td>{data?.refNo}</td>
                <td>{data?.status}</td>
                <td>{data?.policyType}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : table === "receipt" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>Invoice No.</th>
              <th>Basic Premium</th>
              <th>Premium</th>
              <th>Print Amount</th>
              <th>Premium Concat</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td>{data?.invoiceNo}</td>
                <td>{data?.basicPremium}</td>
                <td>{data?.premium}</td>
                <td>{data?.printAmount}</td>
                <td>{data?.premiumConcat}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Member No.</th>
              <th>Emp Code</th>
              <th>Joining Date</th>
              <th>Valid From</th>
              <th>Valid Upto</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>Proposer</th>
              <th>Product</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td>{data?.memberName}</td>
                <td>{data?.memberNo}</td>
                <td>{data?.empCode}</td>
                <td>{data?.joingDate}</td>
                <td>{data?.validFrom}</td>
                <td>{data?.validUpto}</td>
                <td>{data?.mobileNo}</td>
                <td>{data?.email}</td>
                <td>{data?.proposer}</td>
                <td>{data?.product}</td>
                <td>{data?.category}</td>
                <td>{data?.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
