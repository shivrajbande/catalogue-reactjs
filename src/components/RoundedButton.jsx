import React from "react";
import { Button } from "@mui/joy";

export default function RoundedButton(props) {
  return (
    <Button
      variant="outlined"
      size="small"
      sx={{
        width: "85px",
        fontSize: "10px",
        padding: "6px 4px",
        borderRadius: "20px",
        color: "black",
        borderColor: "black",
        "&:hover": {
          backgroundColor: "rgb(2, 48, 32)",
          color:"white"
        },
      }}

    >
      {props.name}
    </Button>
  );
}
