import React, { useState } from "react";
import "../Styles/navBar.css";
import { motion, AnimatePresence } from "framer-motion";
import phone from "../Pictures/call_black_24dp.svg";
import menu from "../Pictures/menu_white_24dp.svg";
import close from "../Pictures/close_white_24dp.svg";

function NavBar() {
  const [scrollLevel, setScrollLevel] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  var updateRate = 0;
  var previouslyUpdated = 0;

  window.addEventListener("scroll", (event) => {
    updateRate++;
    if (updateRate - 3 === previouslyUpdated) {
      previouslyUpdated += 3;
      setScrollLevel(window.scrollY);
      console.log("etst");
    }
  });

  return (
    <div className="fixed">
      <AnimatePresence>
        {scrollLevel > 30 || menuOpen ? (
          <motion.div
            className="navBar-container"
            transition={{ type: "ease-in-out" }}
            initial={{ top: "-100px" }}
            animate={{ top: "0px" }}
            exit={{ top: "-100px" }}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
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
                  exit={{ top: "-100px" }}
                >
                  <img src={phone} alt="" className="phone-icon" />
                  <div className="phone-number">+33 7 68 19 56 41</div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="nav"></div>
          </motion.div>
        ) : null}
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
              <div className="nav-item">Home</div>
              <div className="nav-item">Us and you</div>
              <div className="nav-item">FAQs</div>
              <div className="nav-item">Going private</div>
              <div className="nav-item">Legals</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
