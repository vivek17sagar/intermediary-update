import "./styles.css";
import Header from "./Header/Header.jsx";
import SubLayout from "./SubLayout.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import { useState } from "react";

const Layout = ({ children }) => {
  const [position, setPosition] = useState(6);
  const setLogoPosition = (param) => {
    setPosition(param);
  };

  return (
    <div className="background">
      <Sidebar func={setLogoPosition} />
      <section className="second--section">
        <Header positionData={position} />
        <SubLayout>{children}</SubLayout>
      </section>
    </div>
  );
};

export default Layout;
