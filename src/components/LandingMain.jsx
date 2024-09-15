import React, { useState } from "react";
import { Box, Typography ,} from "@mui/material";
import AdComponent from "../components/AdComponent";
import Dropdown from "../components/dropdown";
import ProductCard from "../components/ProductCard"

function LandingMain() {
  // State for each dropdown
  const [product, setProduct] = useState("All Products");
  const [price, setPrice] = useState("Price");
  const [review, setReview] = useState("Review");
  const [color, setColor] = useState("Color");
  const [material, setMaterial] = useState("Material");
  const [offer, setOffer] = useState("Offer");
  const [filters, setFilters] = useState("AllFilters");
  const [sortBy, setSortBy] = useState("Sort By");

  // Change handler for dropdowns
  const handleDropdownChange = (setter) => (event) => {
    // console.log(setter,event.target.value);
    setter(event.target.value);
  };

  // Items for each dropdown
  const productItems = ["All Products","Shirts", "Pants", "Dresses", "Shoes"];
  const priceItems = ["Price","$0-$50", "$50-$100", "$100-$200", "$200+"];
  const reviewItems = ["Review","4 stars and above", "3 stars and above", "2 stars and above", "1 star and above"];
  const colorItems = ["Color","Red", "Blue", "Green", "Black", "White"];
  const materialItems = ["Material","Cotton", "Polyester", "Silk", "Linen"];
  const offerItems = ["Offer","Discount", "Sale", "Clearance", "Free Shipping"];
  const filtersItems = ["AllFilters","New Arrivals", "Featured", "Best Sellers", "On Sale"];
  const sortByItems = ["Sort By","Popularity", "Price: Low to High", "Price: High to Low", "Customer Rating"];

  return (
    <Box sx={{ margin: "30px 0px", background: "white", height: "100vh" }}>
      <AdComponent />
      <Box sx={{ display: "flex", justifyContent: "space-between", margin: "30px 0px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", width: "60%" }}>
          <Dropdown 
            items={productItems} 
            defaultValue={product} 
            onChange={handleDropdownChange(setProduct)} 
            background="white" 
          />
          <Dropdown 
            items={priceItems} 
            defaultValue={price} 
            onChange={handleDropdownChange(setPrice)} 
            background="white" 
          />
          <Dropdown 
            items={reviewItems} 
            defaultValue={review} 
            onChange={handleDropdownChange(setReview)} 
            background="white" 
          />
          <Dropdown 
            items={colorItems} 
            defaultValue={color} 
            onChange={handleDropdownChange(setColor)} 
            background="white" 
          />
          <Dropdown 
            items={materialItems} 
            defaultValue={material} 
            onChange={handleDropdownChange(setMaterial)} 
            background="white" 
          />
          <Dropdown 
            items={offerItems} 
            defaultValue={offer} 
            onChange={handleDropdownChange(setOffer)} 
            background="white" 
          />
          <Dropdown 
            items={filtersItems} 
            defaultValue={filters} 
            onChange={handleDropdownChange(setFilters)} 
            background="white" 
          />
        </Box>
        <Dropdown 
          items={sortByItems} 
          defaultValue={sortBy} 
          onChange={handleDropdownChange(setSortBy)} 
        />
      </Box>
      <Typography variant="h6" sx ={{margin : "8px ", fontWeight : "600"}}>All Products</Typography>
      <ProductCard/>


      
    </Box>
  );
}

export default LandingMain;