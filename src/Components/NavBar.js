import React, { useState } from "react";
import "../Styles/navBar.css";
import { motion, AnimatePresence } from "framer-motion";
import phone from "../Pictures/call_black_24dp.svg";
import menu from "../Pictures/menu_white_24dp.svg";
import close from "../Pictures/close_white_24dp.svg";

function NavBar() {
  //path related
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  console.log(currentPath);

  //nav-menu related
  const [scrollLevel, setScrollLevel] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  var updateRate = 0;
  var previouslyUpdated = 0;

  window.addEventListener("scroll", (event) => {
    updateRate++;
    if (updateRate - 20 === previouslyUpdated || window.scrollY < 10) {
      previouslyUpdated += 20;
      setScrollLevel(window.scrollY);
      console.log("etst");
      console.log(window.scrollY);
    }
  });

  return (
    <div className="fixed">
      <AnimatePresence>
        <motion.div
          className="navBar-container"
          transition={{ type: "ease-in-out" }}
          initial={{ top: "-100px" }}
          animate={{ top: "0px" }}
          exit={{ top: "-100px" }}
        >
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="hamburger-container"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <img src={close} alt="" className="phone-icon" />
            ) : (
              <img src={menu} alt="" className="phone-icon" />
            )}
          </motion.div>
          <AnimatePresence>
            {menuOpen === false && (
              <motion.div
                className="phone-number-container"
                transition={{ type: "ease-in-out" }}
                initial={{ top: "-100px" }}
                animate={{ top: "0px" }}
                exit={{ top: "-200px" }}
              >
                <img src={phone} alt="" className="phone-icon" />
                <div className="phone-number">+44 207 582 7423</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="nav">
            <div
              className={`nav-item-desktop ${
                currentPath === "/" && "nav-item-desktop-active"
              } `}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home
            </div>
            <div
              className={`nav-item-desktop ${
                currentPath === "/UsAndYou" && "nav-item-desktop-active"
              } `}
              onClick={() => {
                window.location.href = "/UsAndYou";
              }}
            >
              Us and you
            </div>
            <div
              className={`nav-item-desktop ${
                currentPath === "/FAQs" && "nav-item-desktop-active"
              } `}
              onClick={() => {
                window.location.href = "/FAQs";
              }}
            >
              FAQs
            </div>
            <div
              className={`nav-item-desktop ${
                currentPath === "/GoingPrivate" && "nav-item-desktop-active"
              } `}
              onClick={() => {
                window.location.href = "/GoingPrivate";
              }}
            >
              Going private
            </div>
            <div
              className={`nav-item-desktop ${
                currentPath === "/Legals" && "nav-item-desktop-active"
              } `}
              onClick={() => {
                window.location.href = "/Legals";
              }}
            >
              Legals
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-container"
            transition={{ type: "ease-in-out" }}
            initial={{ top: "-400px" }}
            animate={{ top: "0px" }}
            exit={{ top: "-400px" }}
          >
            <h1 className="menu-title">Medopos</h1>
            <div className="menu-nav">
              <div
                className={`nav-item ${
                  currentPath === "/" && "nav-item-active"
                } `}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Home
              </div>
              <div
                className={`nav-item ${
                  currentPath === "/UsAndYou" && "nav-item-active"
                } `}
                onClick={() => {
                  window.location.href = "/UsAndYou";
                }}
              >
                Us and you
              </div>
              <div
                className={`nav-item ${
                  currentPath === "/FAQs" && "nav-item-active"
                } `}
                onClick={() => {
                  window.location.href = "/FAQs";
                }}
              >
                FAQs
              </div>
              <div
                className={`nav-item ${
                  currentPath === "/GoingPrivate" && "nav-item-active"
                } `}
                onClick={() => {
                  window.location.href = "/GoingPrivate";
                }}
              >
                Going private
              </div>
              <div
                className={`nav-item ${
                  currentPath === "/Legals" && "nav-item-active"
                } `}
                onClick={() => {
                  window.location.href = "/Legals";
                }}
              >
                Legals
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
