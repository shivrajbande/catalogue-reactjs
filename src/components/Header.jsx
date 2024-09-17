import React, { useContext, useState } from "react";
import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  Link,
  InputAdornment,
  Button,
  Badge,
  Select,
  MenuItem,
} from "@mui/material";
import {
  ShoppingCart,
  Search,
  Person,
  ArrowDropDown,
} from "@mui/icons-material";
import { ProductContext } from "../contexts/products";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/dropdown";

function Header() {
  const categories = ["categorey", "Men", "Women", "Boys", "Girls"];
  const { noOfItemsInCart, setNoOfItemsInCart, cartList, setCartList,searchProducts } =
    useContext(ProductContext);
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cartInfo");
  };
  const navigateToHome = () => {
    navigate("/");
  };

  const handleChange = (event) => {
    // console.log(event.target.value);
    searchProducts(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <div
        onClick={() => navigateToHome()}
        style={{
          display: "flex",
          justifyContent: "start",
          flex: 1,
          alignItems: "center",
          paddingLeft: "0px",
          cursor: "pointer",
        }}
      >
        <ShoppingCart />
        <Typography variant="h6" sx={{ color: "green", fontWeight: "600" }}>
        Pola
        </Typography>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flex: 2,

          alignItems: "center",
        }}
      >
        <Link
          sx={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none", // Remove underline initially
            "&:hover": {
              textUnderlineOffset :"4px",
              textDecoration: "underline", // Add underline on hover
            },
          }}
          href="/"
        >
          Home
        </Link>
        <Link
          sx={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none", // Remove underline initially
            "&:hover": {
              textUnderlineOffset :"4px",
              textDecoration: "underline", // Add underline on hover
            },
          }}
          href="#"
        >
          Shop
        </Link>
        <Link
          sx={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none", // Remove underline initially
            "&:hover": {
              textUnderlineOffset :"4px",
              textDecoration: "underline", // Add underline on hover
            },
          }}
          href="#"
        >
          About Us
        </Link>
        <Link
          sx={{
            color: "black",
            cursor: "pointer",
            textDecoration: "none", // Remove underline initially
            "&:hover": {
              textUnderlineOffset :"4px",
              textDecoration: "underline", // Add underline on hover
            },
          }}
          href="#"
        >
          Contact Us
        </Link>
      </Box>
      <Box
        sx={{
          flex: 2,
          display: "flex",
          justifyContent: "end",
          marginRight: "20px",
        }}
      >
        <TextField
          placeholder="Search..."
          onChange={handleChange}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment>
                  <Search />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            margin: "0px 8px 0px 8px",
            width: "70%",
            ".MuiInputBase-root": {
              maxHeight: "35px",
              fontSize: "12px",
              background: "white",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Person />
        <Button onClick={() => navigateToCart()}>
          <Badge
            badgeContent={noOfItemsInCart}
            sx={{ color: "black" }}
            color="secondary"
          >
            <ShoppingCart color="black" />
          </Badge>
        </Button>
      </Box>

      <Box></Box>
    </Box>
  );
}

export default Header;
