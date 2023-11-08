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
import { useStore } from "../../Store/store";
import { useQueries } from "@tanstack/react-query";
import { intermediatecustomersinfo } from "../../API/Home/Home.api";
import { getPayload } from "../../Payload";
import { getResultFromData } from "../../Utils/Utils";
import { useState } from "react";
// import PaginationCustomer from "./PaginationCustomer";
import { useForm } from "react-hook-form";
import DataNotFound from "../CommonComponents/DataNotFound";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
import Loader from "../../Components/Spinner/Loader";
import ShimmeringTable from "../CommonComponents/Shimmer";

const Customer = () => {
  const { userDetails } = useStore((store) => ({
    userDetails: store.userDetails,
  }));

  const {
    register,
    // handleSubmit,
    // control,
    // setValue,
    getValues,
    reset,
    // watch,
    // trigger,
  } = useForm({
    defaultValues: {
      membername: "",
      membershipno: "",
      proposerno: "",
      mobileno: "",
    },
    // resolver: yupResolver(schema),
  });

  const [page, setPage] = useState(1);

  const [{ data: customeInfo, refetch, isFetching }] = useQueries({
    queries: [
      {
        queryKey: ["intermediatecustomersinfo"],
        queryFn: () =>
          intermediatecustomersinfo(
            getPayload("intermediatecustomersinfo", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
              memberName: getValues()?.membername,
              membershipNo: getValues()?.membershipno,
              proposerName: getValues()?.proposerno,
              mobileNo: getValues()?.mobileno,
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

  const handleReset = () => {
    reset();
    setPage(1);
    setTimeout(() => refetch(), 0);
  };

  const handlePaginationBehaviour = (param) => {
    setPage(param);

    setTimeout(() => {
      refetch();
    }, 600);
  };

  return (
    <>
      <Container fluid>
        <p className="font-16 section--name mb-2">CUSTOMER</p>
        <Row>
          <Card className="border-0 pl-3 p-3">
            <p className="font-16 section--name mb-2">Search By</p>
            <Card.Body style={{ padding: "0 0 1rem 0" }}>
              <Row>
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Proposer Name
                  </Form.Label>

                  <Form.Control
                    id="proposerno"
                    className="border-gray-400 rounded-xl"
                    type="text"
                    placeholder="Enter Proposer Name"
                    {...register("proposerno")}
                  />
                </Col>
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Member Name
                  </Form.Label>

                  <Form.Control
                    id="membername"
                    className="border-gray-400 rounded-xl"
                    type="text"
                    placeholder="Enter Member Name"
                    {...register("membername")}
                  />
                </Col>
                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Membership No
                  </Form.Label>

                  <Form.Control
                    id="membershipno"
                    className="border-gray-400 rounded-xl"
                    type="text"
                    placeholder="Enter Membership No"
                    {...register("membershipno")}
                  />
                </Col>

                <Col md={3}>
                  <Form.Label className="font-14 fw-bold text-muted">
                    Mobile No
                  </Form.Label>

                  <Form.Control
                    id="mobileno"
                    className="border-gray-400 rounded-xl"
                    type="number"
                    placeholder="Enter Mobile No"
                    {...register("mobileno")}
                  />
                </Col>
              </Row>
              <Button
                type="button"
                variant="primary"
                // eslint-disable-next-line no-void
                // ref={OTPref}
                onClick={() => {
                  setPage(1);
                  setTimeout(() => refetch(), 0);
                }}
                className="mt-4 ml-2 bg-blue-700 justify-end"
                tabIndex={0}
              >
                Search
              </Button>
              <Button
                type="button"
                variant="primary"
                // eslint-disable-next-line no-void
                // ref={OTPref}
                onClick={handleReset}
                className="mt-4 ml-3 bg-blue-700 justify-end"
                tabIndex={0}
              >
                Reset
              </Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="mt-4">
          <p className="font-16 section--name">List of customers</p>
          <Card className="border-0 p-3 mt-2 flex h-[480px]">
            {isFetching ? (
              <div className="flex justify-center align-middle">
                <Spinner />
              </div>
            ) : customeInfo?.firstValue ? (
              <CustomisedTable
                Data={customeInfo?.firstValue}
                table="customer"
              />
            ) : (
              <DataNotFound />
            )}
          </Card>
        </Row>
      </Container>
      <div className="flex justify-end mt-3 mr-5 opacity-80">
        <div className="flex justify-end mt-3 mr-5">
          <PaginationBasic
            handlePaginationBehaviour={handlePaginationBehaviour}
            page={page}
            pageNum={customeInfo?.SecondValue}
          />
        </div>
      </div>
    </>
  );
};

export default Customer;
