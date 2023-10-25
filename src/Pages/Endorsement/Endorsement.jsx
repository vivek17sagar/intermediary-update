// import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
// import {
//   faUser,
//   faIndianRupeeSign,
//   faPenToSquare,
//   faBars,
// } from "@fortawesome/free-solid-svg-icons";
// import { Area, Pie } from "../../Components/Charts/Charts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { MonthlyWiseChartProps, pieProps } from "../Home/props";

import { Container, Row, Card, Col, Form } from "react-bootstrap";
import { useQueries } from "@tanstack/react-query";
import { endorsementInvoicesList } from "../../API/Endorsement/endorsement.api";
import { getPayload } from "../../Payload";
import { useStore } from "../../Store/store";
import { EndorsementCustomizedTable } from "./EndorsementCustomizedTable";
import { getResultFromData } from "../../Utils/Utils";
import { PaginationBasic } from "../Claims/PaginationComponent";
import { useState } from "react";
// import {
//   intermediateTotalRenewlCoutnonth,
//   intermediatepolicycount,
// } from "../../API/Home.api";
// import { intermediateTotalClaimInProcessCount } from "../../API/Claims/claim.api";

const Endorsement = ({ dashboard = false }) => {
  const [page, setPage] = useState(1);

  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

  const [
    { data: endorsementInvoiceData, refetch },
    // { data: renewalCount },
    // { data: policyCount },
    // { data: totalClaimInProcessCount },
  ] = useQueries({
    queries: [
      {
        queryKey: ["endorsementInvoicesList"],
        queryFn: () =>
          endorsementInvoicesList(
            getPayload("endorsementInvoicesList", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
              tokenID: userDetails?.tokenID,
            })
          ),
        select(data) {
          return getResultFromData(data);
        },
        // enabled: false,
        // refetchOnWindowFocus: false,
      },
      // {
      //   queryKey: ["intermediatetotalrenewlCoutnonth"],
      //   queryFn: () =>
      //     intermediateTotalRenewlCoutnonth(
      //       getPayload("intermediatetotalrenewlCoutnonth", {
      //         agencyID: userDetails?.userID,
      //         agencyCode: userDetails?.userCode,
      //         pageNo: 0,
      //         pageSize: 10,
      //         tokenID: userDetails?.tokenID,
      //       })
      //     ),
      //   select(data) {
      //     return getResultFromData(data);
      //   },
      // },
      // {
      //   queryKey: ["intermediatepolicycount"],
      //   queryFn: () =>
      //     intermediatepolicycount(
      //       getPayload("intermediatepolicycount", {
      //         agencyID: userDetails?.userID,
      //         agencyCode: userDetails?.userCode,
      //       })
      //     ),
      //   select(data) {
      //     // console.log(data);
      //     return getResultFromData(data);
      //   },
      // },
      // {
      //   queryKey: ["intermediatetotalclaiminprocesscount"],
      //   queryFn: () =>
      //     intermediateTotalClaimInProcessCount(
      //       getPayload("intermediatetotalclaiminprocesscount")
      //     ),
      //   select(data) {
      //     return getResultFromData(data);
      //   },
      // },
    ],
  });

  const handlePaginationBehaviour = (pageNo) => {
    setPage(pageNo);
    setTimeout(() => refetch(), 0);
  };

  return (
    <Container fluid>
      {!dashboard && <p className="font-16 section--name">Endorsements</p>}
      <Row className="mt-4">
        <Card className="border-0 p-3">
          {!dashboard && (
            <Card className="border-0">
              <p className="font-16 section--name">Search By Proposer Name</p>
              <Card.Body style={{ padding: "0 0 1rem 0" }}>
                <Row>
                  <Col md={4}>
                    <Col md={8}>
                      <Form.Label className="font-14 fw-bold text-muted">
                        Customer Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="border-gray-400 rounded-xl"
                        placeholder="Choose..."
                      />
                    </Col>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
          <EndorsementCustomizedTable tableData={endorsementInvoiceData} />
        </Card>
        <div className="flex justify-end mt-3 mr-5">
          <PaginationBasic
            handlePaginationBehaviour={handlePaginationBehaviour}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Endorsement;
