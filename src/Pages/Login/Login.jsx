import { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Card,
  Spinner,
} from "flowbite-react";
import { EoxegenLogoColour } from "../../assets/eOxegenLogoColour";
import { LoginBackground } from "../../assets/loginbackground";
import { useAuth } from "../../hooks/useAuth";
import "./styles.css";
import { LoginAPI } from "../../API/Login/Login.api";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

const login = () => {
  console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiii");
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
  //   const [openLicense, setOpenLicense] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  const { login, user } = useAuth();

  if (user) {
    return <Navigate to="/home" />;
  }

  const handleFormValues = async () => {
    const values = getValues();
    console.log(values);
    const details = {
      email: values?.email,
      password: values?.password,
    };
    // login api to be called and the result should be saved in login context
    setIsLoggedIn(false);
    if (!details.email || !details.password) {
      console.log("Fill all the fields");
      setIsLoggedIn(false);

      return;
    }

    const timeout = setTimeout(async () => {
      const LoginDetails = await LoginAPI(details);
      if (LoginDetails.loggedIn) {
        if (login) {
          login(LoginDetails);
          setIsLoggedIn(true);
        }
      } else {
        console.log(LoginDetails.error);
        setIsLoggedIn(false);
      }

      clearTimeout(timeout);
    }, 0);
  };
  return (
    <main className="login--main">
      <section className="first--half">
        <LoginBackground />
      </section>
      <section className="login--card border-0">
        <Card className="login_details_card" style={{ width: "35rem" }}>
          <div>
            <strong className="sign-in-header flex justify-center gap-4">
              Welcome to <EoxegenLogoColour />
            </strong>
          </div>
          <form
            onSubmit={handleSubmit(handleFormValues)}
            className=" flex flex-col gap-3 mt-4"
          >
            <div>
              <div className="mb-2 block">
                <Label value="USERID / MOBILE / EMAIL" />
              </div>
              <TextInput
                name="email"
                sizing="md"
                type="text"
                className="rounded-full"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
                {...register("email")}
                required
              />
            </div>
            <div>
              <div className=" block">
                <Label value="PASSWORD" className="mt-4" />
              </div>
            </div>
            <TextInput
              name="password"
              type="password"
              className="rounded "
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
              {...register("password")}
              required
            />
            <section className="options mt-5">
              <div className="flex flex-row gap-1">
                <Checkbox />
                <Label className="mb-1">
                  <p>Remember Me</p>
                </Label>
              </div>
              <a href="/" onClick={(e) => e.preventDefault()}>
                Forgot Password
              </a>
            </section>
            <Button
              disabled={isLoggedIn === true}
              className="mt-2 w-100 btn-bg"
              onClick={handleSubmit(handleFormValues)}
            >
              {isLoggedIn === false ? (
                "Sign In"
              ) : isLoggedIn === false ? (
                <Spinner suspense={false} />
              ) : null}
            </Button>
            <hr />
          </form>
        </Card>
      </section>
    </main>
  );
};

export default login;
