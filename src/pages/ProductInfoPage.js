import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../contexts/products";
import { Box } from "@mui/material";
import Header from "../components/Header";

function ProductInfoPage() {
  // const item = props.

  const { productId } = useParams();
  const [id, setProductId] = useState(productId);
  const [currentItem, setcurrentItem] = useState({});
  const { getItem } = useContext(ProductContext);
  const item = getItem(productId);

  return <Box>
    <Header/>
  </Box>;
}

export default ProductInfoPage;
