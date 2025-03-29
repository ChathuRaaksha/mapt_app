import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import homeImg from "../assets/img/home_img.png";
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleStartPlanning = () => {
    navigate('/join-waitlist');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home-container"
    >
      <div className="home-content">
        <h1>Break from the Current Go with YOUR Flow</h1>
        <p>
          Hello, explorer! Mapt is your new travel companion, here to turn
          'where should I go?' into 'wow, this feels like me.' Discover hidden
          villages, vibrant cultures, and eco-friendly escapes—all tailored to
          your rhythm.
        </p>
        <button className="black-button"  onClick={handleStartPlanning}>Join the Waitlist</button>
      </div>
      <div className="home-image">
        <img src={homeImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Home;
