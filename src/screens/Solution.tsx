import React from "react";
import { motion } from "framer-motion";
import "../styles/Solution.css";
import SolutionImg from "../assets/img/solution.png";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Solution: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
        <h1>{t('solution_title')}</h1>
        <p>
        {t('solution_description')}
        </p>
        <button className="black-button" onClick={handleStartPlanning}>{t('join_button')}</button>
      </div>
      <div className="solution-image">
        <img src={SolutionImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Solution;
