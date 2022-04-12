import React from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import "../Styles/CallToActionBottom.css";

function CallToActionBottom() {
  init("user_XG4i0VShzDINGA95mIWTy");
  //All usestates

  function SendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_91qsexy",
        "template_l1r5tki",
        e.target,
        "user_XG4i0VShzDINGA95mIWTy"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            console.log("Email sent");
          } else {
            console.log("Email failed to send");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="Bottom-CTA-Container">
      <form className="Bottom-CTA-Container-form" onSubmit={SendEmail}>
        <div className="CTA-Title">Contact Us</div>
        <div className="Bottom-CTA-Form-Container">
          <div className="CTA-Form-Block">
            <input
              className="InputBox-CTA"
              required
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="InputBox-CTA"
              required
              type="text"
              placeholder="Email"
              name="email"
            />
            <input
              className="InputBox-CTA"
              required
              type="text"
              placeholder="Subject"
              name="subject"
            />
          </div>

          <div className="CTA-Form-Block">
            <textarea
              className="InputBox-CTA Big-InputBox"
              required
              type="text"
              placeholder="Message"
              name="message"
            />
          </div>
        </div>
        <input type="submit" className="Send-message-CTA" />
      </form>
    </div>
  );
}

export default CallToActionBottom;
