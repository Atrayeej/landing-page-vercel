import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/home2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Reasons why we are the best
        </h1>
        <p className="primary-text">
        The Social Ants, where our mission is to transform your brand’s journey into an incredible narrative much like the intricate pathways of an ant colony. Like our tiny namesakes, we’re a dedicated team, each with a role crucial to the success of your brand’s story.


        </p>
        <p className="primary-text">
        At The Social Ants, we view every project as an opportunity to emulate the tireless dedication of ants, tirelessly working together towards a common goal.

        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;