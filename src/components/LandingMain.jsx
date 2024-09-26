import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AdComponent from "../components/AdComponent";
import Dropdown from "../components/dropdown";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";
import Footer from "../components/Footer"

function LandingMain() {
  const {
    sortItems,
    categoryType,
    setCategoryType,
    ratingsType,
    setRatingType,
    priceType,
    setPriceType,
  } = useContext(ProductContext);
  // State for each dropdown
  // const [product, setProduct] = useState("Categories");
  // const [price, setPrice] = useState("All Prices");
  // const [rating, setRating] = useState("All Ratings");

  const [sortBy, setSortBy] = useState("Sort By");

  // Change handler for dropdowns
  const handleDropdownChange = (setter, type) => (event) => {
    // console.log(setter,event.target.value);
    // setter(event.target.value);

    if (type === "Category") {
      setCategoryType(event.target.value);
    } else if (type === "Price") {
      setPriceType(event.target.value);
    } else {
      setRatingType(event.target.value);
    }
  };
  // Inside ProductContext or the component where your state is defined
  useEffect(() => {
    sortItems("Category", categoryType);
  }, [categoryType]);

  useEffect(() => {
    sortItems("Price", priceType);
  }, [priceType]);

  useEffect(() => {
    sortItems("Rating", ratingsType);
  }, [ratingsType]);

  // Items for each dropdown
  const productItems = [
    "Categories",
    "Ear Phones",
    "Mobile Phones",
    "Laptop",
    "Television",
  ];
  const priceItems = [
    "All Prices",
    "500-1000",
    "1001-2000",
    "2001-3001",
    "3000+",
  ];
  const reviewItems = [
    "All Ratings",
    "4 stars and above",
    "3 stars and above",
    "2 stars and above",
    "1 star and above",
  ];
  const colorItems = ["Color", "Red", "Blue", "Green", "Black", "White"];
  const materialItems = ["Material", "Cotton", "Polyester", "Silk", "Linen"];
  const offerItems = [
    "Offer",
    "Discount",
    "Sale",
    "Clearance",
    "Free Shipping",
  ];
  const filtersItems = [
    "AllFilters",
    "New Arrivals",
    "Featured",
    "Best Sellers",
    "On Sale",
  ];
  const sortByItems = [
    "Sort By",
    "Popularity",
    "Price: Low to High",
    "Price: High to Low",
    "Customer Rating",
  ];

  return (
    <Box sx={{ margin: "30px 0px", background: "white", padding :"0px 40px" }}>
      <AdComponent />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px 0px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "start", width: "60%" }}>
          <Dropdown
            items={productItems}
            defaultValue={categoryType}
            onChange={handleDropdownChange(setCategoryType, "Category")}
            background="white"
          />
          <Box sx={{ marginRight: "20px" }}></Box>
          <Dropdown
            items={priceItems}
            defaultValue={priceType}
            onChange={handleDropdownChange(setPriceType, "Price")}
            background="white"
          />
          <Box sx={{ marginRight: "20px" }}></Box>
          <Dropdown
            items={reviewItems}
            defaultValue={ratingsType}
            onChange={handleDropdownChange(setRatingType, "Rating")}
            background="white"
          />
          {/* <Dropdown 
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
          /> */}
        </Box>
        <Dropdown
          items={sortByItems}
          defaultValue={sortBy}
          onChange={handleDropdownChange(setSortBy)}
        />
      </Box>
      <Typography variant="h6" sx={{ margin: "8px ", fontWeight: "600" }}>
        All Products
      </Typography>
      <ProductCard />
    </Box>
  );
}

export default LandingMain;
