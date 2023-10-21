import { useQueries } from "@tanstack/react-query";
import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { Card, Row, Col, Container, Form } from "react-bootstrap";
import { IntermediateClaimInprocess } from "../../API/Claims/claim.api";
import { getPayload } from "../../Payload";
import { getResultFromData } from "../../Utils/Utils";
import { useStore } from "../../Store/store";
import { PaginationBasic } from "./PaginationComponent";
import { useState } from "react";
const Claims = ({ dashboard }) => {
  const [page, setPage] = useState(1);

  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  const [{ data: claimProcessData, refetch }] = useQueries({
    queries: [
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

  const handlePaginationBehaviour = (pageNo) => {
    setPage(pageNo);
    setTimeout(() => refetch(), 0);
  };

  return !dashboard ? (
    <Container fluid>
      <p className="font-16 section--name">CLAIMS</p>

      {/* <Row>
        <Card className="border-0 p-3">
          <Card.Body style={{ padding: "0" }}>
            <p className="font-16 section--name">Check Claim Status</p>
            <Form.Control type="text" placeholder="Enter Claim Number" />
          </Card.Body>
        </Card>
      </Row> */}

      <Row className="mt-2">
        <Card className="border-0 p-3">
          {/* <p className="font-16 section--name">List of claims made</p> */}
          <Card className="border-0">
            <p className="font-16 section--name">Search Filter</p>
            <Card.Body style={{ padding: "0 0 1rem 0" }}>
              <Row className="p-3">
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Proposer No.
                  </Form.Label>

                  <Form.Control type="text" placeholder="Enter Claim Number" />
                </Col>

                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Mobile No.
                  </Form.Label>

                  <Form.Control type="text" placeholder="Choose..." />
                </Col>
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Membership No.
                  </Form.Label>

                  <Form.Control type="text" placeholder="Choose..." />
                </Col>
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Claim No.
                  </Form.Label>

                  <Form.Control type="text" placeholder="Choose..." />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <CustomisedTable Data={claimProcessData} table="claim" />
        </Card>
        <div className="flex justify-end mt-3 mr-5">
          <PaginationBasic
            handlePaginationBehaviour={handlePaginationBehaviour}
          />
        </div>
      </Row>
    </Container>
  ) : (
    <Container fluid>
      <Row className="mt-4">
        <Card className="border-0 p-3">
          <CustomisedTable Data={claimProcessData} table="claim" />
        </Card>
        <div className="flex justify-end mt-3 mr-5">
          <PaginationBasic
            handlePaginationBehaviour={handlePaginationBehaviour}
          />
        </div>
      </Row>
    </Container>
  );
};
export default Claims;
