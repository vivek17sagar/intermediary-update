import "./App.css";
import Router from "./Router/Router";

function App() {
  console.log(import.meta.env.MODE);
  console.log(import.meta.env.MODE == "DEV");
  console.log(import.meta.env.DEV);

  console.log(import.meta.env.VITE_BaseURL_DEV);
  console.log(import.meta.env.VITE_BaseURL_PROD);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
