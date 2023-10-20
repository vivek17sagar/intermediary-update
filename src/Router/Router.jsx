import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../Components/ProtectedRoute/ProtectedRoute";

const Login = lazy(() => import("../Pages/Login/Login"));
const Layout = lazy(() => import("../Layout/Layout"));
const Home = lazy(() => import("../Pages/Home/Home"));
const Customer = lazy(() => import("../Pages/Customer/Customer"));
const Endorsement = lazy(() => import("../Pages/Endorsement/Endorsement"));
const Claims = lazy(() => import("../Pages/Claims/Claims"));
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
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <Home />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <Customer />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/endorsement"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <Endorsement />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/claims"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <Claims />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/policies"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <Policies />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/comissionstatement"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <ComissionStatement />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/quotation"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <Quotation />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/invoice"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <Invoice />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/receipt"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<>Loading...</>}>
                <Receipt />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Router;
