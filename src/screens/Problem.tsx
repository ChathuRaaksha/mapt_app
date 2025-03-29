import React from "react";
import { motion } from "framer-motion";
import "../styles/Problem.css";
import ProblemImg from "../assets/img/problem.png";
import { useNavigate } from 'react-router-dom';
const Problem: React.FC = () => {
  const navigate = useNavigate();
  const handleStartPlanning = () => {
    navigate('/join-waitlist');
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="problem-container"
    >
      <div className="problem-content">
        <h1>The Problem: Travel is Overwhelming, Generic, and Unsustainable</h1>
        <p>
        Travelers today are bombarded with endless recommendations, making it difficult to decide where to go and what to do. Popular destinations suffer from overcrowding, leading to a loss of authenticity and an unsustainable strain on local communities and the environment. At the same time, destination marketing remains static and generic, failing to offer an interactive or personalized experience. Without a way to truly connect with a place, travel can feel repetitive, uninspiring, and even harmful to the places we visit.
        </p>
        <button className="black-button" onClick={handleStartPlanning}>Join the Waitlist</button>
      </div>
      <div className="problem-image">
        <img src={ProblemImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Problem;
