// frontend/src/components/About.tsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import TravelImg1 from "../assets/img/aboutus2.png";
import TravelImg2 from "../assets/img/aboutus1.png";
import EstherImg from "../assets/img/esther.png";
import SupunImg from "../assets/img/supun.png";
import { useTranslation } from "react-i18next";
import HeroImage from "../assets/img/hero.png";
const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="about-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
 {/* Hero Section */}
 <section className="hero-section">
        <img src={HeroImage} alt="Travel Girl" className="hero-image" />
        <div className="hero-text">
          <p className="who-we-are">{t("who_we_are")}</p>
          <h1 className="hero-title">{t("discover_team")}</h1>
          <p className="hero-description">{t("intro_text")}</p>
        </div>
      </section>
      {/* ————— Travel Story Block 1 ————— */}
      <motion.section
        className="story-section"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="story-content">
          <div className="story-image">
            <img src={TravelImg1} alt="Your Travel Flow" />
          </div>
          <div className="story-text">
            <h2>{t("story_title1")}</h2>
            <p>{t("story_description1")}</p>
          </div>
        </div>
      </motion.section>

      {/* ————— Travel Story Block 2 ————— */}
      <motion.section
        className="story-section reverse"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="story-content">
          <div className="story-text">
            <h2>{t("story_title2")}</h2>
            <p>{t("story_description2")}</p>
          </div>
          <div className="story-image">
            <img src={TravelImg2} alt="Our Vision & Mission" />
          </div>
        </div>
      </motion.section>

      {/* ————— Section Title ————— */}
      <h1 className="about-title">{t("about_title")}</h1>

      {/* ————— Profile Cards ————— */}
      <motion.div
        className="profile-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {[
          {
            img: EstherImg,
            name: "Esther Cole",
            alt: "Esther Cole",
            role: t("about_designation1"),
            desc: t("about_description1"),
          },
          {
            img: SupunImg,
            name: "Supun Chathuranga",
            alt: "Supun Chathuranga",
            role: t("about_designation2"),
            desc: t("about_description2"),
          },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="profile-card"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={p.img} alt={p.alt} className="profile-img" />
            <h2>{p.name}</h2>
            <h3>{p.role}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
