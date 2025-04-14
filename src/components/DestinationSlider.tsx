import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick"; 
// Slider settings
const sliderSettings = {
  dots: true,  // Enable dots for navigation
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

interface Destination {
  image: string;
  name: string;
  country: string;
  price: string;
  days: string;
}

interface DestinationSliderProps {
  destinations: Destination[];
}

const DestinationSlider: React.FC<DestinationSliderProps> = ({ destinations }) => {
  return (
    <Slider {...sliderSettings}>
      {destinations.map((destination, index) => (
        <div key={index}>
          <div className="card overflow-hidden shadow">
            <img className="card-img-top" src={destination.image} alt={destination.name} />
            <div className="card-body py-4 px-3">
              <div className="d-flex flex-column flex-lg-row justify-content-between mb-3">
                <h4 className="text-secondary fw-medium">
                  <a className="link-900 text-decoration-none stretched-link" href="#!">
                    {destination.name}, {destination.country}
                  </a>
                </h4>
                <span className="fs-1 fw-medium">{destination.price}</span>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: "14px" }} width="20" />
                <span className="fs-0 fw-medium">{destination.days} Days Trip</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default DestinationSlider;
