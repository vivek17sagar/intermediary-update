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
  intermediateTotalRenewlListCount,
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
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
import DataNotFound from "../CommonComponents/DataNotFound";

const Home = () => {
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  const [table, setTable] = useState("renewal");
  const [page, setPage] = useState(1);
  const [activeBox, setActiveBox] = useState([false, false, false, true]);

  const [
    { data: policyData, refetch: policyRefetch },
    { data: policyCount },
    { data: totalClaimInProcessCount },
    { data: totalCustomerCount },
    { data: renewalCount, refetch: renewalRefetch },
    { data: renewalList, refetch: renewalListRefetch },
    { data: customerInfo, refetch: customerInfoRefetch },
    { data: claimData, refetch: claimDataReFetch },
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
          const endNumber = data?.data?.data?.totalPages;

          return {
            firstValue: getResultFromData(data),
            secondValue: endNumber,
          };
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
        queryKey: ["intermediatetotalrenewlcountnonth"],
        queryFn: () =>
          intermediateTotalRenewlListCount(
            getPayload("intermediatetotalrenewlcountnonth", {
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
              pageNo: page - 1,
              pageSize: 10,
              tokenID: userDetails?.tokenID,
            })
          ),
        select(data) {
          const endPageNum = data?.data?.totalPages;

          return {
            firstValue: getResultFromData(data),
            secondValue: endPageNum,
          };
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
          const endPageNum = data?.data?.totalPages;

          return {
            firstValue: getResultFromData(data),
            secondValue: endPageNum,
          };
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
          const endNumber = data?.data?.totalPages;

          return {
            firstValue: getResultFromData(data),
            secondValue: endNumber,
          };
        },
      },
    ],
  });

  const handleClick = (param, clickBox) => {
    setTable(param);
    setActiveBox(clickBox);
  };

  const handlePaginationBehaviour = (pageNo) => {
    setPage(pageNo);
    setTimeout(() => {
      if (table === "policies") {
        policyRefetch();
      } else if (table === "customer") {
        customerInfoRefetch();
      } else if (table === "claim") {
        claimDataReFetch();
      } else if (table === "renewal") {
        renewalListRefetch();
      } else {
        return null;
      }
    }, 0);
  };

  return (
    <main>
      <Container fluid>
        <p className="font-16 section--name ml-2">DASHBOARD</p>
        <Row className="flex justify-center">
          <Col
            md={3}
            onClick={() => {
              setPage(1);
              setTimeout(() => renewalRefetch(), 0);
              handleClick("renewal", [false, false, false, true]);
            }}
            className="mt-3 cursor-pointer hover:scale-105 transition-all 0.2s"
          >
            <Card className="border-0">
              <Card.Body
                className="d-flex"
                style={
                  activeBox[3]
                    ? {
                        boxShadow: "0px 0px 1px 0.5px #556ee6",
                        borderRadius: "10px",
                      }
                    : null
                }
              >
                <section className="flex-grow-1">
                  <p className="text-muted fw-medium">Renewal Count</p>
                  <h5 className="font-14 fw-bold mt-3">
                    {renewalCount?.totalRenewalCount}
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
          <Col
            md={3}
            onClick={() => {
              setPage(1);
              setTimeout(() => policyRefetch(), 0);
              handleClick("policies", [false, true, false, false]);
            }}
            className="mt-3 cursor-pointer hover:scale-105 transition-all 0.2s"
          >
            <Card className="border-0">
              <Card.Body
                className="d-flex"
                style={
                  activeBox[1]
                    ? {
                        boxShadow: "0px 0px 1px 0.5px #556ee6",
                        borderRadius: "10px",
                      }
                    : null
                }
              >
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
            onClick={() => {
              setPage(1);
              setTimeout(() => {
                customerInfoRefetch();
              }, 0);
              handleClick("customer", [true, false, false, false]);
            }}
            className="block-1 mt-3 cursor-pointer hover:scale-105 transition-all 0.2s"
          >
            <Card className="border-0">
              <Card.Body
                className="d-flex"
                style={
                  activeBox[0]
                    ? {
                        boxShadow: "0px 0px 1px 0.5px #556ee6",
                        borderRadius: "10px",
                      }
                    : null
                }
              >
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
            onClick={() => {
              setPage(1);
              setTimeout(() => claimDataReFetch(), 0);
              handleClick("claim", [false, false, true, false]);
            }}
            className="mt-3 cursor-pointer hover:scale-105 transition-all 0.2s"
          >
            <Card className="border-0">
              <Card.Body
                className="d-flex"
                style={
                  activeBox[2]
                    ? {
                        boxShadow: "0px 0px 1px 0.5px #556ee6",
                        borderRadius: "10px",
                      }
                    : null
                }
              >
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

              {(table === "policies" && policyData?.firstValue === undefined) ||
              (table === "customer" &&
                customerInfo?.firstValue === undefined) ||
              (table === "claim" && claimData?.firstValue === undefined) ||
              (table === "renewal" && renewalList?.firstValue === undefined) ? (
                <DataNotFound />
              ) : (
                <Card.Body>
                  <CustomisedTable
                    Data={
                      table == "policies"
                        ? policyData?.firstValue
                        : table == "customer"
                        ? customerInfo?.firstValue
                        : table == "claim"
                        ? claimData?.firstValue
                        : renewalList?.firstValue
                    }
                    table={table}
                  />
                </Card.Body>
              )}
            </Card>

            <div className="flex justify-end mt-3 mr-5">
              <PaginationBasic
                handlePaginationBehaviour={handlePaginationBehaviour}
                page={page}
                pageNum={
                  table == "policies"
                    ? policyData?.secondValue
                    : table == "customer"
                    ? customerInfo?.secondValue
                    : table == "claim"
                    ? claimData?.secondValue
                    : renewalList?.secondValue
                }
              />
            </div>
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
