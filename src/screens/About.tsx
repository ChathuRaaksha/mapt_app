import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import EstherImg from "../assets/img/esterr.png";
import SupunImg from "../assets/img/supun-.png";
import { useTranslation } from 'react-i18next';
const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-container"
    >
      <h1 className="title">  {t('about_title')}</h1>

      <div className="profile-grid">
        {/* Esther Cole */}
        <div className="profile-card">
          <img src={EstherImg} alt="Esther Cole" className="profile-img" />
          <h2>Esther Cole</h2>
          <h3> {t('about_designation1')}</h3>
          <p>
            {t('about_description1')}
          </p>
        </div>

        {/* Supun Chatranga */}
        <div className="profile-card">
          <img src={SupunImg} alt="Supun Chathuranga" className="profile-img" />
          <h2>Supun Chathuranga</h2>
          <h3>{t('about_designation2')}</h3>
          <p>
            {t('about_description2')}  </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
