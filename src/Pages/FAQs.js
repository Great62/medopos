import React, { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import "../Styles/FAQs.css";
import { motion, AnimatePresence } from "framer-motion";

function FAQs() {
  const [blurOn, setBlurOn] = useState(0);

  function blur(elementNumber) {
    if (elementNumber === blurOn) {
      setBlurOn(0);
    } else {
      setBlurOn(elementNumber);
    }
  }

  return (
    <div className="FAQ-Page">
      <AnimatePresence>
        {blurOn ? (
          <motion.div
            initial={{
              "backdrop-filter": "blur(0em)",
              "-webkit-backdrop-filter": "blur(0em)",
            }}
            animate={{
              "backdrop-filter": "blur(1em)",
              "-webkit-backdrop-filter": "blur(1em)",
            }}
            exit={{
              "backdrop-filter": "blur(0em)",
              "-webkit-backdrop-filter": "blur(0em)",
            }}
            className="blur-background"
            onClick={() => setBlurOn(0)}
          ></motion.div>
        ) : null}
      </AnimatePresence>
      <div className="FAQ-title">Frequently asked questions:</div>
      <div className="FAQ-container">
        <NavBar />
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => blur(1)}
          className={`question-container ${blurOn === 1 && "on-top"} `}
        >
          <div className="question">1. Is your service free?</div>
          <div className="response">
            No. We charge 12% of the treatment cost with a minimum fee of 240
            pounds.
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => blur(2)}
          className={`question-container ${blurOn === 2 && "on-top"} `}
        >
          <div className="question">
            2. But other medical tourism sites don't charge?
          </div>
          <div className="response">
            There is no such thing as a free lunch. Other websites earn their
            money by directing you to the hospitals that pay them a bounty for
            finding their patients. Perhaps they'll tell you the amount of their
            cut, perhaps they won't. We prefer transparency, the best
            disinfectant.
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => blur(3)}
          className={`question-container ${blurOn === 3 && "on-top"} `}
        >
          <div className="question">
            3. Which are the longest waiting lists in the NHS?
          </div>
          <div className="response">
            Currently there are many operations where you can expect to wait an
            unreasonable length of time. These include:{" "}
            <mark>
              hip and knee (650,000 in the queue) eyes (570,00) gynaecology,
              gastroenterology, general
            </mark>{" "}
            and cancer treatment, urology, dermatology, cardiac, ENT, neurology,
            respiratory, rheumatic treatment; over six million patients on the
            NHS waiting list, and the lists are growing, especially in chronic
            conditions.
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => blur(4)}
          className={`question-container ${blurOn === 4 && "on-top"} `}
        >
          <div className="question">
            4. What happens if you do not find me a suitable clinic?
          </div>
          <div className="response">
            We refund your initial 240 pounds. Normally we will take your
            preferences into account (from a questionnaire) and suggest two to
            four clinics we consider suitable.
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => blur(5)}
          className={`question-container ${blurOn === 5 && "on-top"} `}
        >
          <div className="question">
            5. Do you guarantee to find a clinic for all medical problems?
          </div>
          <div className="response">
            No. We are currently not set up to assess organ transplants,
            cosmetic surgery or gender reassignment. But do ask us about
            anything else. We do not accept self diagnosed patients, you must
            have a professional referral.
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => blur(6)}
          className={`question-container ${blurOn === 6 && "on-top"} `}
        >
          <div className="question">
            6. How soon can I expect to get treatment?
          </div>
          <div className="response">
            The hard part is getting your medical notes from your GP or
            consultant. You have a right to your medical notes and should insist
            on obtaining them. If everything is already in place, it might be as
            soon as two weeks. But this is rare. There are multiple forms to
            fill out. Delays can be caused by backlogs in European clinics (some
            of them partially closed in 2020), scheduling a convenient time for
            both you and the surgical team, availability of flights.... But a
            lot quicker than waiting for an operation in the UK. We aim for a
            four week process.
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => blur(7)}
          className={`question-container grid-span-2 ${
            blurOn === 7 && "on-top"
          } `}
        >
          <div className="question">7. How do I sign up?</div>
          <div className="response">
            Pay our initial fee. Describe your symptoms and your diagnosis. We
            begin to canvas suitable clinics and get them to quote. The more
            information you can provide (copies of X rays, MRI scans etc.) the
            more precise the quote. We triage quotes according to our quality
            controls and your expressed preferences. You then decide on a clinic
            and we work to get you there as soon as practicable. See the contact
            details on our home page
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQs;
