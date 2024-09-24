import React, { useContext } from "react";
import { Typography, Box, IconButton, Grid } from "@mui/material";
import { Card, CardOverflow } from "@mui/joy";
import { CurrencyRupee } from "@mui/icons-material";
import RoundedButton from "../components/RoundedButton";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import getRatings from "../components/ProductRatings";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard() {
  const navigate = useNavigate();
  const { items, cartList, setCartList, noOfItemsInCart, setNoOfItemsInCart } =
    useContext(ProductContext);

  const addProductToCart = (productId) => {
    const productInfo = {
      id: productId,
      quantity: 1,
    };
    setNoOfItemsInCart(noOfItemsInCart + 1);
    setCartList((cartList) => [...cartList, productInfo]);
    notify(); // Show notification
  };

  const notify = () => {
    toast.success("Successfully added item to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
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
            <Card orientation="vertical" sx={{ height: "300px", width: "200px" }}>
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
              <CardOverflow>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography fontSize={"16px"} fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Box display={"flex"} alignItems={"center"} sx={{ fontSize: "16px" }}>
                    <CurrencyRupee sx={{ fontSize: "14px" }} />
                    {item.price}
                  </Box>
                </Box>
                <Typography fontSize={"12px"} fontWeight={500} sx={{ marginBottom: "6px" }}>
                  {item.shortDescript}
                </Typography>
                <Typography fontSize={"16px"} fontWeight={600} sx={{ marginBottom: "14px" }}>
                  {getRatings(item.ratings)}
                </Typography>
                <RoundedButton
                  name="Add to Cart"
                  background="white"
                  color="rgb(2, 48, 32)"
                  size="small"
                  width="85px"
                  fontSize="10px"
                  onClick={(e) => {
                    e.stopPropagation();
                    addProductToCart(item.productId);
                  }}
                />
              </CardOverflow>
            </Card>
          </div>
        </Grid>
      ))}
      
      {/* Move ToastContainer outside of the map */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </Grid>
  );
}