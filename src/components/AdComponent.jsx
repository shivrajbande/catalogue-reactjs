import React from "react";
import {
  Box,
  Typography,
  TextField,
  Container,
  Button,
  AutoComplete,
} from "@mui/material";
import { Card, AspectRatio } from "@mui/joy";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function AdComponent() {
  return (
    <Box
      sx={{
        height: "35vh",
        background: "pink",
        borderRadius: "6px",
        padding: "40px",
      }}
    >

      <Card orientation="horizontal" size="sm" variant="outlined" sx={{width : "800px", background : "red",overflowX: 'scroll' }} >
        <Box sx={{ display: "flex" }}>
          <Typography level="title-md">hello</Typography>
          <img
              srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU?h=120&fit=crop&auto=format`}
              alt={"nothing"}
            />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography level="title-md">hello</Typography>
          <img
            srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU?h=120&fit=crop&auto=format&dpr=2 2x`}
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU?h=120&fit=crop&auto=format`}
            alt={"nothing"}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography level="title-md">hello</Typography>
          <img
            srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU?h=120&fit=crop&auto=format&dpr=2 2x`}
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU?h=120&fit=crop&auto=format`}
            alt={"nothing"}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography level="title-md">hello</Typography>
          <img
            srcSet={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU?h=120&fit=crop&auto=format&dpr=2 2x`}
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU?h=120&fit=crop&auto=format`}
            alt={"nothing"}
          />
        </Box>
      </Card>
    </Box>
  );
}

export default AdComponent;
