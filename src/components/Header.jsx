import React, { useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Link,
  InputAdornment,
  Button,
  Badge,
  useMediaQuery,
} from "@mui/material";
import { ShoppingCart, Search, Person } from "@mui/icons-material";
import { ProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

function Header() {
  const isMobile = useMediaQuery("(max-width:500px)");
  const {
    noOfItemsInCart,
    setNoOfItemsInCart,
    cartList,
    setCartList,
    searchProducts,
  } = useContext(ProductContext);
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
       
      }}
    >
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
      {isMobile === true ? (
        <></>
      ) : (
        <>
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
                  textUnderlineOffset: "4px",
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
                  textUnderlineOffset: "4px",
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
                  textUnderlineOffset: "4px",
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
                  textUnderlineOffset: "4px",
                  textDecoration: "underline", // Add underline on hover
                },
              }}
              href="#"
            >
              Contact Us
            </Link>
          </Box>
        </>
      )}

      <Box
        sx={{
          flex:{xs : 2,lg : 3},
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
            width: {xs :"100%",lg : "90%"},
            ".MuiInputBase-root": {
              maxHeight: "35px",
              fontSize: "12px",
              background: "white",
            },
          }}
        />
      </Box>

      {isMobile ? (
        <></>
      ) : (
        <Box
          sx={{  
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
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
      )}
    </Box>
  );
}

export default Header;
