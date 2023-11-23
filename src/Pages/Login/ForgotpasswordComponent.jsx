import { useRef, useState } from "react";
// import {
//   Button,
//   Checkbox,
//   Label,
//   TextInput,
//   Card,
//   Spinner,
// } from "flowbite-react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
// import { EoxegenLogoColour } from "../../assets/eOxegenLogoColour";
// import { LoginBackground } from "../../assets/loginbackground";
import { useAuth } from "../../hooks/useAuth";
import "./styles.css";
import {
  ForgotOtp,
  Forgotpassword,
  // ValidateLogin,
  // verifyWithOTP,
} from "../../API/Login/Login.api";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
// import { getPayload } from "../../Payload";
import { useQueries } from "@tanstack/react-query";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import CryptoJSCore from "crypto-js/core";
import Pkcs7 from "crypto-js/pad-pkcs7";
import cogoToast from "cogo-toast";
import { getResultFromData } from "../../Utils/Utils";
// import Spinner from "../../Components/Spinner/Spinner";

const ForgotpasswordComponent = () => {
  const {
    register,
    handleSubmit,
    getValues,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      enterOtp: "",
    },
  });

  // const [openLicense, setOpenLicense] = useState(false);
  // const [OTP, setOTP] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const modalRef = useRef(null);

  const { user } = useAuth();

  // const { refetch, isFetching } = useQuery(["login"], handleFormValues, {
  //   refetchOnWindowFocus: false,
  //   enabled: false,
  // });

  const [
    // {
    //   data: forgotPasswordData,
    //   refetch: forgotpassword,
    //   isFetching: forgotPasswordFetching,
    // },
    { data: otpData, refetch: getOtpData, isFetching: getOtpFetching },
  ] = useQueries({
    queries: [
      {
        queryKey: ["changeintermediatePassword"],
        queryFn: () => handleFormValues,
        enabled: false,
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["forwardIntermediatePassword"],
        queryFn: () => handleForwardOtp,
        enabled: false,
        refetchOnWindowFocus: false,
      },
    ],
  });

  if (user) {
    return <Navigate to="/home" />;
  }

  const handleForwardOtp = async () => {
    const values = getValues();

    const payload = {
      searchvalue: values.email,
    };

    const getOtp = await ForgotOtp(payload);

    if (getOtp.ok) {
      cogoToast.success(getResultFromData(getOtp).message);
      return true;
    }
    return false;
  };

  async function handleFormValues() {
    const values = getValues();

    if (!values) {
      setIsLoggedIn(undefined);

      return;
    }

    const payLoad = {
      searchvalue: values.email,
      password: encryptPassword(values.password),
      confirmpassword: encryptPassword(values.confirmPassword),
      OTP: values.enterOtp,
    };

    const validateFirstStep = await Forgotpassword(payLoad);

    if (validateFirstStep.ok) {
      cogoToast
        .success(getResultFromData(validateFirstStep).message)
        .then(() => modalRef.current?.showModal());
      return true;
    }
    return false;
  }

  /**
   *
   * @param {*} password => User input password
   * @returns Hashed password
   */
  const encryptPassword = (password) => {
    const publickey = Base64.parse(import.meta.env.VITE_hd_publicKey);
    const algoKey = Base64.parse(import.meta.env.VITE_hd_algoKey);
    const utfStringified = Utf8.parse(password).toString();
    const aesEncrypted = AES.encrypt(utfStringified, publickey, {
      mode: CryptoJSCore.mode.CBC,
      padding: Pkcs7,
      iv: algoKey,
    });
    return aesEncrypted?.ciphertext?.toString(Base64);
  };

  /**
   *
   * @performs Validates the OTP and logs in the user
   */
  /*const handleOTP = async () => {
    const values = getValues();
    console.log("reaching");
    if (String(OTP).length !== 6) {
      cogoToast.error("must be 6 digits");
      return;
    }

    const payLoad = {
      searchvalue: values?.email,
      OTP,
    };

    // OTPref.current.disabled = true;
    const validatewithotp = await verifyWithOTP(payLoad);

    if (validatewithotp.ok) {
      if (login) {
        login(getResultFromData(validatewithotp));
        // OTPref.current.disabled = false;
        modalRef.current?.close();
      }
    } else {
      cogoToast.error("something went wrong");
      // OTPref.current.disabled = false;
    }
  };*/

  return (
    <main className="login--main-forgot">
      {/* <section className="first--half">
        <LoginBackground />
      </section> */}
      <section className="login--card border-0">
        <Card
          className="login_details_card border-0 shadow-lg justify-cente items-center p-9"
          style={{ width: "35rem" }}
        >
          <Col className="ml-80 underline">
            <Link to="/" style={{ color: "navy" }}>
              Sign In
            </Link>
          </Col>
          {/* <Card.Title className="text-center">
            <strong className="sign-in-header">
              Welcome to <EoxegenLogoColour />
            </strong>
          </Card.Title> */}
          <Form
            onSubmit={handleSubmit(handleFormValues)}
            className=" flex flex-col gap-3 mt-2 w-96 "
          >
            <div>
              <Form.Label>USERID </Form.Label>
              <Form.Control
                name="email"
                sizing="md"
                type="text"
                className="rounded-full"
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     refetch();
                //   }
                // }}
                {...register("email")}
                required
              />
            </div>
            <div>
              <Form.Label className="mt-2">PASSWORD</Form.Label>
              <Form.Control
                name="password"
                type="password"
                className="rounded "
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     refetch();
                //   }
                // }}
                {...register("password")}
                required
              />
            </div>
            <div>
              <Form.Label className="mt-2">CONFIRM PASSWORD</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                className="rounded "
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     refetch();
                //   }
                // }}
                {...register("confirmPassword")}
                required
              />
            </div>
            <div>
              <Form.Label className="mt-2">ENTER OTP</Form.Label>
              <Form.Control
                name="enterOtp"
                type="password"
                className="rounded "
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     refetch();
                //   }
                // }}
                {...register("enterOtp")}
                required
              />
            </div>
            {/* <section className="options">
              <Form.Label className="mt-4">
                <InputGroup>
                  <InputGroup.Checkbox />
                  Remember Me
                </InputGroup>
              </Form.Label>
              <a href="/forgotpassword" onClick={hadleForgot}>
                Forgot Password
              </a>
            </section> */}
            <Row>
              <Col>
                <Button
                  // disabled={isLoggedIn === true}

                  className="mt-2 w-100 btn-bg"
                  onClick={handleForwardOtp}
                >
                  Get OTP
                </Button>
              </Col>

              <Col>
                <Button
                  disabled={isLoggedIn === true}
                  style={{ fontSize: "15px" }}
                  className="mt-2 w-100 btn-bg"
                  onClick={handleSubmit(handleFormValues)}
                >
                  {/* {isFetching ? (
                    <Spinner suspense={false} />
                  ) : (
                    "Change Password"
                  )} */}
                  Change Password
                </Button>
              </Col>
            </Row>

            {/* <hr /> */}
          </Form>
          {/* <dialog ref={modalRef} className="dialog__modal">
            <section>
              <label>
                Enter OTP
                <input
                  id="otp"
                  name="otp"
                  type="number"
                  value={OTP}
                  className="input"
                  onChange={(e) => setOTP(e.target.valueAsNumber)}
                  onKeyDown={(e) => (e.key === "Enter" ? handleOTP() : void 0)}
                />
              </label>
              <button
                type="button"
                onClick={handleOTP}
                // eslint-disable-next-line no-void
                // ref={OTPref}
                data-otp="OTP"
                className="btn btn-primary"
                tabIndex={0}
              >
                Submit
              </button>
            </section>
          </dialog> */}
        </Card>
      </section>
    </main>
  );
};

export default ForgotpasswordComponent;
