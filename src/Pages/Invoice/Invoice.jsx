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
// import axios, { AxiosRequestConfig } from "axios";
// import fs from "fs";
// import { useQueries } from "@tanstack/react-query";
// import { endorsementInvoicesList } from "../../API/Endorsement/endorsement.api";
// import { getPayload } from "../../Payload";
import { useStore } from "../../Store/store";
import { getResultFromData } from "../../Utils/Utils";
import {
  intermediateInvoices,
  intermediateinvoiceexport,
} from "../../API/Invoice/Invoice.api";
import { getPayload } from "../../Payload";
import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

import InvoiceTable from "./InvoiceTable";
import DataNotFound from "../CommonComponents/DataNotFound";
import { useForm } from "react-hook-form";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
import dayjs from "dayjs";
import axios from "axios";

const Invoice = () => {
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
      dateFrom: "",
      dateUpto: "",
    },
    // resolver: yupResolver(schema),
  });

  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

  // intermediateinvoiceexport

  const [page, setPage] = useState(1);
  const [waiting, setWaiting] = useState(false);

  const [
    { data: invoiceData, refetch, isFetching },
    // { data: exportedInvoiceData, refetch: exportedInvoiceRefetch },
  ] = useQueries({
    queries: [
      {
        queryKey: ["intermediateinvoices"],
        queryFn: () =>
          intermediateInvoices(
            getPayload("intermediateinvoices", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
              dateFrom: getValues()?.dateFrom
                ? dayjs(getValues()?.dateFrom).format("DD/MM/YYYY")
                : "",
              dateUpto: getValues()?.dateUpto
                ? dayjs(getValues()?.dateUpto).format("DD/MM/YYYY")
                : "",
              proposerName: getValues()?.proposerno,
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
      // {
      //   queryKey: ["intermediateinvoiceexport"],
      //   queryFn: () =>
      //     intermediateinvoiceexport(
      //       getPayload("intermediateinvoiceexport", {
      //         agencyID: userDetails?.userID,
      //         agencyCode: userDetails?.userCode,

      //         tokenID: userDetails?.tokenID,
      //       })
      //     ),
      //   select(data) {
      //     const endNumber = data?.data?.totalPages;
      //     return {
      //       firstValue: getResultFromData(data),
      //       SecondValue: endNumber,
      //     };
      //   },
      // },
    ],
  });

  const handlePaginationBehaviour = (param) => {
    setPage(param);

    setTimeout(() => {
      refetch();
    }, 500);
  };

  const handleExport = async () => {
    setWaiting(true);
    const payLoad = {
      agencyID: userDetails?.userID,
      agencyCode: userDetails?.userCode,
      tokenID: userDetails?.tokenID,
    };
    const headers = {
      // "Content-Type": "blob",
      "Content-Type": "multipart/form-data",
      "eO2-Secret-Code": import.meta.env.VITE_EO2_SECRET_CODE,
    };
    const config = {
      method: "post",
      data: payLoad,
      url: `${
        import.meta.env.DEV
          ? import.meta.env.VITE_BaseURL_DEV
          : import.meta.env.VITE_BaseURL_PROD
      }/intermediateinvoiceexport`,
      responseType: "arraybuffer",
      headers,
    };

    const res = await axios(config);
    if (res) {
      setWaiting(false);
    }
    console.log(res);
    try {
      const response = await axios(config);

      const outputFilename = `${Date.now()}.xls`;

      // If you want to download file automatically using link attribute.
      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", outputFilename);
      document.body.appendChild(link);
      link.click();

      // OR you can save/write file locally.
      // fs.writeFileSync(outputFilename, response.data);
    } catch (error) {
      throw Error(error);
    }
    // exportedInvoiceRefetch();
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
        <p className="font-16 section--name  ml-3 mb-2">
          INVOICE (NEW / RE-NEW)
        </p>
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

        <Row>
          <Card className="border-0 pl-3 p-3">
            {/* <p className="font-16 section--name mb-2">List of Invoices made</p> */}
            <Card className="border-0 pl-2 p-2">
              <p className="font-16 section--name mb-2">Search By</p>
              <Card.Body style={{ padding: "0 0 1rem 0" }}>
                <Row className="p-1">
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
                  <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Start Date
                    </Form.Label>

                    <Form.Control
                      type="date"
                      placeholder="Date From"
                      className="border-gray-400 rounded-xl"
                      {...register("dateFrom")}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      End Date
                    </Form.Label>

                    <Form.Control
                      type="date"
                      placeholder="Date Upto"
                      className="border-gray-400 rounded-xl"
                      {...register("dateUpto")}
                    />
                  </Col>
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
                <Button
                  type="button"
                  variant="primary"
                  onClick={handleExport}
                  className="mt-4 ml-2 bg-blue-700 justify-end"
                  tabIndex={0}
                >
                  {waiting ? (
                    <div className="mt-2 w-20  rounded-xl">
                      <Spinner />
                    </div>
                  ) : (
                    "Export File"
                  )}
                </Button>

                {/* {waiting ? (
                  <div className="mt-2 w-20 btn-bg rounded-3xl">
                    <Spinner />
                  </div>
                ) : (
                  <Button
                    className="mt-2 w-100 bg-blue-700"
                    onClick={handleExport}
                  >
                    Export File
                  </Button>
                )} */}
              </Card.Body>
            </Card>
          </Card>
        </Row>

        <Row className="mt-4">
          <p className="font-16 section--name ">List of Invoices</p>
          <Card className="border-0 p-3 mt-2 flex h-[480px]">
            {isFetching ? (
              <div className="flex justify-center align-middle mt-40">
                <div>
                  <Spinner />
                </div>
              </div>
            ) : invoiceData?.firstValue ? (
              <InvoiceTable Data={invoiceData?.firstValue} />
            ) : (
              <div className="flex justify-center align-middle mt-28">
                <div>
                  <DataNotFound />
                </div>
              </div>
            )}
          </Card>
        </Row>
      </Container>
      <div className="flex justify-end mt-3 mr-5">
        <PaginationBasic
          handlePaginationBehaviour={handlePaginationBehaviour}
          page={page}
          pageNum={invoiceData?.SecondValue}
        />
      </div>
    </>
  );
};

export default Invoice;
