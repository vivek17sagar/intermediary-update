import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout/Layout";

const Login = lazy(() => import("../Pages/Login/Login"));
const Layout = lazy(() => import("../Layout/Layout"));
const Home = lazy(() => import("../Pages/Home/Home"));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          </Layout>
        }
      />
    </Routes>
  );
};

export default Router;
