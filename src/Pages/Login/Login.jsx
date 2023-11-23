import { useRef, useState } from "react";
// import {
//   Button,
//   Checkbox,
//   Label,
//   TextInput,
//   Card,
//   Spinner,
// } from "flowbite-react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { EoxegenLogoColour } from "../../assets/eOxegenLogoColour";
import { LoginBackground } from "../../assets/loginbackground";
import { useAuth } from "../../hooks/useAuth";
import "./styles.css";
import { ValidateLogin, verifyWithOTP } from "../../API/Login/Login.api";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
// import { getPayload } from "../../Payload";
import { useQueries, useQuery } from "@tanstack/react-query";
import Base64 from "crypto-js/enc-base64";
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";
import CryptoJSCore from "crypto-js/core";
import Pkcs7 from "crypto-js/pad-pkcs7";
import cogoToast from "cogo-toast";
import { getResultFromData } from "../../Utils/Utils";
import { useStore } from "../../Store/store";
import Spinner from "../../Components/Spinner/SpinnerLoader";
import ReactSpinner from "react-bootstrap-spinner";
import { useEffect } from "react";
import logo from "../../assets/logoGA.jpg";

const Login = () => {
  const {
    register,
    handleSubmit,
    getValues,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const [openLicense, setOpenLicense] = useState(false);
  const [OTP, setOTP] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const modalRef = useRef(null);
  const { login, user } = useAuth();

  const { setUserDetails, userDetails } = useStore((store) => ({
    setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

  // const { refetch, isFetching } = useQuery(["login"], handleFormValues, {
  //   refetchOnWindowFocus: false,
  //   enabled: false,
  // });

  // const [
  //   {
  //     data: loginValidatedData,
  //     refetch: validatingRefetch,
  //     isFetching: isValidating,
  //   },
  //   { data: otpData, refetch: otpRefetching, isFetching: isOtpFetching },
  // ] = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["validateintermediatelogin"],
  //       queryFn: () => handleFormValues,
  //       enabled: false,
  //       refetchOnWindowFocus: false,
  //     },
  //     {
  //       queryKey: ["validateintermediateloginotp"],
  //       queryFn: () => handleOTP,
  //       // enabled: false,
  //       // refetchOnWindowFocus: false,
  //     },
  //   ],
  // });
  const [waiting, setWaiting] = useState(false);

  if (user) {
    return <Navigate to="/home" />;
  }

  async function handleFormValues() {
    const values = getValues();

    if (!values) {
      setIsLoggedIn(undefined);

      return;
    }

    const payLoad = {
      searchvalue: values.email,
      password: encryptPassword(values.password),
      sendType: "M",
    };
    setWaiting(true);
    const validateFirstStep = await ValidateLogin(payLoad);

    setTimeout(() => {
      if (validateFirstStep.ok) {
        cogoToast
          .success(getResultFromData(validateFirstStep)?.message)
          .then(() => modalRef.current?.showModal());
        setWaiting(false);
        return true;
      }
    }, 2000);
    setWaiting(true);
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
  const handleOTP = async () => {
    const values = getValues();
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
        sessionStorage.setItem(
          "tokenID",
          getResultFromData(validatewithotp).tokenID
        );
        setUserDetails(getResultFromData(validatewithotp));
        const data = getResultFromData(validatewithotp);
        localStorage.setItem("useDetails", JSON.stringify(data));
        // OTPref.current.disabled = false;
        modalRef.current?.close();
      }
    } else {
      cogoToast.error("something went wrong");
      // OTPref.current.disabled = false;
    }
  };

  const hadleForgot = () => {
    return <Navigate to="/forgotpassword" />;
  };

  return (
    <main className="login--main">
      <div style={{ position: "absolute", top: "50px", left: "90px" }} className="eOxegen-LOGO">
        <EoxegenLogoColour open={open} />
      </div>
      <section className="first--half">
        <LoginBackground />
      </section>
      <section className="login--card border-0 flex flex-col">
        <img src={logo} alt="" style={{ width: "30rem" }} className="GA-INC-LOGO"/>

        <Card
          className="login_details_card border-0"
          style={{ width: "40rem" }}
        >
          <Card.Title className="text-center">
            <div className="sign-in-header d-flex gap-2 justify-center flex flex-col">
              {/* Welcome to <EoxegenLogoColour /> */}
              <h2
                className=" text-gray-600"
                style={{
                  fontSize: "1.9rem",
                  height: "50px",
                }}
              >
                Welcome to GA Insurance Intermediary Portal
              </h2>
              <h4 className=" text-gray-600 text-2xl mt-4">
                Please sign-in to your account
              </h4>
            </div>
          </Card.Title>
          <Form
            onSubmit={handleSubmit(handleFormValues)}
            className=" flex flex-col gap-3 mt-4 pl-16 pr-16"
          >
            <div>
              <div className="mb-2 block">
                <Form.Label>USER ID</Form.Label>
              </div>
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
              <div className=" block">
                <Form.Label className="mt-4">PASSWORD</Form.Label>
              </div>
            </div>
            <Form.Control
              name="password"
              type="password"
              className="rounded "
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  refetch();
                }
              }}
              {...register("password")}
              required
            />
            <section className="options">
              <Form.Label className="mt-4">
                {/* <InputGroup>
                  <InputGroup.Checkbox />
                  Remember Me
                </InputGroup> */}
              </Form.Label>
              <Link to="/forgotpassword" onClick={hadleForgot}>
                Forgot Password
              </Link>
            </section>
            {waiting ? (
              <div className="mt-2 w-100 btn-bg rounded-3xl">
                <Spinner />
              </div>
            ) : (
              <Button
                // disabled={isLoggedIn === true}
                className="mt-2 w-100 bg-blue-700"
                onClick={handleSubmit(handleFormValues)}
              >
                {/* {isValidating ? (
                <ReactSpinner type="border" color="primary" size="5" />
              ) : ( */}
                Sign In
                {/* )} */}
              </Button>
            )}
            <hr />
          </Form>
          <dialog ref={modalRef} className="dialog__modal">
            <Card className="p-3 w-96 border-0">
              <Card.Body>
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  id="otp"
                  name="otp"
                  type="number"
                  value={parseInt(OTP)}
                  className="inputOtp rounded"
                  onChange={(e) => setOTP(e.target.valueAsNumber)}
                  onKeyDown={(e) => (e.key === "Enter" ? handleOTP() : void 0)}
                />
                <Button
                  type="button"
                  variant="primary"
                  onClick={handleOTP}
                  // eslint-disable-next-line no-void
                  // ref={OTPref}
                  data-otp="OTP"
                  className="mt-4 bg-blue-700 justify-end"
                  tabIndex={0}
                >
                  Submit
                </Button>
              </Card.Body>
            </Card>
          </dialog>
        </Card>
      </section>
    </main>
  );
};

export default Login;
