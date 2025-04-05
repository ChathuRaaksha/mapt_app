import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import homeImg from "../assets/img/hero/hero-img.png";
//import playIcon from "../assets/img/hero/play.svg";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleStartPlanning = () => {
    console.log("Button clicked");
    navigate('/join-waitlist');
  };
  
  const { t } = useTranslation();
 
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
        <button className="orange-button" onClick={handleStartPlanning}>{t('join_button')}</button>


      </div>
      
      <div className="home-image">
        <img src={homeImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Home;
