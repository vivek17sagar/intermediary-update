import { Pie, Area } from "../../Components/Charts/Charts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faPenToSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { pieProps, MonthlyWiseChartProps } from "./props";

import "./styles.css";
import { Card, Col, Container, Row } from "react-bootstrap";

const Home = () => {
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
    <main>
      <Container fluid>
        <p className="font-16 section--name">DASHBOARD</p>
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
          <Col md={7}>
            <Card className="border-0 p-3 pl-20">
              <p className="font-16 section--name">
                Month wise analytics on consumer acquisition
              </p>
              <Card.Body className="graph d-flex justify-content-center">
                <Area {...MonthlyWiseChartProps} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
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
          <Col md={12}>
            <Card className="border-0 p-3">
              <p className="font-16 section--name">
                List of endorsement request in process
              </p>
              <Card.Body className="d-flex justify-content-center">
                <CustomisedTable count={3} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <Card className="border-0 p-3">
              <p className="font-16 section--name">List of claims in process</p>
              <Card.Body className="d-flex justify-content-center">
                <CustomisedTable count={3} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
