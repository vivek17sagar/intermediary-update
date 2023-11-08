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
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { intermediateinvoicesreceipts } from "../../API/Receipt/Receipt.api";
import { getPayload } from "../../Payload";
import ReciptTable from "./ReciptTable";
import DataNotFound from "../CommonComponents/DataNotFound";
import { useForm } from "react-hook-form";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
import dayjs from "dayjs";

const Receipt = () => {
  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

  const [page, setPage] = useState(1);

  const {
    register,
    // handleSubmit,
    // control,
    // setValue,
    getValues,
    reset,
    // watch,
    // trigger,
  } = useForm({
    defaultValues: {
      proposerno: "",
      datefrom: "",
      dateupto: "",
      invoiceno: "",
    },
    // resolver: yupResolver(schema),
  });

  // const values = getValues();

  const [{ data: receiptData, refetch, isFetching }] = useQueries({
    queries: [
      {
        queryKey: ["intermediateinvoicesreceipts"],
        queryFn: () =>
          intermediateinvoicesreceipts(
            getPayload("intermediateinvoicesreceipts", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
              proposerName: getValues()?.proposerno,
              invoiceNo: getValues()?.invoiceno,
              // dateFrom: dayjs(values?.datefrom).format("DD/MM/YYYY"),
              // dateUpto: dayjs(values?.dateupto).format("DD/MM/YYYY"),
              dateFrom: getValues()?.datefrom
                ? dayjs(getValues()?.datefrom).format("DD/MM/YYYY")
                : "",
              dateUpto: getValues()?.dateupto
                ? dayjs(getValues()?.dateupto).format("DD/MM/YYYY")
                : "",
              tokenID: userDetails?.tokenID,
            })
          ),
        select(data) {
          const endNumber = data?.data?.totalPages;
          return {
            firstValue: getResultFromData(data),
            SecondValue: endNumber,
          };
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

  const handleReset = () => {
    reset();
    setPage(1);
    setTimeout(() => refetch(), 0);
  };

  return (
    <>
      <Container fluid>
        <p className="font-16 section--name ml-2">RECEIPT</p>
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

        <Row className="mt-2">
          <Card className="border-0 p-3">
            {/* <p className="font-16 section--name mb-2">List of Receipt made</p> */}
            <Card className="border-0">
              <p className="font-16 section--name mb-2">Search By</p>
              <Card.Body style={{ padding: "0 0 1rem 0" }}>
                <Row>
                  <Col md={3}>
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
                  <Col md={3}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Invoice Number
                    </Form.Label>

                    <Form.Control
                      type="text"
                      className="border-gray-400 rounded-xl"
                      placeholder="Enter Invoice Number"
                      {...register("invoiceno")}
                    />
                  </Col>

                  {/* <Col md={3}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Start Date
                    </Form.Label>

                    <Form.Control
                      type="date"
                      placeholder="Date From"
                      className="border-gray-400 rounded-xl"
                      {...register("datefrom")}
                    />
                  </Col> */}
                  {/* <Col md={3}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      End Date
                    </Form.Label>

                    <Form.Control
                      type="date"
                      placeholder="Date Upto"
                      className="border-gray-400 rounded-xl"
                      {...register("dateupto")}
                    />
                  </Col> */}
                  <Row>
                    <Col>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setPage(1);
                          setTimeout(() => refetch(), 0);
                        }}
                        className="mt-4 ml-2 bg-blue-700 justify-end"
                      >
                        Search
                      </Button>

                      <Button
                        type="button"
                        variant="primary"
                        onClick={handleReset}
                        className="mt-4 ml-2 bg-blue-700 justify-end"
                      >
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Row>
              </Card.Body>
            </Card>
          </Card>
        </Row>
        <Row className="mt-4">
          <p className="font-16 section--name ">List of Recipts</p>
          <Card className="border-0 p-3 mt-2 flex h-[480px]">
            {isFetching ? (
              <div className="flex justify-center align-middle">
                <Spinner />
              </div>
            ) : receiptData?.firstValue ? (
              <ReciptTable Data={receiptData?.firstValue} table="receipt" />
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
          pageNum={receiptData?.SecondValue}
        />
      </div>
    </>
  );
};

export default Receipt;
