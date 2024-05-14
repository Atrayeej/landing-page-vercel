import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "BRANDING & MARKETING",
      text: "Turning Ideas into Brands, and Brands into Legends.",
    },
    {
      image: ChooseMeals,
      title: "DESIGN & DEVELOPMENT",
      text: "designing tomorrow building today! ",
    },
    {
      image: DeliveryMeals,
      title: "SOCIAL MEDIA MARKETING & CREATIVE VIDEOGRAPHY",
      text: "Crafting Social Stories, Framing Creative Visions",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Our Narrative</h1>
        <p className="primary-text">
        The architectural visionary behind the narrative of a brand, crafting its identity and orchestrating its resonance within the cultural tapestry. Through a meticulously curated blend of strategic insight, creative ingenuity, and market intuition, these firms breathe life into brands, endowing them with charisma, relevance, and enduring impact. We are the alchemists of perception, sculpting identities that resonate deeply with target audiences while ingeniously navigating the ever-evolving landscape of consumer behavior. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;