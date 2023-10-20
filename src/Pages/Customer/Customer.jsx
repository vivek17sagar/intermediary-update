import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { useStore } from "../../Store/store";
import { useQueries } from "@tanstack/react-query";
import { intermediatecustomersinfo } from "../../API/Home.api";
import { getPayload } from "../../Payload";
import { getResultFromData } from "../../Utils/Utils";
import { useState } from "react";
import PaginationCustomer from "./PaginationCustomer";
import { useForm } from "react-hook-form";

const Customer = () => {
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

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
      membername: "",
      membershipno: "",
      proposerno: "",
      mobileno: "",
    },
    // resolver: yupResolver(schema),
  });

  // console.log(getValues()?.membershipno);
  const [page, setPage] = useState(1);

  const [{ data: customeInfo, refetch }] = useQueries({
    queries: [
      {
        queryKey: ["intermediatecustomersinfo"],
        queryFn: () =>
          intermediatecustomersinfo(
            getPayload("intermediatecustomersinfo", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
              memberName: getValues()?.membername,
              membershipNo: getValues()?.membershipno,
              proposerName: getValues()?.proposerno,
              mobileNo: getValues()?.mobileno,
            })
          ),
        select(data) {
          return getResultFromData(data);
        },
      },
    ],
  });

  const handleReset = () => {
    reset();
    refetch();
  };

  const selectPage = (param) => {
    console.log(param);
    setPage(param);

    setTimeout(() => {
      refetch();
    }, 600);
  };

  return (
    <>
      <Container fluid>
        <p className="font-16 section--name">CUSTOMER</p>
        <Row>
          <Card className="border-0 p-3">
            <p className="font-16 section--name">Search Filter</p>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Proposer No
                  </Form.Label>

                  <Form.Control
                    id="proposerno"
                    type="text"
                    placeholder="Choose..."
                    {...register("proposerno")}
                  />
                </Col>
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Member Name
                  </Form.Label>

                  <Form.Control
                    id="membername"
                    type="text"
                    placeholder="Choose..."
                    {...register("membername")}
                  />
                </Col>
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Membership No
                  </Form.Label>

                  <Form.Control
                    id="membershipno"
                    type="text"
                    placeholder="Choose..."
                    {...register("membershipno")}
                  />
                </Col>

                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Mobile No
                  </Form.Label>

                  <Form.Control
                    id="mobileno"
                    type="number"
                    placeholder="Choose..."
                    {...register("mobileno")}
                  />
                </Col>
              </Row>
              <Button
                type="button"
                variant="primary"
                // eslint-disable-next-line no-void
                // ref={OTPref}
                onClick={() => console.log(refetch())}
                className="mt-4 ml-2 bg-blue-700 justify-end"
                tabIndex={0}
              >
                Search
              </Button>
              <Button
                type="button"
                variant="primary"
                // eslint-disable-next-line no-void
                // ref={OTPref}
                onClick={handleReset}
                className="mt-4 ml-3 bg-blue-700 justify-end"
                tabIndex={0}
              >
                Reset
              </Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="mt-4">
          <Card className="border-0 p-3">
            <p className="font-16 section--name">List of customers</p>
            <CustomisedTable Data={customeInfo} table="customer" />
          </Card>
        </Row>
      </Container>
      <div className="flex justify-end mt-3 mr-5 opacity-80">
        <PaginationCustomer pageSelect={selectPage} />
      </div>
    </>
  );
};

export default Customer;
