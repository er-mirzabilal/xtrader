import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  slidesToShow: 5,
  slidesToScroll: 4,
  vertical: false, // Set axis to horizontal
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const HorizontalCarousel = () => {
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img width={"80%"} src={item.image} alt={item.title} />
        </div>
      ))}
    </Slider>
  );
};

export default HorizontalCarousel;
