// import { Pie, Area } from "../../Components/Charts/Charts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "../../Store/store";
import {
  faIndianRupeeSign,
  faPenToSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { pieProps, MonthlyWiseChartProps } from "./props";
import { getPayload } from "../../Payload";
import "./styles.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useQueries } from "@tanstack/react-query";
import {
  intermediateTotalCustomer,
  intermediateTotalRenewlListnonth,
  intermediatecustomersinfo,
  intermediatepolicycount,
} from "../../API/Home/Home.api";
import { getResultFromData } from "../../Utils/Utils";
import {
  IntermediateClaimInprocess,
  intermediateTotalClaimInProcessCount,
} from "../../API/Claims/claim.api";
import { useState } from "react";
import { getPoliciesData } from "../../API/Policies/policies.api";

const Home = () => {
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  const [table, setTable] = useState("renewal");
  const [page, setPage] = useState(1);

  const [
    { data: policyData },
    { data: policyCount },
    { data: totalClaimInProcessCount },
    { data: totalCustomerCount },
    { data: renewalCount },
    { data: customerInfo },
    { data: claimData },
  ] = useQueries({
    queries: [
      {
        queryKey: ["intermediatepolicies"],
        queryFn: () =>
          getPoliciesData(
            getPayload("intermediatepolicies", {
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
      },
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
          return getResultFromData(data);
        },
      },
      {
        queryKey: ["intermediatetotalclaiminprocesscount"],
        queryFn: () =>
          intermediateTotalClaimInProcessCount(
            getPayload("intermediatetotalclaiminprocesscount", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              tokenID: userDetails?.tokenID,
            })
          ),
        select(data) {
          return getResultFromData(data);
        },
      },

      {
        queryKey: ["intermediatetotalcustomer"],
        queryFn: () =>
          intermediateTotalCustomer(
            getPayload("intermediatetotalcustomer", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              tokenID: userDetails?.tokenID,
            })
          ),
        select(data) {
          return getResultFromData(data);
        },
      },
      {
        queryKey: ["intermediatetotalrenewlListnonth"],
        queryFn: () =>
          intermediateTotalRenewlListnonth(
            getPayload("intermediatetotalrenewlListnonth", {
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
      {
        queryKey: ["intermediatecustomersinfo"],
        queryFn: () =>
          intermediatecustomersinfo(
            getPayload("intermediatecustomersinfo", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
            })
          ),
        select(data) {
          return getResultFromData(data);
        },
      },
      {
        queryKey: ["intermediateclaiminprocess"],
        queryFn: () =>
          IntermediateClaimInprocess(
            getPayload("intermediateclaiminprocess", {
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
      },
    ],
  });

  const handleClick = (param) => {
    setTable(param);
  };

  return (
    <main>
      <Container fluid>
        <p className="font-16 section--name ml-2">DASHBOARD</p>
        <Row className="flex justify-center">
          <Col
            md={3}
            onClick={() => handleClick("customer")}
            className="mt-3 cursor-pointer hover:scale-105 transition-all 0.2s"
          >
            <Card className="border-0">
              <Card.Body className="d-flex">
                <section className="flex-grow-1">
                  <p className="text-muted fw-medium">Total customers</p>
                  <h5 className="font-14 fw-bold mt-3">
                    {" "}
                    {totalCustomerCount?.totalCustomerCount}
                  </h5>
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

          <Col
            md={3}
            onClick={() => handleClick("policies")}
            className="mt-3 cursor-pointer hover:scale-105 transition-all 0.2s"
          >
            <Card className="border-0">
              <Card.Body className="d-flex">
                <section className="flex-grow-1">
                  <p className="text-muted fw-medium">Total Policies Count</p>
                  <h5 className="font-14 fw-bold mt-3">
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

          <Col
            md={3}
            onClick={() => handleClick("claim")}
            className="mt-3 cursor-pointer hover:scale-105 transition-all 0.2s"
          >
            <Card className="border-0">
              <Card.Body className="d-flex">
                <section className="flex-grow-1">
                  <p className="text-muted fw-medium">Claim In-Process</p>
                  <h5 className="font-14 fw-bold mt-3">
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

          <Col
            md={3}
            onClick={() => handleClick("renewal")}
            className="mt-3 cursor-pointer hover:scale-105 transition-all 0.2s"
          >
            <Card className="border-0">
              <Card.Body className="d-flex">
                <section className="flex-grow-1">
                  <p className="text-muted fw-medium">Renewal Count</p>
                  <h5 className="font-14 fw-bold mt-3">
                    {renewalCount?.length}
                  </h5>
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
        {/* <Row className="mt-4">
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
        </Row> */}
        <Row className="mt-4">
          <Col md={12}>
            <Card className="border-0 p-3">
              <p className="font-16 section--name mb-3">
                {" "}
                {table == "policies"
                  ? "List of Policies"
                  : table == "customer"
                  ? "List of Customer"
                  : table == "claim"
                  ? "List of Claim"
                  : "List of Renewal"}
              </p>
              <CustomisedTable
                Data={
                  table == "policies"
                    ? policyData
                    : table == "customer"
                    ? customerInfo
                    : table == "claim"
                    ? claimData
                    : renewalCount
                }
                table={table}
              />
              <Card.Body className="d-flex justify-content-center"></Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <Row className="mt-4">
          <Col md={12}>
            <Card className="border-0 p-3">
              <p className="font-16 section--name">List of claims in process</p>
              <Card.Body className="d-flex justify-content-center">
                <Claims dashboard="true" />
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </main>
  );
};

export default Home;
