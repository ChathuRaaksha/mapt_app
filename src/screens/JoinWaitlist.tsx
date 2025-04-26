import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "../styles/JoinWaitlist.css";
import JoinWaitlistImg from "../assets/img/mob.png";
import { useTranslation } from 'react-i18next';

const JoinWaitlist: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="join-container"
    >
      {/* Content */}
      <motion.div
        className="join-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <h1>{t('join_title')}</h1>
        <p>{t('join_p1')}</p>
        <p>{t('join_p2')}</p>
        <p>{t('join_p3')}</p>
        <p>{t('join_p4')}</p>
        <p>{t('join_p5')}</p>

        <motion.button
          className="orange-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={async () => {
            const { value: formValues } = await Swal.fire({
              title: t('join_waitlist'),
              html: `
                <input id="name" class="swal2-input" placeholder="Enter your name">
                <input id="email" class="swal2-input" placeholder="Enter your email">
              `,
              focusConfirm: false,
              preConfirm: () => {
                const name = (document.getElementById("name") as HTMLInputElement).value;
                const email = (document.getElementById("email") as HTMLInputElement).value;
                if (!name || !email) {
                  Swal.showValidationMessage("Please enter both name and email");
                }
                return { name, email };
              },
              confirmButtonText: t('join_btn'),
              didOpen: () => {
                const inputs = document.querySelectorAll(".swal2-input");
                inputs.forEach((input) => {
                  (input as HTMLElement).style.borderRadius = "30px";
                });
                const confirmButton = document.querySelector(".swal2-confirm") as HTMLElement;
                confirmButton.style.borderRadius = "30px";
                confirmButton.style.backgroundColor = "#333";
                confirmButton.style.color = "white";
                confirmButton.style.padding = "15px 30px";
              },
            });

            if (formValues) {
              const { name, email } = formValues;
              try {
                const response = await fetch("https://apiweb.maptgo.com/post_waitinglist.php", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, email }),
                });
                const data = await response.json();
                if (data.status === "success") {
                  Swal.fire({
                    title: "Success",
                    text: "You have been added to the waitlist!",
                    icon: "success",
                    confirmButtonText: 'OK',
                    customClass: {
                      confirmButton: 'custom-button'
                    }
                  });
                } else {
                  Swal.fire("Error", data.message, "error");
                }
              } catch (error) {
                Swal.fire("Error", "Server not responding. Please try again.", "error");
              }
            }
          }}
        >
          {t('join_btn')}
        </motion.button>
      </motion.div>

      {/* Image */}
      <motion.div
        className="join-image"
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        dragElastic={0.5}
        whileHover={{ rotate: [0, 10, -10, 10, 0], transition: { duration: 1 } }}
        whileTap={{ rotate: 360 }}
      >
        <motion.img
          src={JoinWaitlistImg}
          alt="Traveler illustration"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{ cursor: "grab" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default JoinWaitlist;
