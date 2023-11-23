import Table from "react-bootstrap/Table";

export const CustomisedTable = ({ Data, table }) => {
  return (
    <>
      {table === "claim" ? (
        // <Table striped bordered responsive hover>
        //   <div></div>
        //   <tr>
        //     <th className="text-center">Claim Number</th>
        //     <th className="text-center">Member Name</th>
        //     <th className="text-center">Membership No</th>
        //     <th className="text-center">Admission Date</th>
        //     <th className="text-center">Status</th>
        //     {/* <th className="text-center">Invoice Breakup</th> */}
        //   </tr>

        //   <tbody>
        //     {Data?.map((data) => (
        //       <>
        //         <tr key={Math.floor(Math.random() * 100000)}>
        //           <td className="text-center">{data?.claimNo}</td>
        //           <td className="text-center">{data?.memberName}</td>
        //           <td className="text-center">{data?.displayMemberShipNo}</td>
        //           <td className="text-center">{data?.admissionDate}</td>
        //           <td className="text-center">{data?.status}</td>
        //         </tr>
        //         <tr key={Math.floor(Math.random() * 100000)}>
        //           <td colSpan="6" className="text-center">
        //             Invoice Breakup
        //           </td>
        //         </tr>
        //         <tr colSpan="6" style={{ border: "1px solid blue" }}>
        //           <td colSpan="6" style={{ border: "1px solid yellow" }}>
        //             {data?.invoiceBreakUp?.map((invData) => (
        //               <Table
        //                 striped
        //                 bordered
        //                 responsive
        //                 hover
        //                 key={Math.floor(Math.random() * 100000)}
        //               >
        //                 <tr>
        //                   <th className="text-center">Provider Name</th>
        //                   <th className="text-center">Invoice Number</th>
        //                   <th className="text-center">Invoice Date</th>
        //                   <th className="text-center">Invoice Amount</th>
        //                   <th className="text-center">Remarks</th>
        //                   {/* <th className="text-center">
        //                     Invoice Line Item Breakup
        //                   </th> */}
        //                 </tr>
        //                 <tr key={Math.floor(Math.random() * 100000)}>
        //                   <td className="text-center">
        //                     {invData?.providerName}
        //                   </td>
        //                   <td className="text-center">{invData?.invoiceNo}</td>
        //                   <td className="text-center">
        //                     {invData?.invoiceDate}
        //                   </td>
        //                   <td className="text-center">
        //                     {invData?.invoiceAmount}
        //                   </td>
        //                   <td className="text-center">{invData?.remarks}</td>

        //                   <td>
        //                     {invData?.invoiceLineItemBreakUp?.map(
        //                       (lineItem) => (
        //                         <Table
        //                           striped
        //                           bordered
        //                           responsive
        //                           hover
        //                           key={Math.floor(Math.random() * 100000)}
        //                         >
        //                           <tr key={Math.floor(Math.random() * 100000)}>
        //                             <td colSpan="6" className="text-center">
        //                               Invoice Line Item Breakup
        //                             </td>
        //                           </tr>
        //                           <tr>
        //                             <td colSpan="6">
        //                               <tr>
        //                                 <th className="text-center">
        //                                   Item Name
        //                                 </th>
        //                                 <th className="text-center">
        //                                   Document Type
        //                                 </th>
        //                                 <th className="text-center">
        //                                   Bill Number
        //                                 </th>
        //                                 <th className="text-center">
        //                                   Net Amount
        //                                 </th>
        //                               </tr>
        //                               <tr
        //                                 key={Math.floor(Math.random() * 100000)}
        //                               >
        //                                 <td className="text-center">
        //                                   {lineItem?.itemName}
        //                                 </td>
        //                                 <td className="text-center">
        //                                   {lineItem?.docType}
        //                                 </td>
        //                                 <td className="text-center">
        //                                   {lineItem?.billNo}
        //                                 </td>
        //                                 <td className="text-center">
        //                                   {lineItem?.netAmount}
        //                                 </td>
        //                               </tr>
        //                             </td>
        //                           </tr>
        //                         </Table>
        //                       )
        //                     )}
        //                   </td>
        //                 </tr>
        //               </Table>
        //             ))}
        //           </td>
        //         </tr>
        //       </>
        //     ))}
        //   </tbody>
        // </Table>
        // <Table striped bordered responsive>
        //   <div></div>
        //   <tr>
        //     <th className="text-center">Claim Number</th>
        //     <th className="text-center">Member Name</th>
        //     <th className="text-center">Membership No</th>
        //     <th className="text-center">Admission Date</th>
        //     <th className="text-center">Status</th>
        //     {/* <th className="text-center">Invoice Breakup</th> */}
        //   </tr>

        //   <tbody>
        //     {Data?.map((data) => (
        //       <>
        //         <tr key={Math.floor(Math.random() * 100000)}>
        //           <td className="text-center">{data?.claimNo}</td>
        //           <td className="text-center">{data?.memberName}</td>
        //           <td className="text-center">{data?.displayMemberShipNo}</td>
        //           <td className="text-center">{data?.admissionDate}</td>
        //           <td className="text-center">{data?.status}</td>
        //         </tr>
        //         <tr key={Math.floor(Math.random() * 100000)}>
        //           <td colSpan="6" className="text-center font-bold w-10">
        //             Invoice Breakup
        //           </td>
        //         </tr>
        //         <tr>
        //           <th className="text-center">Provider Name</th>
        //           <th className="text-center">Invoice Number</th>
        //           <th className="text-center">Invoice Date</th>
        //           <th className="text-center">Invoice Amount</th>
        //           <th className="text-center">Remarks</th>
        //         </tr>
        //         {data?.invoiceBreakUp?.map((invData) => (
        //           <tr key={Math.floor(Math.random() * 100000)}>
        //             <td className="text-center">{invData?.providerName}</td>
        //             <td className="text-center">{invData?.invoiceNo}</td>
        //             <td className="text-center">{invData?.invoiceDate}</td>
        //             <td className="text-center">{invData?.invoiceAmount}</td>
        //             <td className="text-center">{invData?.remarks}</td>
        //           </tr>
        //         ))}
        //         <tr
        //           key={Math.floor(Math.random() * 100000)}
        //           // style={{ border: "1px solid blue" }}
        //         >
        //           <td
        //             colSpan="6"
        //             // style={{ border: "1px solid yellow" }}
        //             className="text-center font-bold"
        //           >
        //             Invoice Line Item Breakup
        //           </td>
        //         </tr>
        //         {data?.invoiceBreakUp?.map((invData) => (
        //           <tr key={Math.floor(Math.random() * 100000)}>
        //             <td colSpan="6">
        //               {invData?.invoiceLineItemBreakUp?.map((lineItem) => (
        //                 <Table
        //                   striped
        //                   bordered
        //                   responsive
        //                   hover
        //                   key={Math.floor(Math.random() * 100000)}
        //                 >
        //                   <tr key={Math.floor(Math.random() * 100000)}>
        //                     <th className="text-center">Item Name</th>
        //                     <th className="text-center">Document Type</th>
        //                     <th className="text-center">Bill Number</th>
        //                     <th className="text-center">Net Amount</th>
        //                   </tr>
        //                   <tr key={Math.floor(Math.random() * 100000)}>
        //                     <td className="text-center">
        //                       {lineItem?.itemName}
        //                     </td>
        //                     <td className="text-center">{lineItem?.docType}</td>
        //                     <td className="text-center">{lineItem?.billNo}</td>
        //                     <td className="text-center">
        //                       {lineItem?.netAmount}
        //                     </td>
        //                   </tr>
        //                 </Table>
        //               ))}
        //             </td>
        //           </tr>
        //         ))}
        //       </>
        //     ))}
        //   </tbody>
        // </Table>
        <Table
          striped
          // bordered
          responsive
          hover
          style={{ border: "1px solid grey" }}
        >
          <tr className="bg-indigo-500">
            <th className="text-center">Claim Number</th>
            <th className="text-center">Member Name</th>
            <th className="text-center">Membership No</th>
            <th className="text-center">Admission Date</th>
            <th className="text-center">Status</th>
          </tr>

          {Data?.map((data) => (
            <>
              <tr
                key={Math.floor(Math.random() * 100000)}
                className=" bg-gray-300"
              >
                <td className="text-center ">{data?.claimNo}</td>
                <td className="text-center">{data?.memberName}</td>
                <td className="text-center">{data?.displayMemberShipNo}</td>
                <td className="text-center">{data?.admissionDate}</td>
                <td className="text-center">{data?.status}</td>
              </tr>

              <tr>
                <td colSpan="5">
                  <Table
                    striped
                    // bordered
                    responsive
                    hover
                    style={{ border: "1px solid grey" }}
                  >
                    <tr>
                      <th className="text-center" colSpan="12">
                        Invoice BreakUp
                      </th>
                    </tr>
                    <tr className="bg-blue-300">
                      <th className="text-center">Provider Name</th>
                      <th className="text-center">Invoice Number</th>
                      <th className="text-center">Invoice Date</th>
                      <th className="text-center">Invoice Amount</th>
                      <th className="text-center">Remarks</th>
                    </tr>
                    {data?.invoiceBreakUp?.map((invData) => (
                      <>
                        <tr>
                          <td className="text-center">
                            {invData?.providerName}
                          </td>

                          <td className="text-center">{invData?.invoiceNo}</td>

                          <td className="text-center">
                            {invData?.invoiceDate}
                          </td>

                          <td className="text-center">
                            {invData?.invoiceAmount}
                          </td>
                          <td className="text-center">{invData?.remarks}</td>
                        </tr>
                        <tr>
                          <td colSpan="5">
                            <Table
                              striped
                              // bordered
                              responsive
                              hover
                              style={{ border: "0px solid grey" }}
                            >
                              <tr>
                                <th className="text-center" colSpan="12">
                                  Invoice Line Item BreakUp
                                </th>
                              </tr>
                              <tr className="bg-blue-300">
                                <th className="text-center">Item Name</th>
                                <th className="text-center">Document Type</th>
                                <th className="text-center">Bill Number</th>
                                <th className="text-center">Net Amount</th>
                              </tr>
                              {invData?.invoiceLineItemBreakUp?.map(
                                (lineItem) => (
                                  <>
                                    <tr>
                                      <td className="text-center">
                                        {lineItem?.itemName}
                                      </td>

                                      <td className="text-center">
                                        {lineItem?.docType}
                                      </td>

                                      <td className="text-center">
                                        {lineItem?.billNo}
                                      </td>

                                      <td className="text-center">
                                        {lineItem?.netAmount}
                                      </td>
                                    </tr>
                                  </>
                                )
                              )}
                            </Table>
                          </td>
                        </tr>
                      </>
                    ))}
                  </Table>
                </td>
              </tr>
            </>
          ))}
        </Table>
      ) : // <Table striped bordered responsive hover>
      //   <tr>
      //     <td className="text-center font-bold">Claim List</td>
      //   </tr>
      //   <tr>
      //     <td>
      //       <Table>
      //         <thead>
      //           <tr>
      //             <th className="text-center">Claim Number</th>
      //             <th className="text-center">Member Name</th>
      //             <th className="text-center">Membership No</th>
      //             <th className="text-center">Admission Date</th>
      //             <th className="text-center">Status</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {Data?.map((data) => (
      //             <tr key={Math.floor(Math.random() * 100000)}>
      //               <td className="text-center">{data?.claimNo}</td>
      //               <td className="text-center">{data?.memberName}</td>
      //               <td className="text-center">
      //                 {data?.displayMemberShipNo}
      //               </td>
      //               <td className="text-center">{data?.admissionDate}</td>
      //               <td className="text-center">{data?.status}</td>
      //             </tr>
      //           ))}
      //         </tbody>
      //       </Table>
      //     </td>
      //   </tr>
      //   <tr>
      //     <td className="text-center font-bold">Invoice Breakup</td>
      //   </tr>
      //   <td>
      //     <Table>
      //       <thead>
      //         <tr>
      //           <th className="text-center">Provider Name</th>
      //           <th className="text-center">Invoice Number</th>
      //           <th className="text-center">Invoice Date</th>
      //           <th className="text-center">Invoice Amount</th>
      //           <th className="text-center">Remarks</th>
      //         </tr>
      //       </thead>
      //       <tbody>
      //         {Data?.map((data) => (
      //           <tr key={Math.floor(Math.random() * 100000)}>
      //             {data?.invoiceBreakUp?.map((itemData) => (
      //               <tr key={Math.floor(Math.random() * 100000)}>
      //                 <td className="text-center">
      //                   {itemData?.providerName}
      //                 </td>
      //                 <td className="text-center">{itemData?.invoiceNo}</td>
      //                 <td className="text-center">{itemData?.invoiceDate}</td>
      //                 <td className="text-center">
      //                   {itemData?.invoiceAmount}
      //                 </td>
      //                 <td className="text-center">{itemData?.remarks}</td>
      //               </tr>
      //             ))}
      //           </tr>
      //         ))}
      //       </tbody>
      //     </Table>
      //   </td>
      //   <tr>
      //     <td className="text-center font-bold">Invoice Line Item Breakup</td>
      //   </tr>
      //   <tr>
      //     <td>
      //       <Table>
      //         <thead>
      //           <tr>
      //             <th className="text-center">Claim Number</th>
      //             <th className="text-center">Member Name</th>
      //             <th className="text-center">Membership No</th>
      //             <th className="text-center">Admission Date</th>
      //             <th className="text-center">Status</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {Data?.map((data) => (
      //             <tr key={Math.floor(Math.random() * 100000)}>
      //               <td className="text-center">{data?.claimNo}</td>
      //               <td className="text-center">{data?.memberName}</td>
      //               <td className="text-center">
      //                 {data?.displayMemberShipNo}
      //               </td>
      //               <td className="text-center">{data?.admissionDate}</td>
      //               <td className="text-center">{data?.status}</td>
      //             </tr>
      //           ))}
      //         </tbody>
      //       </Table>
      //     </td>
      //   </tr>

      // </Table>
      table === "PaidClaim" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th className="text-center">Claim Number</th>
              {/* <th className="text-center">Claim Id</th> */}
              <th className="text-center">Member Name</th>
              <th className="text-center">Membership No</th>
              <th className="text-center">Admission Date</th>
              {/* <th className="text-center">Entry Time</th> */}
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td className="text-center">{data?.claimNo}</td>
                {/* <td className="text-center">{data?.claimID}</td> */}
                <td className="text-center">{data?.memberName}</td>
                <td className="text-center">{data?.displayMemberShipNo}</td>
                <td className="text-center">{data?.admissionDate}</td>
                {/* <td className="text-center">{data?.entryTime}</td> */}
                <td className="text-center">{data?.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : table === "invoice" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th className="text-center">Invoice Number</th>
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
              <th className="text-center">Invoice Number</th>
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
      ) : table === "admissionReport" ? (
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th className="text-center">Proposer Name</th>
              <th className="text-center">Hospital Name</th>
              <th className="text-center">Patient Name</th>
              <th className="text-center">Principal</th>
              <th className="text-center">Admission Date</th>
              <th className="text-center">Discharge Date</th>
              <th className="text-center">Booking Date</th>
              <th className="text-center">Final Bill</th>
              <th className="text-center">Benefit</th>
              <th className="text-center">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {Data?.map((data) => (
              <tr key={Math.floor(Math.random() * 100000)}>
                <td className="text-center">{data?.proposer}</td>
                <td className="text-center">{data?.hospital}</td>
                <td className="text-center">{data?.patient}</td>
                <td className="text-center">{data?.principle}</td>
                <td className="text-center">{data?.dateOfAdmission}</td>
                <td className="text-center">{data?.dateOfDischarged}</td>
                <td className="text-center">{data?.bookingDate}</td>
                <td className="text-center">{data?.finalBill}</td>
                <td className="text-center">{data?.applicableBenefit}</td>
                <td className="text-center">{data?.remarks}</td>
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
