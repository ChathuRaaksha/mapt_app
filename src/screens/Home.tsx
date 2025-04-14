import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import homeImg from "../assets/img/hero/hero-img.png";
import playIcon from "../assets/img/hero/play.svg";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import serviceIcon1 from "../assets/img/category/icon1.png";
import serviceIcon2 from "../assets/img/category/icon2.png";
import serviceIcon3 from "../assets/img/category/icon3.png";
import serviceIcon4 from "../assets/img/category/icon4.png";
import heroBg from "../assets/img/hero/hero-bg.svg";
import shape from "../assets/img/category/shape.svg";
import destinationShape from "../assets/img/dest/shape.svg";
import destination1 from "../assets/img/stockholm.jpg";
import destination2 from "../assets/img/linkoping.jpg";
import destination3 from "../assets/img/malmo.jpg";
import Swal from 'sweetalert2';
import sendIcon from "../assets/img/cta/send.png";
import shapeBg2 from "../assets/img/cta/shape-bg2.png";
import shapeBg1 from "../assets/img/cta/shape-bg1.png";
import mail from "../assets/img/cta/mail.svg";

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
    <>
      {/* First Page Section with Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="home-container home-page"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      >
        <div className="home-content">
          <h1>{t('home_title')}</h1>
          <p>{t('home_description')}</p>
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

      {/* Services Section */}
      <section className="service-section pt-5 pt-md-9" id="service">
        <div className="container">
          <div className="position-absolute start-100 bottom-0 translate-middle-x d-none d-xl-block ms-xl-n4">
            <img src={shape} alt="shape" />
          </div>
          <div className="mb-7 text-center">
            <h5 className="text-secondary">CATEGORY</h5>
            <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">
              We Offer Best Services
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-6">
              <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div className="card-body p-xxl-5 p-4">
                  <img src={serviceIcon1} width="75" alt="Service" />
                  <h4 className="mb-3">Calculated</h4>
                  <p className="mb-0 fw-medium">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div className="card-body p-xxl-5 p-4">
                  <img src={serviceIcon2} width="75" alt="Service" />
                  <h4 className="mb-3">Best Flights</h4>
                  <p className="mb-0 fw-medium">Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div className="card-body p-xxl-5 p-4">
                  <img src={serviceIcon3} width="75" alt="Service" />
                  <h4 className="mb-3">Local Events</h4>
                  <p className="mb-0 fw-medium">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-6">
              <div className="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div className="card-body p-xxl-5 p-4">
                  <img src={serviceIcon4} width="75" alt="Service" />
                  <h4 className="mb-3">Customization</h4>
                  <p className="mb-0 fw-medium">We deliver outsourced aviation services for military customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5" id="destination">
        <div className="container">
          <div className="position-absolute start-100 bottom-0 translate-middle-x d-none d-xl-block ms-xl-n4">
            <img src={destinationShape} alt="destination" />
          </div>
          <div className="mb-7 text-center">
            <h5 className="text-secondary">Popular Destination</h5>
            <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">
              Top Destinations
            </h3>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card overflow-hidden shadow">
                <img className="card-img-top" src={destination1} alt="Rome, Italy" />
                <div className="card-body py-4 px-3">
                  <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                    <h4 className="custom-heading">
                      Stockholm
                    </h4>
                    <h5 className="text-secondary">Vibrant Cities</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="text-secondary">Sweden's cities blend modern sophistication with timeless charm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card overflow-hidden shadow">
                <img className="card-img-top" src={destination2} alt="London, UK" />
                <div className="card-body py-4 px-3">
                  <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                    <h4 className="custom-heading">
                      Linkoping
                    </h4>
                    <h5 className="text-secondary">Explore the Wild</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="text-secondary">Embark on thrilling outdoor interesting adventures in Sweden</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card overflow-hidden shadow">
                <img className="card-img-top" src={destination3} alt="Full Europe" />
                <div className="card-body py-4 px-3">
                  <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                    <h4 className="custom-heading">
                      Malmo
                    </h4>
                    <h5 className="text-secondary">Breathtaking </h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <p className="text-secondary">From rugged coastal cliffs to serene lakeside villages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="subscribe-section container">
          <div className="subscribe-box py-8 px-5 position-relative text-center">
            <div className="position-absolute send-icon">
              <img src={sendIcon} alt="send icon" />
            </div>
            <div className="position-absolute shape-bg-right">
              <img src={shapeBg2} width="264" alt="cta shape" />
            </div>
            <div className="position-absolute shape-bg-left d-none d-sm-block">
              <img src={shapeBg1} alt="cta shape" />
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <h2 className="text-secondary lh-1-7 mb-7">
                  Subscribe to get information, latest news, and other interesting
                  offers about MAPT
                </h2>
                <form className="row g-3 align-items-center w-lg-75 mx-auto">
                  <div className="col-sm">
                    <div className="input-group-icon">
                      <input
                        className="form-control form-little-squirrel-control"
                        type="email"
                        placeholder="Enter email "
                        aria-label="email"
                      />
                      <img
                        className="input-box-icon"
                        src={mail}
                        width="17"
                        alt="mail"
                      />
                    </div>
                  </div>
                  <div className="col-sm-auto">
                    <button className="btn btn-danger orange-gradient-btn fs--1">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Home;
