import { useQueries } from "@tanstack/react-query";
import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { Card, Row, Col, Container, Form } from "react-bootstrap";
import { IntermediateClaimInprocess } from "../../API/Claims/claim.api";
import { getPayload } from "../../Payload";
import { getResultFromData } from "../../Utils/Utils";
import { useStore } from "../../Store/store";
import { PaginationBasic } from "./PaginationComponenet";
import { useState } from "react";
const Claims = () => {
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

  return (
    <Container fluid>
      <p className="font-16 section--name">CLAIMS</p>
      <Row>
        <Card className="border-0 p-3">
          <Card.Body style={{ padding: "0" }}>
            <p className="font-16 section--name">Check Claim Status</p>
            <Form.Control type="text" placeholder="Enter Claim Number" />
          </Card.Body>
        </Card>
      </Row>
      <Row className="mt-4">
        <Card className="border-0 p-3">
          <p className="font-16 section--name">List of claims made</p>
          <Card className="border-0">
            <p className="font-16 section--name">Search Filter</p>
            <Card.Body style={{ padding: "0 0 1rem 0" }}>
              <Row>
                <Col md={4}>
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
                </Col>
                <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Customer Name
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
          <CustomisedTable claimProcessData={claimProcessData} />
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
