import React from "react";
import { motion } from "framer-motion";
import "../styles/Problem.css";
import ProblemImg from "../assets/img/howit.png";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-parallax-tilt';

const Problem: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStartPlanning = () => {
    navigate('/join-waitlist');
  };

  // Define the sequence of steps using translation keys
  const steps = [
    t('step1'),
    t('step2'),
    t('step3'),
    t('step4'),
  ];

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="problem-container problem-page"
    >
      <div className="problem-content">
        <h1>{t('problem_title')}</h1>
        <p>{t('problem_description')}</p>

        {/* Animated steps section */}
        <motion.div
          className="steps-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, staggerChildren: 0.2 }}
        >
          <motion.p
            className="steps-intro"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('steps_intro')}
          </motion.p>

          {steps.map((text, idx) => (
            <motion.p
              key={idx}
              className="step-item"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            className="steps-outro"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + steps.length * 0.2 }}
          >
            {t('steps_outro')}
          </motion.p>
        </motion.div>

        <button className="orange-button" onClick={handleStartPlanning}>
          {t('join_button')}
        </button>
      </div>

      <Tilt
  glareEnable={true}
  glareMaxOpacity={0.45}
  scale={1.05}
  transitionSpeed={2500}
  tiltMaxAngleX={15}
  tiltMaxAngleY={15}
>
  <div className="problem-image">
    <img src={ProblemImg} alt="Traveler illustration" />
  </div>
</Tilt>
    </motion.div>
 
  );
};

export default Problem;