import React from "react";
import {
  Box,
  Typography,
  Autocomplete,
  TextField,
  Link,
  InputAdornment,
  Button,
  Badge
} from "@mui/material";
import {
  ShoppingCart,
  Search,
  Person,
  ArrowDropDown,
} from "@mui/icons-material";

function Header() {
  const categories = ["categorey", "Men", "Women", "Boys", "Girls"];
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flex: 1,
          alignItems: "center",
          paddingLeft: "0px",
        }}
      >
        
        <ShoppingCart />
        <Typography variant="h6" sx={{ color: "green", fontWeight: "600" }}>
          ShopCart
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flex: 2,

          alignItems: "center",
        }}
      >
        <Autocomplete
          options={categories} // Your list of categories
          disableClearable
          openOnFocus={false} // Keep the dropdown open when clicked
          autoHighlight={false}
          autoComplete={false}
          popupIcon={<ArrowDropDown />} // Dropdown icon
          multiple={false} // Single select
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard" // Remove borders
              InputProps={{
                ...params.InputProps,
                readOnly: true,
                disableUnderline: true, // Remove underline
                startAdornment: (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ fontSize: "14px" }}>
                      {params.inputProps.value || "Select a category"}
                    </Typography>{" "}
                    {/* Display category text */}
                  </Box>
                ),
                endAdornment: params.InputProps.endAdornment, // Keep dropdown icon on the right
              }}
              sx={{
                "& .MuiInputBase-root": {
                  padding: 0, // Remove padding
                },
                "& .MuiInputBase-input": {
                  fontSize: "14px", // Adjust text size
                  padding: "0px", // Remove padding in the input
                },
              }}
            />
          )}
          onChange={(event, newValue) => {
            // Handle the selection of new value
            console.log(newValue);
          }}
          sx={{
            ".MuiInputBase-root": {
              maxHeight: "30px",
              fontSize: "12px",
              width: "100px",
            },
          }}
        />

        <Link sx={{ color: "black", cursor: "pointer" }} underline="none">
          Deals
        </Link>
        <Link sx={{ color: "black", cursor: "pointer" }} underline="none">
          {" "}
          What's New
        </Link>
        <Link sx={{ color: "black", cursor: "pointer" }} underline="none">
          Delivery
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
              background: "rgb(224, 224, 224)",
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
        <Badge badgeContent={4} sx={{marginLeft : "12px",color:"black",}} color="secondary">
        <ShoppingCart color="black" />
          </Badge>
        {/* <Button startIcon={<ShoppingCart />} color="black" size="small">
          Cart
        </Button> */}
      </Box>

      <Box></Box>
    </Box>
  );
}

export default Header;
