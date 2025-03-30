import React from "react";
import { motion } from "framer-motion";
import "../styles/Problem.css";
import ProblemImg from "../assets/img/problem.png";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Problem: React.FC = () => {
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
      className="problem-container"
    >
      <div className="problem-content">
        <h1>{t('problem_title')}</h1>
        <p>{t('problem_description')}
       </p>
        <button className="black-button" onClick={handleStartPlanning}>{t('join_button')}</button>
      </div>
      <div className="problem-image">
        <img src={ProblemImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Problem;
