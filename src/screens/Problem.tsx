import React from "react";
import { motion } from "framer-motion";
import "../styles/Problem.css";
import ProblemImg from "../assets/img/prbb.png";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroBg from "../assets/img/hero/hero-bg.svg";
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
        className="problem-container problem-page"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
   
      <div className="problem-content">
        <h1>{t('problem_title')}</h1>
        <p>{t('problem_description')}
       </p>
        <button className="orange-button" onClick={handleStartPlanning}>{t('join_button')}</button>
      </div>
      <div className="problem-image">
        <img src={ProblemImg} alt="Traveler illustration" />
      </div>
    </motion.div>
  );
};

export default Problem;
 
/* 
import React from "react";
import { motion } from "framer-motion";
import "../styles/Problem.css";
import ProblemVideo from "../assets/video/problem-video.mp4";
import { useNavigate } from "react-router-dom";

const Problem: React.FC = () => {
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    navigate("/join-waitlist");
  };

  const problems = [
    {
      title: "🔍 Information Overload",
      desc: `Travelers spend hours jumping between blogs, vlogs, forums, and maps just to plan one trip.`,
      bullets: [
        "📊 On average, travelers visit 38+ websites before booking a trip.",
        "❌ Fragmented experience, no central source",
        "🤯 Confusion from conflicting information"
      ],
    },
    {
      title: "👣 Generic Travel Suggestions",
      desc: `Most apps give one-size-fits-all recommendations that ignore personal preferences.`,
      bullets: [
        "🎭 A solo budget traveler gets luxury family hotel ads",
        "🤖 Lack of smart filtering or personalization",
        "💡 MAPT offers personalized AI suggestions"
      ],
    },
    {
      title: "🎫 Booking Complexity",
      desc: `Booking hotels, trains, and activities across different sites leads to chaos.`,
      bullets: [
        "🧾 Trouble tracking multiple bookings",
        "🔄 Frequent cancellation policy conflicts",
        "💳 Payment and currency confusion"
      ],
    },
    {
      title: "🤖 Lack of Smart Assistance",
      desc: `Travelers want instant answers but most platforms don’t provide real-time help.`,
      bullets: [
        "⌛ Delays in customer service",
        "❓ No dynamic itinerary updates",
        "💬 No AI chatbot or multilingual guide"
      ],
    },
    {
      title: "🗺️ Hard to Visualize the Trip",
      desc: `It’s hard to imagine what the trip will feel like, especially for first-time visitors.`,
      bullets: [
        "😰 Travel anxiety from the unknown",
        "🤔 Fear of wasting money on boring places",
        "📉 Limited immersive previews",
        "🧠 MAPT’s AR & VR travel previews change the game"
      ],
    },
    {
      title: "🧳 Post-COVID Travel Expectations",
      desc: `Travelers want safety, flexibility, and verified local experiences.`,
      bullets: [
        "📍 Need for contactless planning",
        "🛂 Changing entry rules & real-time alerts",
        "🤝 Verified, flexible, local experiences"
      ],
    },
  ];

  return (
    <motion.div
      className="problem-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="problem-content"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Why MAPT Exists</h1>
        <section className="video-section">
          <video
            src={ProblemVideo}
            autoPlay
            loop
            muted
            playsInline
            className="problem-video"
          />
        </section>
        <p>
          Travel today is broken. From scattered information to impersonal suggestions and complex booking — it's exhausting. Here’s what travelers face:
        </p>

        <div className="problem-list-grid">
          {problems.map((item, index) => (
            <motion.div
              className="problem-box"
              key={index}
              initial={{ y: 50 * (index + 1), opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <ul>
                {item.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="problem-cta"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2>MAPT exists because travel should be smart, seamless, and made for you — not the crowd.</h2>
          <button className="black-button" onClick={handleStartPlanning}>
            See How We Solve It →
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Problem; */