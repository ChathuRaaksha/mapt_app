import React from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "../styles/JoinWaitlist.css";
import JoinWaitlistImg from "../assets/img/map.png";
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
      <div className="join-content">
        <h1>{t('join_title')}</h1>
        <p>{t('join_p1')}</p>
        <p>{t('join_p2')}</p>
        <p>{t('join_p3')}</p>
        <p>{t('join_p4')}</p>
        <p>{t('join_p5')}</p>

        <button
          className="black-button"
          onClick={async () => {
            const { value: formValues } = await Swal.fire({
              title:  t('join_waitlist'),
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
                const response = await fetch("https://maptapp.atwebpages.com/api/post_waitinglist.php", {
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
                    confirmButtonText: 'OK',  // Optional: You can customize the button text
                    customClass: {
                      confirmButton: 'custom-button'  // Apply a custom class to the confirm button
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
        </button>
      </div>

      <div className="join-image">
        <img src={JoinWaitlistImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default JoinWaitlist;