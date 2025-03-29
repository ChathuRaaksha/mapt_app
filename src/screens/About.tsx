import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import EstherImg from "../assets/img/esterr.png";
import SupunImg from "../assets/img/supun-.png";

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about-container"
    >
      <h1 className="title">The masterminds behind Mapt!</h1>

      <div className="profile-grid">
        {/* Esther Cole */}
        <div className="profile-card">
          <img src={EstherImg} alt="Esther Cole" className="profile-img" />
          <h2>Esther Cole</h2>
          <h3>CEO and Co-founder</h3>
          <p>
          Esther has a BA and MSc in tourism development and an MSc in marketing. She specializes in tourism product design and development, aiming to create memorable travel experiences while promoting sustainability. As a leader at Mapt, she ensures the company meets modern travelers' needs and fosters inclusivity and environmental consciousness, positioning Mapt as a positive force in travel.
          </p>
        </div>

        {/* Supun Chatranga */}
        <div className="profile-card">
          <img src={SupunImg} alt="Supun Chatranga" className="profile-img" />
          <h2>Supun Chatranga</h2>
          <h3>CTO and Co-founder</h3>
          <p>
          Supun is an experienced software developer specializing in building scalable systems for the travel industry. He is passionate about leveraging technology to enhance user experiences and streamline operations. He holds a Master’s degree in Computer Science, a Master’s in Strategic Information Systems Management, and a BSc in Information Technology. He is also a Professional Member of the British Computer Society (MBCS), UK.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
