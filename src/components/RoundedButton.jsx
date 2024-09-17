import React from "react";
import { Button } from "@mui/joy";

export default function RoundedButton(props) {
  const handleSubmit = () => {

  };
  return (
    <Button
      variant="outlined"
      size={props.size}
      sx={{
        width: props.width,
        fontSize: props.fontSize,
        padding: "6px 4px",
        borderRadius: "20px",
        color: props.color,
        borderColor: "black",
        "&:hover": {
          backgroundColor: "rgb(2, 48, 32)",
          color: "white",
        },
        background: props.background,
      }}
      onClick={props.onClick ? props.onClick : () => console.log('No onClick passed')}
    >
      {props.name}
    </Button>
  );
}
