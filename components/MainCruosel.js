import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Electronics } from "./Data/ConsumerElectronicsdata";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";
import { useState } from "react";
import { Box, IconButton, Rating, Typography } from "@mui/material";
import Link from "next/link";

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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouse2Enter = (index) => {
    setHoveredIndex(null);
  };

  const handleMouse2Leave = () => {
    setHoveredIndex(null);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <Slider {...settings}>
      {/* {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img width={"80%"} src={item.image} alt={item.title} />
        </div>
       
      ))} */}

      {Electronics.map((item, index) => (
        <Box sx={{ display: "flex", gap: 2, overflow: "auto", marginTop: 3 }}>
          <Box
            onMouseEnter={() => handleMouse2Leave(index)}
            onMouseLeave={handleMouse2Enter}
            sx={{ width: 220 }}
          >
            <Box
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                position: "relative",
                width: 200,
                paddingX: 3,
                ":hover": { border: "1px solid black" },
                paddingTop: 2,
              }}
            >
              <Link href={"/"}>
                {" "}
                <img width={"98%"} src={item.Image} alt="image of products" />
              </Link>
              {hoveredIndex === index && (
                <Box onMouseEnter={() => handleMouseEnter(index)}>
                  <Box
                    sx={{
                      position: "relative",
                      bottom: 80,
                      width: "100%",
                      height: 60,
                      backgroundColor: "white",
                      paddingY: 2,
                      display: "flex",
                      justifyContent: "space-betwwen",
                      paddingLeft: 1,
                    }}
                  >
                    <IconButton
                      sx={{
                        width: 40,
                        height: 40,
                        ":hover": { backgroundColor: "#fcb800" },
                      }}
                    >
                      <ShoppingBagOutlinedIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        width: 40,
                        height: 40,
                        ":hover": { backgroundColor: "#fcb800" },
                        marginLeft: 0.7,
                      }}
                    >
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        width: 40,
                        height: 40,
                        ":hover": { backgroundColor: "#fcb800" },
                        marginLeft: 0.7,
                      }}
                    >
                      <FavoriteBorderOutlinedIcon />
                    </IconButton>
                    <IconButton
                      sx={{
                        width: 40,
                        height: 40,
                        ":hover": { backgroundColor: "#fcb800" },
                        marginLeft: 0.7,
                      }}
                    >
                      <AddchartOutlinedIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ marginTop: -10, paddingBottom: 3 }}>
                    <Typography>{item.Type}</Typography>
                    <Box
                      sx={{ display: "flex", marginTop: 1, marginLeft: -0.5 }}
                    >
                      <Rating
                        sx={{ fontSize: 16 }}
                        name="read-only"
                        value={5}
                        readOnly
                      />
                      <Typography sx={{ fontSize: 13, marginLeft: 1 }}>
                        {item.StarRating}
                      </Typography>
                    </Box>
                    <Typography sx={{ color: "black", fontSize: 17 }}>
                      ${item.Price}
                    </Typography>
                  </Box>
                </Box>
              )}
              {hoveredIndex === index ? null : (
                <Box sx={{ marginTop: 1.5, paddingBottom: 3 }}>
                  <Typography>{item.Type}</Typography>
                  <Box sx={{ display: "flex", marginTop: 1, marginLeft: -0.5 }}>
                    <Rating
                      sx={{ fontSize: 16 }}
                      name="read-only"
                      value={5}
                      readOnly
                    />
                    <Typography sx={{ fontSize: 13, marginLeft: 1 }}>
                      {item.StarRating}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: "black", fontSize: 17 }}>
                    ${item.Price}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default HorizontalCarousel;
