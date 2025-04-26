import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Solution.css";
import SolutionImg from "../assets/img/whymapt.png";
import welcomeVideo from '../assets/video/solution1.mp4';

const Solution: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleJoinWaitlist = () => {
    navigate('/join-waitlist');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="solution-wrapper"
    >
      {/* Top Section */}
      <div className="solution-top">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="solution-text"
        >
          <h1>{t('solution_title')}</h1>
          <p>{t('solution_description')}</p>
          <button className="orange-button" onClick={handleJoinWaitlist}>
            {t('join_button')}
          </button>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="solution-image"
        >
          <img src={SolutionImg} alt="Traveler illustration" />
        </motion.div>
      </div>

      {/* Video Section */}
      <motion.section
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="video-section"
      >
        <motion.video
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src={welcomeVideo}
          autoPlay
          loop
          muted
          playsInline
          className="solutions-video"
        />
      </motion.section>


     

    {/* For Travelers Section */}
<motion.section
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="info-section travelers"
>
  <div className="info-content">
    <div className="info-image">
      <img src={require('../assets/img/sol1.png')} alt="Travelers" />
    </div>
    <div className="info-text">
      <h3>{t('for_travelers_title')}</h3>
      <p>{t('for_travelers_description')}</p>
    </div>
  </div>
</motion.section>

{/* For Destinations Section */}
<motion.section
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="info-section destinations"
>
  <div className="info-content reverse">
    <div className="info-image">
      <img src={require('../assets/img/sol2.png')} alt="Destinations" />
    </div>
    <div className="info-text">
      <h3>{t('for_destinations_title')}</h3>
      <p>{t('for_destinations_description')}</p>
      <ul className="destination-benefits">
        <li>{t('destination_benefit1')}</li>
        <li>{t('destination_benefit2')}</li>
        <li>{t('destination_benefit3')}</li>
        <li>{t('destination_benefit4')}</li>
      </ul>
      <button className="orange-button" onClick={() => navigate('/join-waitlist')}>
        {t('get_in_touch_button')}
      </button>
    </div>
  </div>
</motion.section>
    </motion.div>
  );
};

export default Solution;
