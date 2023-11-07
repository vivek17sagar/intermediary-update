// import { CustomisedTable } from "../../Components/CustomisedTable/CustomisedTable";
// import {
//   faUser,
//   faIndianRupeeSign,
//   faPenToSquare,
//   faBars,
// } from "@fortawesome/free-solid-svg-icons";
// import { Area, Pie } from "../../Components/Charts/Charts";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { MonthlyWiseChartProps, pieProps } from "../Home/props";

import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { useQueries } from "@tanstack/react-query";
import { endorsementInvoicesList } from "../../API/Endorsement/endorsement.api";
import { getPayload } from "../../Payload";
import { useStore } from "../../Store/store";
import { EndorsementCustomizedTable } from "./EndorsementCustomizedTable";
import { getResultFromData } from "../../Utils/Utils";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
import { useState } from "react";

import DataNotFound from "../CommonComponents/DataNotFound";
import { useForm } from "react-hook-form";
// import ShimmeringTable from "../CommonComponents/Shimmer";
// import {
//   intermediateTotalRenewlCoutnonth,
//   intermediatepolicycount,
// } from "../../API/Home.api";
// import { intermediateTotalClaimInProcessCount } from "../../API/Claims/claim.api";

const Endorsement = ({ dashboard = false }) => {
  const [page, setPage] = useState(1);

  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
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
      proposerName: "",
    },
    // resolver: yupResolver(schema),
  });

  const [
    { data: endorsementInvoiceData, refetch, isFetching },
    // { data: renewalCount },
    // { data: policyCount },
    // { data: totalClaimInProcessCount },
  ] = useQueries({
    queries: [
      {
        queryKey: ["intermediateendrosmentinvoices"],
        queryFn: () =>
          endorsementInvoicesList(
            getPayload("intermediateendrosmentinvoices", {
              agencyID: userDetails?.userID,
              agencyCode: userDetails?.userCode,
              pageNo: page - 1,
              pageSize: 10,
              tokenID: userDetails?.tokenID,
              proposerName: getValues()?.proposerName,
            })
          ),
        select(data) {
          const endNumber = data?.data?.data?.totalPages;
          return {
            firstValue: getResultFromData(data),
            SecondValue: endNumber,
          };
        },
        // enabled: false,
        // refetchOnWindowFocus: false,
      },
      // {
      //   queryKey: ["intermediatetotalrenewlCoutnonth"],
      //   queryFn: () =>
      //     intermediateTotalRenewlCoutnonth(
      //       getPayload("intermediatetotalrenewlCoutnonth", {
      //         agencyID: userDetails?.userID,
      //         agencyCode: userDetails?.userCode,
      //         pageNo: 0,
      //         pageSize: 10,
      //         tokenID: userDetails?.tokenID,
      //       })
      //     ),
      //   select(data) {
      //     return getResultFromData(data);
      //   },
      // },
      // {
      //   queryKey: ["intermediatepolicycount"],
      //   queryFn: () =>
      //     intermediatepolicycount(
      //       getPayload("intermediatepolicycount", {
      //         agencyID: userDetails?.userID,
      //         agencyCode: userDetails?.userCode,
      //       })
      //     ),
      //   select(data) {
      //     // console.log(data);
      //     return getResultFromData(data);
      //   },
      // },
      // {
      //   queryKey: ["intermediatetotalclaiminprocesscount"],
      //   queryFn: () =>
      //     intermediateTotalClaimInProcessCount(
      //       getPayload("intermediatetotalclaiminprocesscount")
      //     ),
      //   select(data) {
      //     return getResultFromData(data);
      //   },
      // },
    ],
  });

  const handleReset = () => {
    reset();
    setPage(1);
    setTimeout(() => refetch(), 0);
  };

  const handlePaginationBehaviour = (pageNo) => {
    setPage(pageNo);
    setTimeout(() => refetch(), 0);
  };

  return (
    <Container fluid>
      {!dashboard && (
        <p className="font-16 section--name ml-3 mb-2">Endorsements</p>
      )}
      {!dashboard && (
        <Card className="border-0 pl-3 p-3">
          <p className="font-16 section--name mb-2">Search By Proposer Name</p>
          <Card.Body style={{ padding: "0 0 1rem 0" }}>
            <Row>
              <Col md={4}>
                {/* <Form.Label className="font-14 fw-bold text-muted">
                        Proposer Name
                      </Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter Proposer Name"
                  className="rouded rounded-md"
                  {...register("proposerName")}
                />
              </Col>
            </Row>
            <Button
              type="button"
              variant="primary"
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
              onClick={handleReset}
              className="mt-4 ml-2 bg-blue-700 justify-end"
              tabIndex={0}
            >
              Reset
            </Button>
          </Card.Body>
        </Card>
      )}
      <Row className="mt-4">
        <p className="font-16 mb-3 section--name">List of Endorsement</p>
        <Card className="border-0 p-3 mt-2 flex h-[480px]">
          {/* <EndorsementCustomizedTable tableData={endorsementInvoiceData} /> */}
          {isFetching ? (
            <div className="flex justify-center align-middle">
              <Spinner />
            </div>
          ) : endorsementInvoiceData?.firstValue ? (
            <EndorsementCustomizedTable
              tableData={endorsementInvoiceData?.firstValue}
            />
          ) : (
            <DataNotFound />
          )}
        </Card>
        <div className="flex justify-end mt-3 mr-5">
          <PaginationBasic
            handlePaginationBehaviour={handlePaginationBehaviour}
            page={page}
            pageNum={endorsementInvoiceData?.SecondValue}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Endorsement;
