import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
        Business is the activity of making one living or making money producing or buying and selling products. Simply put it is any activity or enterprise entered into for profit.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          
"Your branding and marketing efforts resonate with a captivating blend of innovation and pragmatism, forging a path towards tomorrow while laying the foundation for success today. Your ability to blend creative vision with strategic execution is commendable, and it's evident that your approach is resonating with your target audience. Keep up the excellent work!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Benedict Cumberbatch</h2>
      </div>
    </div>
  );
};

export default Testimonial;