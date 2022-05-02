import React from "react";
import "../Styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="page-links-container">
        <a href="/" className="page-link">
          Home
        </a>
        <a href="https://medopos.vercel.app/UsAndYou" className="page-link">
          Us and You
        </a>
        <a href="/FAQs" className="page-link">
          FAQs
        </a>
        <a href="https://medopos.vercel.app/GoingPrivate" className="page-link">
          Going private
        </a>
        <a href="https://medopos.vercel.app/Legals" className="page-link">
          Legals
        </a>
      </div>
    </div>
  );
}

export default Footer;
