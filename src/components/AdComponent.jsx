import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ads = [
  {
    id: 1,
    title: "Iphone-15",
    subTitile: "Best selling Phone at low price",
    descript: `Grab up to 40% Off On Iphone-15`,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
  },
  {
    id: 2,
    title: "Boat Earphones",
    subTitile: "Best selling Phone at low price",
    descript: `Grab up to 10% Off On Boat Earphones`,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
  },
  {
    id: 3,
    title: "Apple iPhone",
    subTitile: "Best selling Phone at low price",
    descript: `Grab up to 80% Off On Apple iPhone`,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
  },
];

function AdComponent() {
  const navigate = useNavigate();
  const navigateToBuy = () => {
    navigate("/checkout");
  };

  // Slick carousel settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Auto-scroll
    autoplaySpeed: 3000, // Speed of auto-scroll
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto", // Center the slider
      }}
    >
      <Slider {...settings}>
        {ads.map((ad) => (
          <Box
            key={ad.id}
            sx={{
              display: "flex !important",
              alignItems: "center",
              flexDirection: "row", // Align children in a row
              padding: "10px",
              justifyContent: "center", // Space between the elements
              background: "#f5f5f5",
              borderRadius: "10px",
              margin: "0 10px",
              height: "300px", // Set height of the container
            }}
          >
            <Box
              sx={{
                flex: 1, // Allow the Box to take the necessary space
                padding: "10px", // Add padding to separate text from image
              }}
            >
              <Typography variant="h5">
                {ad.descript}
              </Typography>
              <Typography >{ad.subTitile}</Typography>
              <Button
                variant="outlined"
                size={"medium"}
                sx={{
                  width: "130px",
                  fontSize: "14px",
                  padding: "6px 4px",
                  borderRadius: "4px",
                  marginTop: "20px",
                  color: "white",
                  borderColor: "black",
                  "&:hover": {
                    backgroundColor: "rgb(2, 48, 32)",
                    color: "white",
                  },
                  background: "rgb(2, 48, 32)",
                }}
                onClick={navigateToBuy}
              >
                Buy Now
              </Button>
            </Box>
            <Box
              sx={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%", // Ensure it takes the full height of the container
                width: "200px", // Set a fixed width for the image container
              }}
            >
              <img
                src={ad.imgSrc}
                alt={ad.title}
                style={{
                  objectFit: "contain",
                  borderRadius: "6px",
                  height: "100%", // Full height of the container
                  width: "auto", // Maintain aspect ratio
                }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default AdComponent;
