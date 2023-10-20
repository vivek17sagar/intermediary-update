import { Pie, Area } from "../../Components/Charts/Charts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../Store/store";
import {
  faIndianRupeeSign,
  faPenToSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { pieProps, MonthlyWiseChartProps } from "./props";
import { getPayload } from "../../Payload";
import "./styles.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useQueries } from "@tanstack/react-query";
import {
  intermediateTotalRenewlCoutnonth,
  intermediatecustomersinfo,
  intermediatepolicycount,
} from "../../API/Home.api";
import { getResultFromData } from "../../Utils/Utils";
import { intermediateTotalClaimInProcessCount } from "../../API/Claims/claim.api";
import Claims from "../Claims/Claims";

const Home = () => {
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  const [
    { data: policyCount },
    { data: totalClaimInProcessCount },
    { data: renewalCount },
  ] = useQueries({
    queries: [
      {
        queryKey: ["intermediatepolicycount"],
        queryFn: () =>
          intermediatepolicycount(
            getPayload("intermediatepolicycount", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
            })
          ),
        select(data) {
          // console.log(data);
          return getResultFromData(data);
        },
      },
      {
        queryKey: ["intermediatetotalclaiminprocesscount"],
        queryFn: () =>
          intermediateTotalClaimInProcessCount(
            getPayload("intermediatetotalclaiminprocesscount")
          ),
        select(data) {
          return getResultFromData(data);
        },
      },

      {
        queryKey: ["intermediatetotalrenewlCoutnonth"],
        queryFn: () =>
          intermediateTotalRenewlCoutnonth(
            getPayload("intermediatetotalrenewlCoutnonth", {
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
      },
    ],
  });

  return (
    <main>
      <Container fluid>
        <p className="font-16 section--name">DASHBOARD</p>
        <Row>
          <Col md={3}>
            <Card className="border-0">
              <Card.Body className="d-flex">
                <section className="flex-grow-1">
                  <p className="text-muted fw-medium">Total customers</p>
                  <h5 className="font-14 fw-bold">count</h5>
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
        </Row>
        <Row className="mt-4">
          <Col md={7}>
            <Card className="border-0 p-3 pl-20">
              <p className="font-16 section--name">
                Month wise analytics on consumer acquisition
              </p>
              <Card.Body className="graph d-flex justify-content-center">
                <Area {...MonthlyWiseChartProps} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card className="border-0 p-3">
              <p className="font-16 section--name">
                Product wise customer segregation
              </p>
              <Card.Body className="d-flex justify-content-center">
                <Pie {...pieProps} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="border-0 p-3">
              <p className="font-16 section--name">
                List of endorsement request in process
              </p>
              <Card.Body className="d-flex justify-content-center">
                <CustomisedTable count={3} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="border-0 p-3">
              <p className="font-16 section--name">List of claims in process</p>
              <Card.Body className="d-flex justify-content-center">
                <Claims dashboard="true" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
