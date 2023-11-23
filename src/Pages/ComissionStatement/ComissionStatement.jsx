import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { getResultFromData } from "../../Utils/Utils";
import { useQueries } from "@tanstack/react-query";
import { useStore } from "../../Store/store";
import { getPayload } from "../../Payload";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DataNotFound from "../CommonComponents/DataNotFound";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
import { CommissionTable } from "./CommissionTable";
import { commissionStatement } from "../../API/CommissionStatement/Commission.api";
import dayjs from "dayjs";

const ComissionStatement = () => {
  const [page, setPage] = useState(1);
  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

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
      proposerName: "",
      dateFrom: "",
      dateUpto: "",
    },
    // resolver: yupResolver(schema),
  });

  const [{ data: commissionData, refetch, isFetching }] = useQueries({
    queries: [
      {
        queryKey: ["intermediatelistcommision"],
        queryFn: () =>
          commissionStatement(
            getPayload("intermediatelistcommision", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
              tokenID: userDetails?.tokenID,
              dateFrom: getValues()?.dateFrom
                ? dayjs(getValues()?.dateFrom).format("DD/MM/YYYY")
                : "",
              dateUpto: getValues()?.dateUpto
                ? dayjs(getValues()?.dateUpto).format("DD/MM/YYYY")
                : "",
              proposerName: getValues()?.proposerName,
            })
          ),
        select(data) {
          const endNumber = data?.data?.totalPages;
          return {
            firstValue: getResultFromData(data),
            SecondValue: endNumber,
          };
        },
        // enabled: false,
        // refetchOnWindowFocus: false,
      },
    ],
  });

  const handleReset = () => {
    reset();
    setPage(1);
    setTimeout(() => refetch(), 0);
  };

  const handlePagination = (pageNo) => {
    setPage(pageNo);
    setTimeout(() => refetch(), 0);
  };

  return (
    <>
      <Container fluid>
        <p className="font-16 section--name ml-3 mb-2">COMMISSION</p>
        <Row>
          <Card className="border-0 pl-3 p-3">
            <p className="font-16 section--name mb-2">Search By</p>
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
                    Proposer Name
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter Proposer Name"
                    className="border-gray-400 rounded-xl"
                    size="lg"
                    {...register("proposerName")}
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
            </Card.Body>
          </Card>
        </Row>
        <Row className="mt-4">
          <p className="font-16 section--name">List of Commission </p>
          <Card className="border-0 p-3 mt-2 flex justify-center h-[480px]">
            {isFetching ? (
              <div className="flex justify-center align-middle">
                <div>
                  <Spinner />
                </div>
              </div>
            ) : commissionData?.firstValue ? (
              <CommissionTable tableData={commissionData?.firstValue} />
            ) : (
              <div className="flex justify-center align-middle mt-28">
                <div>
                  <DataNotFound />
                </div>
              </div>
            )}
          </Card>
        </Row>

        <Row className="flex justify-end items-end self-end mt-4">
          {/* {policiesData ? (
          <PoliciesPagination handlePagination={handlePagination} />
        ) : (
          <div className="text-center mt-4 text-3xl text-red-600">
            No more data
          </div>
        )} */}
        </Row>
      </Container>
      <div className="flex justify-end  mt-3 mr-5">
        <PaginationBasic
          handlePaginationBehaviour={handlePagination}
          page={page}
          pageNum={commissionData?.SecondValue}
        />
      </div>
    </>
  );
};

export default ComissionStatement;
