import "./App.css";
import Router from "./Router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { lazy, Suspense } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
