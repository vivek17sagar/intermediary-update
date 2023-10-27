// import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import {
  faUser,
  faIndianRupeeSign,
  faPenToSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
// import { Area, Pie } from "../../Components/Charts/Charts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { MonthlyWiseChartProps, pieProps } from "../Home/props";

import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
// import { useQueries } from "@tanstack/react-query";
// import { endorsementInvoicesList } from "../../API/Endorsement/endorsement.api";
// import { getPayload } from "../../Payload";
import { useStore } from "../../Store/store";
import { getResultFromData } from "../../Utils/Utils";
import { intermediateendrosmentinvoices } from "../../API/Invoice/Invoice.api";
import { getPayload } from "../../Payload";
import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

import InvoiceTable from "./InvoiceTable";
import DataNotFound from "../CommonComponents/DataNotFound";
import { useForm } from "react-hook-form";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";

const Invoice = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    getValues,
    reset,
    watch,
    trigger,
  } = useForm({
    defaultValues: {
      proposerno: "",
    },
    // resolver: yupResolver(schema),
  });

  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

  const [page, setPage] = useState(1);

  const [{ data: invoiceData, refetch, isFetching }] = useQueries({
    queries: [
      {
        queryKey: ["intermediateendrosmentinvoices"],
        queryFn: () =>
          intermediateendrosmentinvoices(
            getPayload("intermediateendrosmentinvoices", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
              proposerName: getValues()?.proposerno,
            })
          ),
        select(data) {
          return getResultFromData(data);
        },
      },
    ],
  });

  const handlePaginationBehaviour = (param) => {
    setPage(param);

    setTimeout(() => {
      refetch();
    }, 500);
  };

  const handleReset = () => {
    reset();
    setPage(1);
    setTimeout(() => refetch(), 0);
  };
  //   const [
  //     { data: endorsementInvoiceData },
  //     { data: renewalCount },
  //     { data: policyCount },
  //     { data: totalClaimInProcessCount },
  //   ] = useQueries({
  //     queries: [
  //       {
  //         queryKey: ["endorsementInvoicesList"],
  //         queryFn: () =>
  //           endorsementInvoicesList(
  //             getPayload("endorsementInvoicesList", {
  //               agencyID: userDetails?.userID,
  //               agencyCode: userDetails?.userCode,
  //               pageNo: 0,
  //               pageSize: 10,
  //               tokenID: userDetails?.tokenID,
  //             })
  //           ),
  //         select(data) {
  //           return getResultFromData(data);
  //         },
  //         // enabled: false,
  //         // refetchOnWindowFocus: false,
  //       },
  //       {
  //         queryKey: ["intermediatetotalrenewlCoutnonth"],
  //         queryFn: () =>
  //           intermediateTotalRenewlCoutnonth(
  //             getPayload("intermediatetotalrenewlCoutnonth", {
  //               agencyID: userDetails?.userID,
  //               agencyCode: userDetails?.userCode,
  //               pageNo: 0,
  //               pageSize: 10,
  //               tokenID: userDetails?.tokenID,
  //             })
  //           ),
  //         select(data) {
  //           return getResultFromData(data);
  //         },
  //       },
  //       {
  //         queryKey: ["intermediatepolicycount"],
  //         queryFn: () =>
  //           intermediatepolicycount(
  //             getPayload("intermediatepolicycount", {
  //               agencyID: userDetails?.userID,
  //               agencyCode: userDetails?.userCode,
  //             })
  //           ),
  //         select(data) {
  //           // console.log(data);
  //           return getResultFromData(data);
  //         },
  //       },
  //       {
  //         queryKey: ["intermediatetotalclaiminprocesscount"],
  //         queryFn: () =>
  //           intermediateTotalClaimInProcessCount(
  //             getPayload("intermediatetotalclaiminprocesscount")
  //           ),
  //         select(data) {
  //           return getResultFromData(data);
  //         },
  //       },
  //     ],
  //   });

  return (
    <>
      <Container fluid>
        <p className="font-16 section--name">Invoice</p>
        {/*
          <Row>
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
          </Row>*/}
        {/* <Row className="mt-4">
         <Col md={6}>
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
              </Col> 
        </Row>
        */}

        <Row className="mt-4">
          <Card className="border-0 p-3">
            <p className="font-16 section--name">List of Invoices made</p>
            <Card className="border-0">
              <p className="font-16 section--name">Search Filter</p>
              <Card.Body style={{ padding: "0 0 1rem 0" }}>
                <Row className="p-3">
                  <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Proposer Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      className="border-gray-400 rounded-xl"
                      placeholder="Enter Proposer Name"
                      {...register("proposerno")}
                    />
                  </Col>
                  {/* <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Customer Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      className="border-gray-400 rounded-xl"
                      placeholder="Choose..."
                      {...register("proposerno")}
                    />
                  </Col>
                  {/* <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Customer Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      className="border-gray-400 rounded-xl"
                      placeholder="Choose..."
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Customer Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      className="border-gray-400 rounded-xl"
                      placeholder="Choose..."
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Customer Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="Choose..."
                      className="border-gray-400 rounded-xl"
                    />
                  </Col> */}
                </Row>
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => {
                    setPage(1);
                    setTimeout(() => refetch(), 0);
                  }}
                  className="mt-4 ml-2 bg-blue-700 justify-end"
                  tabIndex={0}
                >
                  Search
                </Button>

                <Button
                  type="button"
                  variant="primary"
                  onClick={handleReset}
                  className="mt-4 ml-2 bg-blue-700 justify-end"
                  tabIndex={0}
                >
                  Reset
                </Button>
              </Card.Body>
            </Card>
          </Card>
        </Row>

        <Row className="mt-4">
          <p className="font-16 section--name p-2">List of Invoices</p>
          <Card className="border-0 p-3 mt-2 flex justify-center h-[480px]">
            {isFetching ? (
              <div className="flex justify-center align-middle">
                <Spinner />
              </div>
            ) : invoiceData ? (
              <InvoiceTable Data={invoiceData} />
            ) : (
              <DataNotFound />
            )}
          </Card>
        </Row>
      </Container>
      <div className="flex justify-end mt-3 mr-5">
        <PaginationBasic
          handlePaginationBehaviour={handlePaginationBehaviour}
          page={page}
        />
      </div>
    </>
  );
};

export default Invoice;
