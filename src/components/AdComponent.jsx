import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";

const ads = [
  {
    id: 1,
    title: "Iphone-15",
    subTitile: "Best selling Phone at low price",
    descript: `Grab up to 40% Off On Iphone-15`,
    price: 78999,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
  },
  {
    id: 2,
    title: "Boat Earphones",
    subTitile: "Best selling Phone at low price",
    descript: `Grab up to 10% Off On Boat Earphones`,
    price: 1399,
    imgSrc: "https://m.media-amazon.com/images/I/51yYK4RGtLL.jpg",
  },
  {
    id: 3,
    title: "Hp-2489",
    subTitile: "Best Laptop at lowest price",
    descript: `Grab up to 80% Off On Hp-Laptop`,
    price: 49999,
    imgSrc:
      "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg",
  },
];

function AdComponent() {
  const navigate = useNavigate();
  const { setTotalPrice } = useContext(ProductContext);
  const navigateToBuy = (itemPrice) => {
    const productId = "5452-3442-1344";
    setTotalPrice(itemPrice);
    navigate(`/checkout/${productId}`);
  };

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
              flexDirection: "row",
              padding: "10px",
              justifyContent: "center",
              background: "#f5f5f5",
              borderRadius: "10px",
              marginLeft: { lg: "80px", xs: "10px" },
              marginRight: "10px",
              height: { lg: "300px", xs: "200px" },
            }}
          >
            <Box
              sx={{
                flex: 1, // Allow the Box to take the necessary space
                padding: "10px", // Add padding to separate text from image
              }}
            >
              <Typography sx={{ fontSize: { xs: "16px", lg: "30px" } }}>
                {ad.descript}
              </Typography>
              <Typography sx={{ fontSize: { xs: "12px", lg: "30px" } }}>
                {ad.subTitile}
              </Typography>
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
                onClick={() => navigateToBuy(ad.price)}
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
                height: "100%",
                width: { xs: "20px", lg: "200px" },
              }}
            >
              <img
                src={ad.imgSrc}
                alt={ad.title}
                style={{
                  objectFit: "contain",
                  borderRadius: "6px",
                  width: "80%", // Full height of the container
                  height: "90%", // Maintain aspect ratio
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
