import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "360px",
  color: "#fff",
  textAlign: "center",
  background: "#FDFDFD",
};

const CarouselM = () => (
  <div className="CarouselFeeds" data-aos="fade-up">
    <p style={{ fontSize: "28px", marginLeft: "480px" }}>Some of our past clients</p>
    <Carousel autoplay>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
            ""I had a great experience working with this law firm. They were responsive, efficient, and delivered results beyond my expectations. I would definitely use them again in the future and recommend them to anyone in need of legal services.""
          </p>
          <h6>- Shashikant Tiwari </h6>
        </div>
      </div>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
          I was facing a complex legal issue and was extremely stressed out about it. However, this law firm put me at ease and walked me through every step of the process. Their expertise and guidance were invaluable and I couldn't be more grateful for their help."
          </p>
          <h6>- Arjun Upadhyay</h6>
        </div>
      </div>
      <div style={contentStyle}>
        <div className="FeebackBox">
          <p>
            "This law firm was a game-changer for me. They were able to navigate the complexities of my case with ease and provided me with the best possible outcome. I am so thankful for their hard work and dedication."
          </p>
          <h6>- Anjali Singh</h6>
        </div>
      </div>
    </Carousel>
  </div>
);

export default CarouselM;
