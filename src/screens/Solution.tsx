/* // frontend/src/screens/Solution.tsx
import React from 'react';
import '../styles/Solution.css';

const Solution: React.FC = () => {
  return (
    <div className="solution-container">
      <h1 className="display-4">The Solution: Personalized & Responsible Travel, Just for You</h1>
      <p className="lead">
        Mapt offers AI-powered recommendations tailored to users' interests and travel styles. Whether one seeks adventure, enjoys food, or prefers cultural experiences, Mapt curates activities that align with these preferences while promoting responsible tourism. The platform highlights lesser-known experiences, supports local businesses, and encourages eco-friendly travel choices to help reduce over-tourism and environmental impact. Additionally, Mapt provides an interactive aspect to travel, enabling users to engage with destinations in new ways.
      </p>
    </div>
  );
};

export default Solution;
 */

import React from "react";
import { motion } from "framer-motion";
import "../styles/Solution.css";
import SolutionImg from "../assets/img/solution.png";
import { useNavigate } from 'react-router-dom';
const Solution: React.FC = () => {
  const navigate = useNavigate();
  const handleStartPlanning = () => {
    navigate('/join-waitlist');
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="solution-container"
    >
      <div className="solution-content">
        <h1>The Solution: Personalized & Responsible Travel, Just for You</h1>
        <p>
        Mapt offers AI-powered recommendations tailored to users' interests and travel styles. Whether one seeks adventure, enjoys food, or prefers cultural experiences, Mapt curates activities that align with these preferences while promoting responsible tourism. The platform highlights lesser-known experiences, supports local businesses, and encourages eco-friendly travel choices to help reduce over-tourism and environmental impact. Additionally, Mapt provides an interactive aspect to travel, enabling users to engage with destinations in new ways.
        </p>
        <button className="black-button" onClick={handleStartPlanning}>Join the Waitlist</button>
      </div>
      <div className="solution-image">
        <img src={SolutionImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Solution;
