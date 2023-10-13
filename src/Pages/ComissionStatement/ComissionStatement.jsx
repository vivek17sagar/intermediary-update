import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import { Container, Row, Card } from "react-bootstrap";

const ComissionStatement = () => {
  return (
    <Container fluid>
      <p className="font-16 section--name">COMMISION STATEMENT</p>

      <Row className="mt-4">
        <Card className="border-0 p-3">
          <p className="font-16 section--name">List of statements</p>
          <CustomisedTable count={20} />
        </Card>
      </Row>
    </Container>
  );
};

export default ComissionStatement;
