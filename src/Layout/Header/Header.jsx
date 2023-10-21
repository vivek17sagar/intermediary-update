import "./styles.css";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { Settings } from "../../assets/Settings.jsx";
import { UserProfile } from "../../assets/UserProfile.jsx";
import { Signout } from "../../assets/Signout.jsx";
import { UpdateProfile } from "../../assets/UpdateProfileOne.jsx";
import ProfileImage from "../../assets/user-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";
import { Card } from "react-bootstrap";
// import { UseAuthType } from "Types/types";
import { isBrowser } from "../../../decideENV.js";
import { useStore } from "../../Store/store";

/** make sure to put svg in userMenu */

const Header = () => {
  const [userPopup, setUserPopup] = useState(false);
  const [notificationPopup, setNotificationPopup] = useState(false);
  const [active, setActive] = useState("home");
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const { logout } = useAuth();
  const location = useLocation();

  // const isBrowser = typeof window !== "undefined";

  const { userDetails } = useStore((store) => ({
    // setUserDetails: store.setUserDetails,
    userDetails: store.userDetails,
  }));

  useEffect(() => {
    setActive(location.pathname.slice(1));
  }, [location]);

  //   const handleClickOutside = () => {
  //     if (userPopup) {
  //       setUserPopup(false);
  //     } else if (notificationPopup) {
  //       setNotificationPopup(false);
  //     }
  //   };

  const handleuserProfile = () => {
    alert("hi from userprofile");
  };
  const handleSettings = () => {
    alert("hi from settings");
  };
  const handleSignout = () => {
    if (logout) {
      logout();
    }
  };

  const userMenu = {
    "User Profile": { Icon: UpdateProfile, handler: handleuserProfile },
    Settings: { Icon: Settings, handler: handleSettings },
    "Sign Out": { Icon: Signout, handler: handleSignout },
  };

  const handleFullScreen = () => {
    if (isBrowser) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  //   useOnClickOutside(notificationRef, handleClickOutside);
  //   useOnClickOutside(profileRef, handleClickOutside);
  return (
    <motion.main
      initial={{ scale: 0.994 }}
      animate={{ scale: 1 }}
      id="app-header"
      style={{ backgroundColor: "white", padding: "20px" }}
    >
      <section className="pages-header">
        <i role="button" onClick={handleFullScreen}>
          <FontAwesomeIcon icon={faExpand} color="#8b98a4" size="lg" />
        </i>
        <i
          style={{ cursor: "pointer" }}
          role="button"
          onKeyDown={() => {}}
          tabIndex={0}
          onClick={() => {
            setNotificationPopup((np) => !np);
            setUserPopup(false);
          }}
        >
          <FontAwesomeIcon icon={faBell} color="#8b98a4" size="lg" />
        </i>
        <i
          style={{ cursor: "pointer" }}
          role="button"
          onKeyDown={() => {}}
          tabIndex={0}
          onClick={() => {
            setUserPopup((up) => !up);
            setNotificationPopup(false);
          }}
        >
          <UserProfile />
        </i>
        {notificationPopup && (
          <motion.div
            ref={notificationRef}
            className="notification-popup rounded-1r"
          >
            <Card className="border-0">
              <Card.Body>
                <section className="notificationHeader">
                  <div>
                    <strong>Notifications</strong>
                  </div>
                  <div className="mark-all">
                    <strong>Mark all as read</strong>
                  </div>
                </section>
              </Card.Body>
            </Card>
          </motion.div>
        )}
        {userPopup && (
          <motion.div
            ref={profileRef}
            className="user-dropdown-popup rounded-1r"
          >
            <Card className="profile_card border-0">
              <Card.Body>
                <section className="user-head">
                  <img
                    src={ProfileImage}
                    width={100}
                    height={100}
                    alt="profilePic"
                  />
                  <div className="user-details">
                    <h2 style={{ fontWeight: "600" }}>
                      {userDetails?.userName}
                    </h2>
                    <p>{userDetails?.userCategory}</p>
                    <p>{userDetails?.userEmail}</p>
                  </div>
                </section>
                <ul
                  className="uluser mt-3"
                  style={{ listStyle: "none", padding: 0 }}
                >
                  {Object.entries(userMenu).map(([key, value]) => {
                    return (
                      <li
                        key={Math.floor(Math.random() * 100000)}
                        className="d-flex gap-3"
                        onClick={value.handler}
                      >
                        <hr />
                        <value.Icon />
                        &nbsp;&nbsp;&nbsp; {key}
                      </li>
                    );
                  })}
                </ul>
              </Card.Body>
            </Card>
          </motion.div>
        )}
      </section>
    </motion.main>
  );
};

export default Header;
