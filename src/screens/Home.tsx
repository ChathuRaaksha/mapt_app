import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import homeImg from "../assets/img/hero/hero-img.png";
import playIcon from "../assets/img/hero/play.svg";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleStartPlanning = () => {
    console.log("Button clicked");
    navigate('/join-waitlist');
  };
  
  const { t } = useTranslation();
  const handlePlayDemo = () => {
    Swal.fire({
      title: 'Watch Demo',
      html: `
        <iframe width="100%" height="400" 
          src="https://www.youtube.com/embed/Km-_Rt8IQUY?autoplay=1" 
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      width: '80%',
      padding: '0',
    });
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
        <button className="orange-button" onClick={handleStartPlanning}>{t('join_button')}</button>

        <a href="#!" role="button" onClick={handlePlayDemo} className="play-button">
          <span className="btn btn-danger round-btn-lg rounded-circle me-3 danger-btn-shadow">
            <img src={playIcon} width="15" alt="play" />
          </span>
        </a>
        <span className="fw-medium">Play Demo</span>
      </div>
      
      
      <div className="home-image">
        <img src={homeImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Home;
