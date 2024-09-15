import {React,useContext,createContext} from "react";
import { Typography, Box, Select, MenuItem, IconButton } from "@mui/material";
import {
  Grid,
  Card,
  CardOverflow,
  CardContent,
  Divider,
  Button,
} from "@mui/joy";
import { Favorite, Star, StarBorder } from "@mui/icons-material";
import RoundedButton from "../components/RoundedButton";
import { useNavigate } from "react-router-dom";
import {ProductContext} from "../contexts/products";

export default function ProductCard() {
  const navigate = useNavigate();
  const {items} = useContext(ProductContext);

  const getRatings = (ratings) => {
    let totalRatings = 0;
    let weightedSum = 0;
    for (let rate in ratings) {
      totalRatings += ratings[rate];
      weightedSum += rate * ratings[rate];
    }
    const averageRating = (weightedSum / totalRatings).toFixed(2);
    const length = Math.round(averageRating);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= length) {
        stars.push(<Star key={i} sx={{ color: "rgb(2, 48, 32)" }} />);
      } else {
        stars.push(<StarBorder key={i} sx={{ color: "grey" }} />);
      }
    }
    return (
      <Box display={"flex"}>
        {stars}
        <Typography>({totalRatings})</Typography>
      </Box>
    );
  };
  const handleClick = (item) => {
    navigate(`/productInfo/${item.productId}`);
  };
  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      columns={{ xs: 4, sm: 4, md: 12 }}
    >
      {items.map((item, index) => (
        <Grid item key={index}>
          <div onClick={() => handleClick(item)} style={{ cursor: "pointer" }}>
            <Card
              orientation="vertical"
              sx={{ height: "300px", width: "200px" }}
            >
              <CardOverflow>
                <img
                  src={item.images[0]}
                  alt="image"
                  style={{
                    objectFit: "contain",
                    height: "150px",
                    width: "150px",
                    padding: "20px",
                  }}
                />
              </CardOverflow>
              <IconButton
                // onClick={onClick}

                sx={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "white",
                  fontSize: "10px", // Set the desired font size
                  padding: "2px", // Adjust the padding
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                <Favorite sx={{ fontSize: "16px", border: "black" }} />
              </IconButton>
              <CardOverflow>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontSize={"16px"} fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Typography fontSize={"16px"} fontWeight={600}>
                    {item.price}
                  </Typography>
                </Box>
                <Typography
                  fontSize={"12px"}
                  fontWeight={500}
                  sx={{ marginBottom: "6px" }}
                >
                  {item.shortDescript}
                </Typography>
                <Typography
                  fontSize={"16px"}
                  fontWeight={600}
                  sx={{ marginBottom: "14px" }}
                >
                  {getRatings(item.ratings)}
                </Typography>
                <RoundedButton name="Add to Cart" />
              </CardOverflow>
            </Card>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
