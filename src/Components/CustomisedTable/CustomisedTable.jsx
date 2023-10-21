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
              <th>invoiceNo</th>
              <th>invoiceDate</th>
              <th>proposerName</th>
              <th>basicPremium</th>
              <th>premiumAmount</th>
              <th>policyCode</th>
              <th>periodFrom</th>
              <th>periodTo</th>
              <th>refNo</th>
              <th>status</th>
              <th>policyType</th>
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
              <th>invoiceNo</th>
              <th>basicPremium</th>
              <th>premium</th>
              <th>printAmount</th>
              <th>premiumConcat</th>
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
              <th>memberName</th>
              <th>memberNo</th>
              <th>empCode</th>
              <th>joingDate</th>
              <th>validFrom</th>
              <th>validUpto</th>
              <th>mobileNo</th>
              <th>email</th>
              <th>proposer</th>
              <th>product</th>
              <th>category</th>
              <th>status</th>
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
