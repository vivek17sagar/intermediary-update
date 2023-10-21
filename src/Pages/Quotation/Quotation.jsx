// import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import {
  faUser,
  faIndianRupeeSign,
  faPenToSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
// import { Area, Pie } from "../../Components/Charts/Charts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { MonthlyWiseChartProps, pieProps } from "../Home/props";

import { Container, Row, Card, Col, Form } from "react-bootstrap";
// import { useQueries } from "@tanstack/react-query";
// import { endorsementInvoicesList } from "../../API/Endorsement/endorsement.api";
// import { getPayload } from "../../Payload";
import { useStore } from "../../Store/store";
import { getResultFromData } from "../../Utils/Utils";
import { getPayload } from "../../Payload";
import { useQueries } from "@tanstack/react-query";
import { intermediateQuotations } from "../../API/Quotation/Quotation.api";
import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import QuotationTable from "./QuotationTable";
import { PaginationBasic } from "../Claims/PaginationComponent";
import { useState } from "react";

const Quotation = () => {
  const [page, setPage] = useState(1);
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  const [{ data: quotationTableData, refetch }] = useQueries({
    queries: [
      {
        queryKey: ["intermediatequotations"],
        queryFn: () =>
          intermediateQuotations(
            getPayload("intermediatequotations", {
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
      <p className="font-16 section--name">Quotation</p>

      <Row className="mt-4">
        <Card className="border-0 p-3">
          <p className="font-16 section--name">List of Quotations made</p>
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

                  <Form.Control type="text" placeholder="Choose..." />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <QuotationTable quotationTableData={quotationTableData} />
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

export default Quotation;
