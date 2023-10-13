import "./styles.css";
import Header from "./Header/Header.jsx";
import SubLayout from "./SubLayout.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

const Layout = ({ children }) => {
  return (
    <div className="background">
      <Sidebar />
      <section className="second--section">
        <Header />
        <SubLayout>{children}</SubLayout>
      </section>
    </div>
  );
};

export default Layout;
