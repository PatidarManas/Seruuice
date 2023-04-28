import React from "react";
import "./Services.scss";
import p1 from "../img/1.png"
import p2 from "../img/2.png"
import p3 from "../img/3.png"
const Services = () => {
  return (
    <div className="services">
      <h1 id="service" >Services</h1>
      <div className="box">
        <div className="box1">
          <div className="img">
            <img src={p1} alt="" />
          </div>
          <div className="text">
            <div className="l1">Website Design and Development</div>
            <div className="l2">
            With our team of full stack web developer experts, you can expect to receive a website that takes your business to new heights. A full stack developer is a versatile professional who can handle every aspect of web development, from front-end to back-end and everything in between. This means that they can design, develop, and implement a website that is not only visually appealing but also functional and user-friendly.
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="img">
          <img src={p2} alt="" />
          </div>
          <div className="text">
            <div className="l1">Video Editing</div>
            <div className="l2">
            Our team of video editing experts can help take your YouTube channel, reels, or short videos to the next level. We understand that video content is a powerful marketing tool that can help promote your brand, engage your audience, and increase your reach. Therefore, we work with you to understand your vision and bring it to life through creative editing techniques.
            </div>
          </div>
        </div>
        <div className="box1">
          <div className="img">
          <img src={p3} alt="" />
          </div>
          <div className="text">
            <div className="l1">Thumbnail designing</div>
            <div className="l2">
            In the competitive world of digital media, creating visually appealing and attention-grabbing thumbnails is essential to increase engagement and viewership. However, designing thumbnails that stand out and effectively convey the message of your content can be a challenging task, especially if you lack the necessary design skills. This is where our thumbnail designing services can help.
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
