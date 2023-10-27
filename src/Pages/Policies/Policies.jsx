import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { PoliciesTable } from "./PoliciesTable";
import { getResultFromData } from "../../Utils/Utils";
import { useQueries } from "@tanstack/react-query";
import { useStore } from "../../Store/store";
import { getPayload } from "../../Payload";
import { getPoliciesData } from "../../API/Policies/policies.api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DataNotFound from "../CommonComponents/DataNotFound";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
const Policies = () => {
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
    },
    // resolver: yupResolver(schema),
  });

  const [{ data: policiesData, refetch, isFetching }] = useQueries({
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
              proposerName: getValues()?.proposerName,
            })
          ),
        select(data) {
          return getResultFromData(data);
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
        <p className="font-16 section--name">POLICIES</p>
        <Row>
          <Card className="border-0 p-3">
            <p className="font-16 section--name">Search By</p>
            <Card.Body>
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
                <Form
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexBasis: "initial",
                    gap: "2rem",
                  }}
                >
                  <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Proposer Name
                    </Form.Label>
                    <Form.Control
                      placeholder="Enter Proposer Name"
                      size="lg"
                      {...register("proposerName")}
                    />
                  </Col>
                </Form>
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
          <p className="font-16 section--name">List of Policies sold</p>
          <Card className="border-0 p-3 mt-2 flex justify-center h-[480px]">
            {isFetching ? (
              <div className="flex justify-center align-middle">
                <Spinner />
              </div>
            ) : policiesData ? (
              <PoliciesTable tableData={policiesData} />
            ) : (
              <DataNotFound />
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
        />
      </div>
    </>
  );
};

export default Policies;
