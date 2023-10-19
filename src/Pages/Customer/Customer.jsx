import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { Card, Row, Col, Container, Form } from "react-bootstrap";
import { useStore } from "../../Store/store";

const Customer = () => {
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  return (
    <Container fluid>
      <p className="font-16 section--name">CUSTOMER</p>
      <Row>
        <Card className="border-0 p-3">
          <p className="font-16 section--name">Search Filter</p>
          <Card.Body>
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
      </Row>
      <Row className="mt-4">
        <Card className="border-0 p-3">
          <p className="font-16 section--name">List of customers</p>
          <CustomisedTable count={10} />
        </Card>
      </Row>
    </Container>
  );
};

export default Customer;
