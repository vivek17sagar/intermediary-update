import "./styles.css";

const Spinner = ({ suspense = false, width = "10px", height = "10px" }) => {
  return (
    <div
      className="loader"
      style={{
        visibility: `${suspense ? "hidden" : "visible"}`,
        width,
        height,
      }}
    >
      {" "}
    </div>
  );
};

export default Spinner;
