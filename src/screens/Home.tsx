import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import homeImg from "../assets/img/home_img.png";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Home: React.FC = () => {
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
      className="home-container"
    >
      <div className="home-content">
        <h1>{t('home_title')}</h1>
        <p>
        {t('home_description')}
        </p>
        <button className="black-button"  onClick={handleStartPlanning}> {t('join_button')}</button>
      </div>
      <div className="home-image">
        <img src={homeImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Home;
