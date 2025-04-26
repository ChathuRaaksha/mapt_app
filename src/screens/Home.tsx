import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import homeImg from "../assets/img/hero/hero-img.png";
import playIcon from "../assets/img/hero/play.svg";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroBg from "../assets/img/hero/hero-bg.svg";
import Swal from 'sweetalert2';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStartPlanning = () => {
    navigate('/join-waitlist');
  };

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
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    >
      <div className="home-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('home_title')}
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {t('home_description')}
        </motion.p>

        <motion.button
          className="orange-button"
          onClick={handleStartPlanning}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('join_button')}
        </motion.button>

        <motion.a
          href="#!"
          role="button"
          onClick={handlePlayDemo}
          className="play-button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="btn btn-danger round-btn-lg rounded-circle me-3 danger-btn-shadow">
            <img src={playIcon} width="15" alt="play" />
          </span>
        </motion.a>

        <span className="fw-medium">Play Demo</span>
      </div>

      <motion.div
        className="home-image"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={homeImg} alt="Traveler illustration" />
      </motion.div>
    </motion.div>
  );
};

export default Home;
