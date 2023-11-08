import "./styles.css";
import { getCurrentBrowserDiamension } from "../../Utils/Utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EoxegenLogoColour } from "../../assets/eOxegenLogoColour";
import { FaHouse } from "../../assets/faHouse";
import { FaCustomer } from "../../assets/faCustomer";
import { FaClaims } from "../../assets/FaClaims";
import { FaPolicies } from "../../assets/faPolicies";
import { FaEndorsement } from "../../assets/faEndoresement";
import { FaCommision } from "../../assets/faCommission";
import { FaReceipt } from "../../assets/faReceipt";
import { FaInvoice } from "../../assets/faInvoice";
import { faQuote } from "../../assets/faQuote";
import ArrowSideBar from "../../assets/ArrowSideBar";
import forwardArrow from "../../assets/forward_arrow.png";
import back_arrow from "../../assets/back_arrow.png";
// import quote from "../../assets/"

const Sidebar = ({ func }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const [cureentWidth, setCurrentWidth] = useState(
    getCurrentBrowserDiamension()
  );

  useEffect(() => {
    function SetSize() {
      setCurrentWidth(getCurrentBrowserDiamension());
    }
    window.addEventListener("resize", SetSize);

    return () => {
      window.removeEventListener("resize", SetSize);
    };
  }, [cureentWidth]);

  const controlHover = (task) => {
    switch (task) {
      case "open": {
        setOpen(true);
        break;
      }
      case "close": {
        setOpen(false);
        break;
      }
      default: {
        alert("Wrong Choice");
      }
    }
  };

  // Todo : add routes in the object and render dynamically
  const navLinks = [
    { icon: FaHouse, name: "Dashboard", route: "/home" },
    {
      icon: FaCustomer,
      name: "Customer",
      route: "/customer",
    },
    {
      icon: FaClaims,
      name: "Claims",
      route: "/claims",
    },
    {
      icon: FaPolicies,
      name: "Policies",
      route: "/policies",
    },
    {
      icon: FaEndorsement,
      name: "Endorsement",
      route: "/endorsement",
    },
    {
      icon: FaCommision,
      name: "Comission ",
      route: "/comissionstatement",
    },
    {
      icon: faQuote,
      name: "Quotation",
      route: "/quotation",
    },
    {
      icon: FaInvoice,
      name: "Invoice",
      route: "/invoice",
    },
    {
      icon: FaReceipt,
      name: "Receipt",
      route: "/receipt",
    },
  ];

  const getSectionActive = () => {
    return window.location.pathname;
  };

  const controlSidebar = () => {
    open ? controlHover("close") : controlHover("open");

    open ? func(6) : func(17);
  };
  return (
    <motion.main
      initial={false}
      transition={{ duration: 0.5 }}
      animate={{ width: open ? "300px" : "80px" }}
      // onHoverEnd={() => {
      //   if (cureentWidth > 1280) {
      //     controlHover("close");
      //   }
      // }}
      // onClick={() => {
      //   if (cureentWidth > 1280) {
      //     controlHover("open");
      //   }
      // }}
      className="main--section"
    >
      <motion.section
        className="sidebar--logo"
        onClick={() => navigate("/home")}
      >
        <EoxegenLogoColour open={open} />
      </motion.section>

      <motion.section>
        <section
          className="nav--menu d-flex justify-content-center align-items-center"
          style={{ gap: `${open ? "1rem" : "2rem"}` }}
        >
          <div
            style={{ cursor: "pointer" }}
            // hidden={cureentWidth > 1280}
            onClick={controlSidebar}
          >
            <ArrowSideBar arrow={open ? back_arrow : forwardArrow} />
          </div>

          {navLinks.map((item) => (
            <div
              key={Math.floor(Math.random() * 100000)}
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "1rem",
                cursor: "pointer",
                flexWrap: "nowrap",
              }}
              data-title={item.name}
              onClick={() => navigate(item.route)}
            >
              <item.icon
                width={open ? "20" : "25"}
                height={open ? "20" : "25"}
                selected={getSectionActive() === item.route}
              />
              <AnimatePresence>
                {open ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="item--name"
                    data-active={`${getSectionActive() === item.route}`}
                  >
                    {item.name}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </section>
      </motion.section>
    </motion.main>
  );
};

export default Sidebar;
