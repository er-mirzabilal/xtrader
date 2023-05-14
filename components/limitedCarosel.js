import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    id: 1,
    title: "Item 1",
    image: "images/1a-768x768.jpg",
  },
  {
    id: 2,
    title: "Item 2",
    image: "images/1a-768x768.jpg",
  },
  {
    id: 3,
    title: "Item 3",
    image: "images/1a-768x768.jpg",
  },
  {
    id: 4,
    title: "Item 4",
    image: "images/1a-768x768.jpg",
  },
  {
    id: 5,
    title: "Item 5",
    image: "images/1a-768x768.jpg",
  },

  {
    id: 6,
    title: "Item 6",
    image: "images/1a-768x768.jpg",
  },
];
const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
);

const settings = {
  dots: true,
  infinite: true,

  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: false, // Set axis to horizontal
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const LimitedCarousel = () => {
  return (
    <Box sx={{ display: { md: 'block', xs: 'none' } }}>
    <Slider {...settings} >
      
      {items.map((item) => (
        // <div key={item.id}>
        //   <img
        //     width={"100%"}

        //     src={item.image}
        //     alt={item.title}
        //   />
        // </div>

        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-8">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div
                className="mf-banner-large  layout-2 "
                style={{ backgroundColor: "#f8f8f8" }}
              >
                <div
                  className="featured-image"
                  style={{
                    backgroundImage: "url(images/b7.jpg)",
                   
                  }}
                />
                <a className="link-all" href="#" />
                <div className="row banner-row">
                  <div className="col-md-offset-1 col-md-3 col-sm-6 col-xs-12 col-banner-content">
                    <div className="banner-content">
                      <h2 className="box-title">
                        FABRIC BED
                        <br />
                        DISCOUNT <strong className="r-price">25% OFF</strong>
                      </h2>{" "}
                      <p className="desc">
                        Strong mattress support with 10 wood
                        <br />
                        prevents sagging and increases mattress
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 col-banner-price">
                    <div className="banner-price">
                      <span className="sale-price">$260.50</span>{" "}
                      <span className="s-price">$219.05</span>{" "}
                      <a className="link" href="#">
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12 col-xs-12 col-banner-image">
                    <div className="banner-image" />
                  </div>
                </div>
              </div>
              <div className="martfury-empty-space ">
                <div className="mf_empty_space_lg" style={{ height: 30 }} />
                <div className="mf_empty_space_md" style={{ height: 30 }} />
                <div className="mf_empty_space_xs" style={{ height: 30 }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </Box>
  );
};

export default LimitedCarousel;
