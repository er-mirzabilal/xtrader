import React from "react";
import Slider from "react-slick";

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    prevArrow: <div className="slick-arrow slick-prev">rere</div>, // Use default prev arrow component
    nextArrow: <div className="slick-arrow slick-next">rerere</div>, //
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
