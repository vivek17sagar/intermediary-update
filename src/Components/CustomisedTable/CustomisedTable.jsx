import Table from "react-bootstrap/Table";

export const CustomisedTable = ({ Data, table }) => {
  return (
    <>
      {table === "claim" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th className="text-center">Claim Number</th>
              <th className="text-center">Claim Id</th>
              <th className="text-center">Member Name</th>
              <th className="text-center">Membership No</th>
              <th className="text-center">Admission Date</th>
              <th className="text-center">Entry Time</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td className="text-center">{data?.claimNo}</td>
                <td className="text-center">{data?.claimID}</td>
                <td className="text-center">{data?.memberName}</td>
                <td className="text-center">{data?.displayMemberShipNo}</td>
                <td className="text-center">{data?.admissionDate}</td>
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
              <th className="text-center">Invoice No.</th>
              <th className="text-center">Invoice Date</th>
              <th className="text-center">Proposer Name</th>
              <th className="text-center">Basic Premium</th>
              <th className="text-center">Premium Amount</th>
              <th className="text-center">Policy Code</th>
              <th className="text-center">Period From</th>
              <th className="text-center">Period To</th>
              <th className="text-center">Ref No.</th>
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
      ) : table === "policies" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr className="justify-center">
              <th className="text-center">Proposer Name</th>
              <th className="text-center">Policy Number</th>
              <th className="text-center">Start Date</th>
              <th className="text-center">End Date</th>
              <th className="text-center">Client Type</th>
              <th className="text-center">Mobile Number</th>
              <th className="text-center">Email Id</th>
              <th className="text-center">Active Member Count</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td className="text-xs text-center">{data?.proposer}</td>
                <td className="text-xs text-center">{data?.policyNo}</td>
                <td className="text-xs text-center">{data?.startDate}</td>
                <td className="text-xs text-center">{data?.endDate}</td>
                <td className="text-xs text-center">{data?.type}</td>
                <td className="text-xs text-center">{data?.mobile}</td>
                <td className="text-xs text-center">{data?.email}</td>
                <td className="text-xs text-center">
                  {data?.activeMemberCount}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : table === "renewal" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th className="text-center">Proposer Name</th>
              <th className="text-center">Policy Code</th>
              <th className="text-center">Start Date</th>
              <th className="text-center">End Date</th>
              <th className="text-center">Renewal Date</th>
              <th className="text-center">Renewal Count</th>
            </tr>
            {/* endDate : "30 Sep 2022" policyCode : "KEA1B/CC698/22/000002/01"
            proposerName : "DHP GROUP" renewalDate : "01 Oct 2022" startDate :
            "01 Apr 2022" totalRenewalCount : 0 */}
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td className="text-center">{data?.proposerName}</td>
                <td className="text-center">{data?.policyCode}</td>
                <td className="text-center">{data?.startDate}</td>
                <td className="text-center">{data?.endDate}</td>
                <td className="text-center">{data?.renewalDate}</td>
                <td className="text-center">{data?.totalRenewalCount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : table === "receipt" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th className="text-center">Invoice No.</th>
              <th className="text-center">Basic Premium</th>
              <th className="text-center">Premium</th>
              <th className="text-center">Print Amount</th>
              <th className="text-center">Premium Concat</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td className="text-center">{data?.invoiceNo}</td>
                <td className="text-center">{data?.basicPremium}</td>
                <td className="text-center">{data?.premium}</td>
                <td className="text-center">{data?.printAmount}</td>
                <td className="text-center">{data?.premiumConcat}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th className="text-center">Member Name</th>
              <th className="text-center">Member Number</th>
              <th className="text-center">Employee Code</th>
              <th className="text-center">Joining Date</th>
              <th className="text-center">Start Date</th>
              <th className="text-center">End Date</th>
              <th className="text-center">Proposer Name</th>
              <th className="text-center">Product</th>
              <th className="text-center">Category</th>
              <th className="text-center">Mobile Number</th>
              <th className="text-center">Email</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td className="text-center">{data?.memberName}</td>
                <td className="text-center">{data?.memberNo}</td>
                <td className="text-center">{data?.empCode}</td>
                <td className="text-center">{data?.joingDate}</td>
                <td className="text-center">{data?.validFrom}</td>
                <td className="text-center">{data?.validUpto}</td>
                <td className="text-center">{data?.proposer}</td>
                <td className="text-center">{data?.product}</td>
                <td className="text-center">{data?.category}</td>
                <td className="text-center">{data?.mobileNo}</td>
                <td className="text-center">{data?.email}</td>
                <td className="text-center">{data?.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
