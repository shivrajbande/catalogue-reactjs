import React from "react";
import { Box, Typography,Button } from "@mui/material";
import { Card } from "@mui/joy";
import { useNavigate } from "react-router-dom";

const ads = [
  {
    id: 1,
    title: "Iphone-15",
    subTitile : "Best  selling Phone at low price",
    descript:`Grab upto 40% Off On Iphone-15`,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
  },
  {
    id: 2,
    title: "Boat Earphones",
    subTitile : "Best  selling  Phone at low price",
    descript:`Grab upto 10% Off On Boat Earphones`,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
  },
  {
    id: 3,
    title: "Apple iPhone",
    subTitile : "Best  selling Phone at low price",
    descript:`Grab upto 80% Off On Apple iPhone`,
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
  },
];

function AdComponent() {
  const navigate = useNavigate();
  const navigateToBuy=()=>{
    navigate("/checkout");
  }

  return (
    <Box
      sx={{
        height: "40vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          animation: "scroll 10s linear finite", // Animation for auto-scrolling
          whiteSpace: "nowrap", // Prevent line breaks
        }}
      >
        {ads.map((ad) => (
          <Box
            key={ad.id}
            sx={{
              marginRight: "20px",
              minWidth: "65%",
              border: "1px solid grey",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              justifyContent: "space-evenly",
          
            }}
          >
            <Box sx={{}}>
              <Typography variant="h5" align="start">
                {ad.descript}
              </Typography>
              <Typography align="start">
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
                marginTop:"20px",
                color: "white",
                borderColor: "black",
                "&:hover": {
                  backgroundColor: "rgb(2, 48, 32)",
                  color: "white",
                },
                background: "rgb(2, 48, 32)",
              }}
              onClick={() => {navigateToBuy()}}
            >
              Buy Now
            </Button>
            </Box>
          <Box sx={{  
                height: "250px",

              
                }}>
          <img
              src={ad.imgSrc}
              alt={ad.title}
              style={{
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />
          </Box>
          </Box>
        ))}
      </Box>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Box>
  );
}

export default AdComponent;
