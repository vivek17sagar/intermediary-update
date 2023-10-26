import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";
import { PoliciesTable } from "./PoliciesTable";
import { getResultFromData } from "../../Utils/Utils";
import { useQueries } from "@tanstack/react-query";
import { useStore } from "../../Store/store";
import { getPayload } from "../../Payload";
import { getPoliciesData } from "../../API/Policies/policies.api";
import { PoliciesPagination } from "./PoliciesPagination";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DataNotFound from "../CommonComponents/DataNotFound";
import ShimmeringTable from "../CommonComponents/Shimmer";

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
    refetch();
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
                  <Col md={1} style={{ marginTop: "1.8rem" }}>
                    <Button
                      size="md"
                      variant="primary"
                      className="bg-blue-700"
                      onClick={() => refetch()}
                    >
                      Search
                    </Button>
                  </Col>
                  <Col md={1}>
                    <Button
                      size="md"
                      variant="primary"
                      className="bg-blue-700"
                      style={{ marginLeft: "-3rem", marginTop: "1.8rem" }}
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </Col>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        </Row>
        <Row className="mt-4">
          <Card className="border-0 p-3">
            <p className="font-16 section--name">List of Policies sold</p>

            {isFetching ? (
              <ShimmeringTable />
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
        <PoliciesPagination handlePagination={handlePagination} />
      </div>
    </>
  );
};

export default Policies;
