import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
// import "./styles.css";
import { PoliciesTable } from "./PoliciesTable";
import { getResultFromData } from "../../Utils/Utils";
import { useQueries } from "@tanstack/react-query";
import { useStore } from "../../Store/store";
import { getPayload } from "../../Payload";
import { getPoliciesData } from "../../API/Policies/policies.api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DataNotFound from "../CommonComponents/DataNotFound";
import { PaginationBasic } from "../CommonComponents/PaginationComponent";
import axios from "axios";
const Policies = () => {
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

  const [waiting, setWaiting] = useState(false);

  const [{ data: policiesData, refetch, isFetching }] = useQueries({
    queries: [
      {
        queryKey: ["intermediatepolicies"],
        queryFn: () =>
          getPoliciesData(
            getPayload("intermediatepolicies", {
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
    ],
  });

  const handleExport = async () => {
    setWaiting(true);
    const payLoad = {
      agencyID: userDetails?.userID,
      agencyCode: userDetails?.userCode,
      tokenID: userDetails?.tokenID,
    };
    // setWaiting(true);
    const headers = {
      // "Content-Type": "blob",
      "Content-Type": "multipart/form-data",
      "eO2-Secret-Code": import.meta.env.VITE_EO2_SECRET_CODE,
    };
    const config = {
      method: "post",
      data: payLoad,
      url: `${
        import.meta.env.DEV
          ? import.meta.env.VITE_BaseURL_DEV
          : import.meta.env.VITE_BaseURL_PROD
      }/intermediatepoliciesexport`,
      responseType: "arraybuffer",
      headers,
    };

    const res = await axios(config);
    if (res) {
      setWaiting(false);
    }
    console.log(res);
    try {
      const response = await axios(config);

      const outputFilename = `${Date.now()}.xls`;

      // If you want to download file automatically using link attribute.
      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", outputFilename);
      document.body.appendChild(link);
      link.click();

      // OR you can save/write file locally.
      // fs.writeFileSync(outputFilename, response.data);
    } catch (error) {
      throw Error(error);
    }
    // exportedInvoiceRefetch();
  };

  const handleReset = () => {
    reset();
    setPage(1);
    setTimeout(() => refetch(), 0);
  };

  const handlePagination = (pageNo) => {
    setPage(pageNo);
    setTimeout(() => refetch(), 0);
  };

  return (
    <>
      <Container fluid>
        <p className="font-16 section--name ml-3 mb-2">POLICIES</p>
        <Row>
          <Card className="border-0 pl-3 p-3">
            <p className="font-16 section--name mb-2">Search By</p>
            <Card.Body style={{ padding: "0 0 1rem 0" }}>
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
                <Form
                // style={{
                //   display: "flex",
                //   flexDirection: "row",
                //   flexBasis: "initial",
                //   gap: "2rem",
                // }}
                >
                  <Col md={4}>
                    <Form.Label className="font-14 fw-bold text-muted">
                      Proposer Name
                    </Form.Label>
                    <Form.Control
                      placeholder="Enter Proposer Name"
                      className="border-gray-400 rounded-xl"
                      size="lg"
                      {...register("proposerName")}
                    />
                  </Col>
                </Form>
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
              <Button
                type="button"
                variant="primary"
                onClick={handleExport}
                className="mt-4 ml-2 bg-blue-700 justify-end export_button"
                tabIndex={0}
              >
                {waiting ? (
                  <div className="w-20 h-6  rounded-xl">
                    <Spinner style={{width: "15px", height: "15px"}} />
                  </div>
                ) : (
                  "Export File"
                )}
              </Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className="mt-4">
          <p className="font-16 section--name">List of Policies</p>
          <Card className="border-0 p-3 mt-2 flex h-[480px]">
            {isFetching ? (
              <div className="flex justify-center align-middle mt-40">
                <div>
                  <Spinner />
                </div>
              </div>
            ) : policiesData?.firstValue ? (
              <PoliciesTable tableData={policiesData?.firstValue} />
            ) : (
              <div className="flex justify-center align-middle mt-28">
                <div>
                  <DataNotFound />
                </div>
              </div>
            )}
          </Card>
        </Row>

        <Row className="flex justify-end items-end self-end mt-4">
          {/* {policiesData ? (
          <PoliciesPagination handlePagination={handlePagination} />
        ) : (
          <div className="text-center mt-4 text-3xl text-red-600">
            No more data
          </div>
        )} */}
        </Row>
      </Container>
      <div className="flex justify-end  mt-3 mr-5">
        <PaginationBasic
          handlePaginationBehaviour={handlePagination}
          page={page}
          pageNum={policiesData?.SecondValue}
        />
      </div>
    </>
  );
};

export default Policies;
