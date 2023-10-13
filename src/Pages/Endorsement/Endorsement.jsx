import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import {
  faUser,
  faIndianRupeeSign,
  faPenToSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Area, Pie } from "../../Components/Charts/Charts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MonthlyWiseChartProps, pieProps } from "../Home/props";

import { Container, Row, Card, Col, Form } from "react-bootstrap";

const Endorsement = () => {
  const cardData = [
    { name: "Total customers", count: "20", image: faUser, color: "#556ee6" },
    {
      name: "Total Policies Count",
      count: "20",
      image: faIndianRupeeSign,
      color: "#34c38f",
    },
    {
      name: "Claim In-Process",
      count: "20",
      image: faPenToSquare,
      color: "#f46a6a",
    },
    {
      name: "Endorsement Request",
      count: "20",
      image: faBars,
      color: "#f1b44c",
    },
  ];
  return (
    <Container fluid>
      <p className="font-16 section--name">Endorsements</p>
      <Row>
        {cardData.map((item) => (
          <Col md={3} key={item.name}>
            <Card className="border-0">
              <Card.Body className="d-flex">
                <section className="flex-grow-1">
                  <p className="text-muted fw-medium">{item.name}</p>
                  <h5 className="font-14 fw-bold">{item.count}</h5>
                </section>
                <section
                  className="card--icon"
                  style={{ backgroundColor: item.color }}
                >
                  <FontAwesomeIcon icon={item.image} size="xl" />
                </section>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="border-0 p-3">
            <p className="font-16 section--name">
              Month wise analytics on consumer acquisition
            </p>
            <Card.Body className="graph d-flex justify-content-center">
              <Area {...MonthlyWiseChartProps} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
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
      <Row className="mt-4">
        <Card className="border-0 p-3">
          <Card.Body style={{ padding: "0" }}>
            <p className="font-16 section--name">Check Endorsement Status</p>
            <Form.Control type="text" placeholder="Enter Claim Number" />
          </Card.Body>
        </Card>
      </Row>
      <Row className="mt-4">
        <Card className="border-0 p-3">
          <p className="font-16 section--name">List of endorsements made</p>
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
          <CustomisedTable count={1} />
        </Card>
      </Row>
    </Container>
  );
};

export default Endorsement;
