import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../styles/JoinWaitlist.css";
import JoinWaitlistImg from "../assets/img/map.png";

const JoinWaitlist: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toggleForm = () => setIsFormVisible(!isFormVisible);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      // Use fetch to debug if axios is failing
      const response = await fetch("http://maptapp.atwebpages.com/api/post_waitinglist.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      console.log(data); // Log the response

      if (data.status === "success") {
        setMessage("🎉 Successfully joined the waitlist!");
        setName("");
        setEmail("");
      } else {
        setMessage("❌ Failed to join: " + data.message);
      }
    } catch (error) {
      console.error("Error occurred:", error); // Log the error

      setMessage("❌ No response from the server. Please try again.");
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="join-container"
    >
      <div className="join-content">
        <h1>Why Join the Waitlist</h1>
        <p>🚀 First Access - Be among the first to try Mapt before the official launch.</p>
        <p>📍 Beta Tester Benefits - Help shape the app and get early insights into new features.</p>
        <p>🌱 Travel with Purpose - Discover experiences that support local communities and sustainability.</p>
        <p>Join the Adventure!</p>
        <p>📧 Sign up now and be the first to experience the future of travel.</p>

        <button className="black-button" onClick={toggleForm}>
          {isFormVisible ? "Close Form" : "Join the Waitlist"}
        </button>

        {/* Expandable Form Section */}
        {isFormVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            className="waitlist-form"
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="form-control"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="form-control"
                required
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            {message && <p className="message">{message}</p>}
          </motion.div>
        )}
      </div>

      <div className="join-image">
        <img src={JoinWaitlistImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default JoinWaitlist;
