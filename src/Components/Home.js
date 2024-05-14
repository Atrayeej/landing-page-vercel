import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/img1.png";
import Navbar from "./Navbar";

import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Unleash Your Brand's Potential: Where Creativity Meets Strategy.
          </h1>
          <p className="primary-text">
          At the Social Ants, we're not just a creative digital marketing and branding agency—we're a bustling colony of passionate individuals dedicated to redefining how brands connect with the world. Like our namesake suggests, we may be small in size, but our collective drive and creativity pack a powerful punch."
          </p>
          <button className="secondary-button">
            Know More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;