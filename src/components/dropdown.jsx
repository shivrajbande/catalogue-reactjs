import React, { useState } from "react";
import { Select, MenuItem, } from "@mui/material";

const Dropdown = (props) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);

  const handleChange = props.onChange;
  const items = props.items;
  const MenuProps = {
    PaperProps: {
      sx: {
        "& .MuiMenuItem-root": {
          fontSize: "10px",
        },
      },
    },
  };
  const backGroundColor = props.background;
  return (
    <Select
    value={props.defaultValue || ""}
      onChange={handleChange}
      defaultValue={props.defaultValue}
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
        background: backGroundColor,
        width: "100px",
      }}
      renderValue={(selected) => {
        return selected ? selected : props.placeholder; // Show placeholder if no selection
      }}
      MenuProps={MenuProps}
    >
      {items.map((item, index) => (
        <MenuItem key={index} value={item}>{item}</MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
