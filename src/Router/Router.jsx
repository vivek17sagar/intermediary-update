import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../Components/ProtectedRoute/ProtectedRoute";
import { Spinner } from "react-bootstrap";

const SignUp = lazy(() => import("../Pages/SignUp/Signup"));
const Login = lazy(() => import("../Pages/Login/Login"));
const Layout = lazy(() => import("../Layout/Layout"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Customer = lazy(() => import("../Pages/Customer/Customer"));
const Endorsement = lazy(() => import("../Pages/Endorsement/Endorsement"));
const Claims = lazy(() => import("../Pages/Claims/Claims"));
const AdmissionReport = lazy(() =>
  import("../Pages/AdmissionReport/AdmissionReport")
);
// const PaidClaims = lazy(() => import("../Pages/PaidClaims/PaidClaims"));
const Policies = lazy(() => import("../Pages/Policies/Policies"));
const Invoice = lazy(() => import("../Pages/Invoice/Invoice"));
const Quotation = lazy(() => import("../Pages/Quotation/Quotation"));
const Receipt = lazy(() => import("../Pages/Receipt/Receipt"));
const ForgotpasswordComponent = lazy(() =>
  import("../Pages/Login/ForgotpasswordComponent")
);
const ComissionStatement = lazy(() =>
  import("../Pages/ComissionStatement/ComissionStatement")
);

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <Suspense>
              <ForgotpasswordComponent />
            </Suspense>
          }
        />
      </Route>
     

      <Route
        path="/home"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <Home />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />

<Route
          path="/signup"
          element={
            <Suspense>
              <SignUp />
            </Suspense>
          }
        />
      
      <Route
        path="/customer"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <Customer />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
      <Route
        path="/endorsement"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <Endorsement />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
      <Route
        path="/claims"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <Claims />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
      {/* <Route
        path="/paidclaims"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <PaidClaims />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      /> */}
      <Route
        path="/report"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <AdmissionReport />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
      <Route
        path="/policies"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <Policies />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
      <Route
        path="/comissionstatement"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <ComissionStatement />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
      <Route
        path="/quotation"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <Quotation />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
      <Route
        path="/invoice"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <Invoice />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
      <Route
        path="/receipt"
        element={
          // <ProtectedRoute>
            <Layout>
              <Suspense fallback={<Spinner/>}>
                <Receipt />
              </Suspense>
            </Layout>
          // </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
