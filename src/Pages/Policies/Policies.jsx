import { Container, Row, Card, Col, Form } from "react-bootstrap";
import { PoliciesTable } from "./PoliciesTable";
import { getResultFromData } from "../../Utils/Utils";
import { useQueries } from "@tanstack/react-query";
import { useStore } from "../../Store/store";
import { getPayload } from "../../Payload";
import { getPoliciesData } from "../../API/Policies/policies.api";

const Policies = () => {
  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

  console.log(userDetails);

  const [{ data: policiesData }] = useQueries({
    queries: [
      {
        queryKey: ["intermediatepolicies"],
        queryFn: () =>
          getPoliciesData(
            getPayload("intermediatepolicies", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: 0,
              pageSize: 10,
              tokenID: userDetails?.tokenID,
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

  console.log(policiesData);
  return (
    <Container fluid>
      <p className="font-16 section--name">POLICIES</p>
      <Row>
        <Card className="border-0 p-3">
          <p className="font-16 section--name">Search Filter</p>
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
      </Row>
      <Row className="mt-4">
        <Card className="border-0 p-3">
          <p className="font-16 section--name">List of Policies sold</p>
          <PoliciesTable tableData={policiesData} />
        </Card>
      </Row>
    </Container>
  );
};

export default Policies;
