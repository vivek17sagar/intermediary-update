import "./ArrowSideBar.css";

const ArrowSideBar = ({ arrow }) => {
  return (
    <img src={arrow} alt="openSidebar" width="30px" className="arrow_sidebar" />
  );
};

export default ArrowSideBar;
