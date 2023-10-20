import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { Card, Row, Col, Container, Form } from "react-bootstrap";
import { useStore } from "../../Store/store";
import { useQueries } from "@tanstack/react-query";
import { intermediatecustomersinfo } from "../../API/Home.api";
import { getPayload } from "../../Payload";
import { getResultFromData } from "../../Utils/Utils";
import { useState } from "react";
import PaginationCustomer from "./PaginationCustomer";

const Customer = () => {
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

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
            })
          ),
        select(data) {
          return getResultFromData(data);
        },
      },
    ],
  });

  const selectPage = (param) => {
    console.log(param);
    setPage(param);

    setTimeout(() => {
      refetch();
    }, 500);
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
                <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Member Name
                  </Form.Label>

                  <Form.Control type="text" placeholder="Choose..." />
                </Col>
                <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Customer Name
                  </Form.Label>

                  <Form.Control type="text" placeholder="Choose..." />
                </Col>
                <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Proposer Name
                  </Form.Label>

                  <Form.Select>
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
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
