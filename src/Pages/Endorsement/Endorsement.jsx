// import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import {
  faUser,
  faIndianRupeeSign,
  faPenToSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
// import { Area, Pie } from "../../Components/Charts/Charts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { MonthlyWiseChartProps, pieProps } from "../Home/props";

import { Container, Row, Card, Col, Form } from "react-bootstrap";
import { useQueries } from "@tanstack/react-query";
import { endorsementInvoicesList } from "../../API/Endorsement/endorsement.api";
import { getPayload } from "../../Payload";
import { useStore } from "../../Store/store";
import { EndorsementCustomizedTable } from "./EndorsementCustomizedTable";
import { getResultFromData } from "../../Utils/Utils";
import {
  intermediateTotalRenewlCoutnonth,
  intermediatepolicycount,
} from "../../API/Home.api";
import { intermediateTotalClaimInProcessCount } from "../../API/Claims/claim.api";

const Endorsement = () => {
  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

  console.log(userDetails);

  const [
    {
      data: endorsementInvoiceData,
      // refetch: endorsementRefetch,
      // isFetching: isEndorsementFetching,
    },
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
              pageNo: 0,
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

  return (
    <Container fluid>
      <p className="font-16 section--name">Endorsements</p>
      {/* <Row>
        <Col md={3}>
          <Card className="border-0">
            <Card.Body className="d-flex">
              <section className="flex-grow-1">
                <p className="text-muted fw-medium">Total Customers</p>
                <h5 className="font-14 fw-bold"></h5>
              </section>
              <section
                className="card--icon"
                style={{ backgroundColor: "#556ee6" }}
              >
                <FontAwesomeIcon icon={faUser} size="xl" />
              </section>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0">
            <Card.Body className="d-flex">
              <section className="flex-grow-1">
                <p className="text-muted fw-medium">Total Policies Count</p>
                <h5 className="font-14 fw-bold">
                  {policyCount?.totalPolicyCount}
                </h5>
              </section>
              <section
                className="card--icon"
                style={{ backgroundColor: "#34c38f" }}
              >
                <FontAwesomeIcon icon={faIndianRupeeSign} size="xl" />
              </section>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0">
            <Card.Body className="d-flex">
              <section className="flex-grow-1">
                <p className="text-muted fw-medium">Claim In-Process</p>
                <h5 className="font-14 fw-bold">
                  {totalClaimInProcessCount?.totalClaimInProcessCount}
                </h5>
              </section>
              <section
                className="card--icon"
                style={{ backgroundColor: "#f46a6a" }}
              >
                <FontAwesomeIcon icon={faPenToSquare} size="xl" />
              </section>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-0">
            <Card.Body className="d-flex">
              <section className="flex-grow-1">
                <p className="text-muted fw-medium">Renewal Count</p>
                <h5 className="font-14 fw-bold">{renewalCount?.length}</h5>
              </section>
              <section
                className="card--icon"
                style={{ backgroundColor: "#f1b44c" }}
              >
                <FontAwesomeIcon icon={faBars} size="xl" />
              </section>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
      <Row className="mt-4">
        {/* <Col md={6}>
          <Card className="border-0 p-3">
            <p className="font-16 section--name">
              Month wise analytics on consumer acquisition
            </p>
            <Card.Body className="graph d-flex justify-content-center">
              <Area {...MonthlyWiseChartProps} />
            </Card.Body>
          </Card>
        </Col> */}
        {/* <Col md={6}>
          <Card className="border-0 p-3">
            <p className="font-16 section--name">
              Product wise customer segregation
            </p>
            <Card.Body className="d-flex justify-content-center">
              <Pie {...pieProps} />
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
      {/* <Row className="mt-4">
        <Card className="border-0 p-3">
          <Card.Body style={{ padding: "0" }}>
            <p className="font-16 section--name">Check Endorsement Status</p>
            <Form.Control type="text" placeholder="Enter Claim Number" />
          </Card.Body>
        </Card>
      </Row> */}
      <Row className="mt-4">
        <Card className="border-0 p-3">
          <p className="font-16 section--name">List of endorsements made</p>
          <Card className="border-0">
            <p className="font-16 section--name">Search Filter</p>
            <Card.Body style={{ padding: "0 0 1rem 0" }}>
              <Row>
                {/* <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Customer Name
                  </Form.Label>

                  <Form.Control type="text" placeholder="Choose..." />
                </Col>
                <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Customer Name
                  </Form.Label>

                  <Form.Control type="text" placeholder="Choose..." />
                </Col> */}
                <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Customer Name
                  </Form.Label>

                  <Form.Select>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <EndorsementCustomizedTable tableData={endorsementInvoiceData} />
        </Card>
      </Row>
    </Container>
  );
};

export default Endorsement;
