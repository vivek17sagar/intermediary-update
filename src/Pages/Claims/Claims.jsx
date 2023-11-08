import { useQueries } from "@tanstack/react-query";
import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
import {
  Card,
  Row,
  Col,
  Container,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { IntermediateClaimInprocess } from "../../API/Claims/claim.api";
import { getPayload } from "../../Payload";
import { getResultFromData } from "../../Utils/Utils";
import { useStore } from "../../Store/store";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
import { useState } from "react";

import DataNotFound from "../CommonComponents/DataNotFound";
import { useForm } from "react-hook-form";
// import ShimmeringTable from "../CommonComponents/Shimmer";
const Claims = ({ dashboard }) => {
  const { register, getValues, reset } = useForm({
    defaultValues: {
      proposername: "",
      membername: "",
      displaymembershipno: "",
      claimno: "",
    },
  });

  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  const [{ data: claimProcessData, refetch, isFetching }] = useQueries({
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
              proposerName: getValues()?.proposername,
              memberName: getValues()?.membername,
              displayMembershipNo: getValues()?.displaymembershipno,
              claimNo: getValues()?.claimno,
              tokenID: userDetails?.tokenID,
            })
          ),
        select(data) {
          const endNumber = data?.data?.totalPages;
          return {
            firstValue: getResultFromData(data),
            SecondValue: endNumber,
          };
        },
      },
    ],
  });

  const handlePaginationBehaviour = (pageNo) => {
    setPage(pageNo);
    setTimeout(() => refetch(), 0);
  };

  const handleRest = () => {
    reset();
    setPage(1);
    setTimeout(() => refetch(), 0);
  };

  return !dashboard ? (
    <Container fluid>
      <p className="font-16 section--name pl-5 pb-2">CLAIMS</p>

      {/* <Row>
        <Card className="border-0 p-3">
          <Card.Body style={{ padding: "0" }}>
            <p className="font-16 section--name">Check Claim Status</p>
            <Form.Control type="text" placeholder="Enter Claim Number" />
          </Card.Body>
        </Card>
      </Row> */}

      {/* <p className="font-16 section--name">List of claims made</p> */}
      <Card className="border-0 pl-3 p-3">
        <p className="font-16 section--name mb-2">Search By</p>
        <Card.Body style={{ padding: "0 0 1rem 0" }}>
          <Row>
            <Col md={3}>
              <Form.Label className="font-14 fw-bold text-muted">
                Claim No.
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter Claim Number"
                className="border-gray-400 rounded-xl"
                {...register("claimno")}
              />
            </Col>

            <Col md={3}>
              <Form.Label className="font-14 fw-bold text-muted">
                Proposer Name
              </Form.Label>

              <Form.Control
                type="text"
                className="border-gray-400 rounded-xl"
                placeholder="Enter Proposer Name"
                {...register("proposername")}
              />
            </Col>

            <Col md={3}>
              <Form.Label className="font-14 fw-bold text-muted">
                Member Name
              </Form.Label>

              <Form.Control
                type="text"
                className="border-gray-400 rounded-xl"
                placeholder="Enter Member Name"
                {...register("membername")}
              />
            </Col>
            <Col md={3}>
              <Form.Label className="font-14 fw-bold text-muted">
                Membership No.
              </Form.Label>

              <Form.Control
                type="text"
                className="border-gray-400 rounded-xl"
                placeholder="Enter Membership No"
                {...register("displaymembershipno")}
              />
            </Col>
          </Row>

          <Row className=" d-flex align-items-center">
            <Col md={4}>
              <Button
                variant="primary"
                onClick={() => {
                  setPage(1);
                  setTimeout(() => refetch(), 0);
                }}
                className="mt-4 ml-3 bg-blue-700 justify-end"
              >
                Search
              </Button>

              <Button
                variant="primary"
                onClick={handleRest}
                className="mt-4 ml-3 bg-blue-700 justify-end"
              >
                Reset
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row className="mt-4">
        <p className="font-16  section--name">List of Claims</p>
        <Card className="border-0 p-3 mt-2 flex h-[480px]">
          {isFetching ? (
            <div className="flex justify-center align-middle">
              <Spinner />
            </div>
          ) : claimProcessData?.firstValue ? (
            <CustomisedTable
              Data={claimProcessData?.firstValue}
              table="claim"
            />
          ) : (
            <DataNotFound />
          )}
        </Card>
        <div className="flex justify-end mt-3 mr-5">
          <PaginationBasic
            handlePaginationBehaviour={handlePaginationBehaviour}
            page={page}
            pageNum={claimProcessData?.SecondValue}
          />
        </div>
      </Row>
    </Container>
  ) : (
    <Container fluid>
      <Row className="mt-4">
        <Card className="border-0 p-3 mt-2 flex justify-center h-[480px]">
          {isFetching ? (
            <div className="flex justify-center align-middle">
              <Spinner />
            </div>
          ) : claimProcessData?.firstValue ? (
            <CustomisedTable
              Data={claimProcessData?.firstValue}
              table="claim"
            />
          ) : (
            <DataNotFound />
          )}
        </Card>
        <div className="flex justify-end mt-3 mr-5">
          <PaginationBasic
            handlePaginationBehaviour={handlePaginationBehaviour}
            page={page}
            pageNum={claimProcessData?.SecondValue}
          />
        </div>
      </Row>
    </Container>
  );
};
export default Claims;
