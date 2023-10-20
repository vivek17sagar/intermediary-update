import Table from "react-bootstrap/Table";

export const CustomisedTable = ({ Data, table }) => {
  console.log(Data);
  console.log(table);
  return (
    <>
      {table === "claim" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>memberName</th>
              <th>admissionDate</th>
              <th>claimNo</th>
              <th>displayMemberShipNo</th>
              <th>entryTime</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={data?.claimNo}>
                <td>{data?.memberName}</td>
                <td>{data?.admissionDate}</td>
                <td>{data?.claimNo}</td>
                <td>{data?.displayMemberShipNo}</td>
                <td>{data?.entryTime}</td>
                <td>{data?.status}</td>
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
              <tr key={data?.claimNo}>
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
