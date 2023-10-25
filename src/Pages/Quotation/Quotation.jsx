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

import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";
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
import DataNotFound from "../CommonComponents/DataNotFound";
import { useForm } from "react-hook-form";

const Quotation = () => {
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
      proposerno: "",
    },
    // resolver: yupResolver(schema),
  });

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
              proposerName: getValues()?.proposerno,
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

  const handleReset = () => {
    reset();
    refetch();
  };

  return (
    <Container fluid>
      <p className="font-16 section--name">Quotation</p>
      <Row className="mt-4">
        <Card className="border-0 p-3">
          <Card className="border-0 p-3">
            <p className="font-16 section--name">Search Filter</p>
            <Card.Body style={{ padding: "0 0 1rem 0" }}>
              <Row>
                <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Proposer Name
                  </Form.Label>

                  <Form.Control
                    type="text"
                    className="border-gray-400 rounded-xl"
                    placeholder="Choose..."
                    {...register("proposerno")}
                  />
                </Col>
                {/* <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Customer Name
                  </Form.Label>

                  <Form.Control
                    type="text"
                    className="border-gray-400 rounded-xl"
                    placeholder="Choose..."
                    {...register("proposerno")}
                  />
                </Col>
                {/* <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                  Customer Name
                  </Form.Label>
                  
                  <Form.Control
                  type="text"
                  className="border-gray-400 rounded-xl"
                  placeholder="Choose..."
                  />
                  </Col>
                  <Col md={4}>
                  <Form.Label className="font-14 fw-bold text-muted">
                  Customer Name
                  </Form.Label>
                  
                  <Form.Control
                  type="text"
                  className="border-gray-400 rounded-xl"
                  placeholder="Choose..."
                  />
                </Col>
                </Col> */}
              </Row>
              <Button
                type="button"
                variant="primary"
                onClick={() => refetch()}
                className="mt-4 ml-2 bg-blue-700 justify-end"
              >
                Search
              </Button>

              <Button
                type="button"
                variant="primary"
                onClick={handleReset}
                className="mt-4 ml-2 bg-blue-700 justify-end"
              >
                Reset
              </Button>
            </Card.Body>
          </Card>
          <p className="font-16 section--name">List of Quotations</p>
          {quotationTableData ? (
            <QuotationTable quotationTableData={quotationTableData} />
          ) : (
            <DataNotFound />
          )}
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
