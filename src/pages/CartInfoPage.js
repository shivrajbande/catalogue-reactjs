import React from "react";
import Header from "../components/Header";
import {
  Box,
  Divider,
  Typography,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { Card, CardOverflow } from "@mui/joy";

import { useContext } from "react";
import { ProductContext } from "../contexts/products";
import getRatings from "../components/ProductRatings";
import { CurrencyRupee, Delete, WatchLater, Share } from "@mui/icons-material";
import Dropdown from "../components/dropdown";
import { useNavigate } from "react-router-dom";

export default function CartInfoPage() {
  const { cartList, getItem,setCartList, noOfItemsInCart,
    setNoOfItemsInCart, } = useContext(ProductContext);
  const navigate = useNavigate();
  let items = [];
  cartList.forEach((productObj) => {
    var item = getItem(productObj.id);
    var quantity = productObj.quantity;
    item['quantity'] = quantity;
    items.push(item);
  });
  var quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const getItemWithPrice = () => {
    var result = [];
    let totalPrice = 0;
    items.map((item) => {
      totalPrice += parseInt(item.price, 10);
      result.push(
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          <Typography>{item.name}</Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            sx={{
              fontSize: "16px",
            }}
          >
            <CurrencyRupee sx={{ fontSize: "14px" }} />
            {item.price}
          </Box>
        </Box>
      );
    });
    let temp = (
      <Box>
        {result}
        <Divider sx={{ margin: "5px 0px" }} />
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography>Total Amout:</Typography>
          <Box display={"flex"} alignItems={"center"}>
            <CurrencyRupee sx={{ fontSize: "18px", fontWeight: "800" }} />
            <Typography sx={{ fontWeight: "800" }}>{totalPrice}</Typography>
          </Box>
        </Box>
      </Box>
    );
    return temp;
  };

  const navigateToBuy=()=>{
    navigate("/checkout");
  }

  const deleteThisItem=(productId)=>{

    setCartList((cartList)=>{
      return cartList.filter(product=>product.id != productId);
    })
    setNoOfItemsInCart((noOfItemsInCart)=>noOfItemsInCart-1);

  }
  return (
    <>
      <Header />
      <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
      <Box display={"flex"} height={"80vh"}>
        <Box
          flex={3}
          sx={{
            paddingLeft: "20px",
            paddingTop: "10px",
            paddingRight: "20px",
          }}
        >
          <Typography variant="h6" fontWeight={"600"}>
            Shopping Cart
          </Typography>
          {items.map((item, index) => (
            <Card sx={{ margin: "10px 0px" }}>
              <CardOverflow>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <Box sx={{ flex: "1" }}>
                    <img
                      src={item.images[0]}
                      height={"200px"}
                      width={"200px"}
                    />
                  </Box>
                  <Box sx={{ flex: "3", marginLeft: "30px" }}>
                    <Typography variant="h6" fontWeight={600}>
                      {item.name}
                    </Typography>
                    <Typography fontWeight={500}>
                      {item.longDescript}
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                      {getRatings(item.ratings)}
                    </Typography>
                    <Box
                      display={"flex"}
                      justifyContent={"start"}
                      alignItems={"center"}
                      sx={{
                        marginTop: "10px",
                        fontWeight: "600",
                        fontSize: "20px",
                        marginBottom: "20px",
                      }}
                    >
                      <CurrencyRupee sx={{ fontSize: "18px" }} />
                      {item.price}
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"start"}
                      alignItems={"center"}
                    >
                      <Typography>
                        Qty: {""}
                        <Select
                          value={item.quantity || ""}
                          // onChange={handleChange}
                          defaultValue={item.quantity}
                          sx={{
                            borderRadius: "100px",
                            height: "30px",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "black",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "black",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "black",
                            },
                            fontSize: "12px",
                            background: "white",
                            width: "60px",
                            color:"black"
                          }}
                          // renderValue={(selected) => {
                          //   return selected ? selected : props.placeholder; // Show placeholder if no selection
                          // }}
                          MenuProps={quantity}
                        >
                          {quantity.map((item, index) => (
                            <MenuItem key={index} value={item}>
                              {item}
                            </MenuItem>
                          ))}
                        </Select>
                      </Typography>
                      <Typography sx={{ fontSize: "25px", margin: "0px 10px" }}>
                        |
                      </Typography>
                      <div
                      onClick={()=>deleteThisItem(item.productId)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Delete sx={{ fontSize: "18px", marginRight: "4px" }} />
                        <Typography>Delete</Typography>
                      </div>
                      <Typography sx={{ fontSize: "25px", margin: "0px 10px" }}>
                        |
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <WatchLater
                          sx={{ fontSize: "18px", marginRight: "4px" }}
                        />
                        <Typography>Save for Later</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "25px", margin: "0px 10px" }}>
                        |
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Share sx={{ fontSize: "18px", marginRight: "4px" }} />
                        <Typography>Share</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardOverflow>
            </Card>
          ))}
        </Box>
        <Box
          flex={1}
          sx={{
            paddingLeft: "20px",
            paddingTop: "10px",
            paddingRight: "20px",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{ marginBottom: "10px" }}
          >
            <Typography variant="h6" fontWeight={"600"}>
              Cart Info
            </Typography>
            <Button
              variant="outlined"
              size={"small"}
              sx={{
                width: "130px",
                fontSize: "10px",
                padding: "6px 4px",
                borderRadius: "10px",
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
              Proceed to Buy
            </Button>
          </Box>
          <Card sx={{ marginTop: "2px", marginBottom: "20px" }}>
            {getItemWithPrice()}
          </Card>
          <Typography variant="h6" fontWeight={"600"}>
            Delivery Address
          </Typography>
          <Card sx={{ marginTop: "2px" ,padding:"10px 4px"}}>
            <CardOverflow>
              <Typography
                fontSize={"14px"}
                sx={{ padding: "0px", margin: "0px" }}
              >
                Name :
              </Typography>
              <Typography
                fontWeight={600}
                sx={{ marginBottom: "10px" }}
              >
                Shivraj Bande
              </Typography>
              <Typography fontSize={"14px"}>Phone Number :</Typography>
              <Typography fontWeight={600} sx={{ marginBottom: "10px" }}>7995646061</Typography>
              <Typography fontSize={"14px"}>Address</Typography>
              <Typography fontWeight={600} sx={{ marginBottom: "10px" }}>
                3-68, Hitec-city,Hyderabad. 500081
              </Typography>
            </CardOverflow>
          </Card>
        </Box>
      </Box>
    </>
  );
}
