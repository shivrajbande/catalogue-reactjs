import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const sellerDetails = (index) => {
  const data = [
    {
      name: "Shivraj Bande",
      address: "Dhodapur",
      pincode: "504101",
      email: "shivrajbande09@gmail.com",
      products: ["8746"],
    },
    {
      name: "Santosh Bande",
      address: "Dhodapur",
      pincode: "504101",
      email: "santoshbande09@gmail.com",
      products: ["1298", "2541"],
    },
    {
      name: "Shiva Bande",
      address: "Dhodapur",
      pincode: "504101",
      email: "shivabande09@gmail.com",
      products: ["7488", "9871", "2344", "1297"],
    },
  ];
  return data[index];
};

export const ProductsProvide = ({ children }) => {
  const items = [
    {
      productId: "8746",
      name: "Boat Buds",
      price: "45",
      unit: "kg",
      images: [
        "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a.png?v=1698315950",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfeZu0Te-QOiAfSZ9c525GR22dHK-YytG7ETHF2CMD8c4GvNQYVRiTwPaeJY0z6gQZ98&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(0),
      ratings: {
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      },
    },
    {
      productId: "1298",
      name: "Tomatoes",
      price: "45",
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/41carWmAFAL._AC_UF1000,1000_QL80_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMhmQxRg6cH4ifiNXr6DfIW1HqEGyRzEIxVsDD_D4ObKsuRETwkd6Pt6EBMqo-mhUzNU&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(1),
      ratings: {
        1: 12,
        2: 119,
        3: 126,
        4: 200,
        5: 90,
      },
    },
    {
      productId: "7488",
      name: "Tomatoes",
      price: "45",
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/51yYK4RGtLL.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNTFT3UgX8THE2MrA2O2ZrN5lGxw4DNnAz3D-vJgZwocqSShwQBZlctn1RzCSCx3ApvE&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(2),
      ratings: {
        1: 80,
        2: 19,
        3: 26,
        4: 20,
        5: 70,
      },
    },
    {
      productId: "1297",
      name: "Tomatoes",
      price: "45",
      unit: "kg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rDYdruG4CYZPQ0hJCJl-Hv2xu6-xHZD59A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_z-46I2M3_qqVGIalxfGbv9qGyeRKLigAVHBPcQMvHq69jd-7MdHi494Sf3c5vetZq0&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(2),
      ratings: {
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      },
    },
    {
      productId: "2344",
      name: "Tomatoes",
      price: "45",
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(2),
      ratings: {
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      },
    },
    {
      productId: "2541",
      name: "Tomatoes",
      price: "45",
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJidn3nyR6dOfn9NZwP5tDGu8wX7RYyraQg&s",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(1),
      ratings: {
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      },
    },
    {
      productId: "9871",
      name: "Samsung Tv",
      price: "23000",
      unit: "10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChy6DsVr0VSVn9fqQwoU-jk8TTfkHElZ17w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK06btm2BDx-ppAf4viUumUvclr4I68cIf-ffnxjY02XJilnGr1QWi9EkXarkV-Tp4ax4&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(2),
      ratings: {
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      },
    },
    {
      productId: "9872",
      name: "Samsung",
      price: "30000",
      unit: "20",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChy6DsVr0VSVn9fqQwoU-jk8TTfkHElZ17w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK06btm2BDx-ppAf4viUumUvclr4I68cIf-ffnxjY02XJilnGr1QWi9EkXarkV-Tp4ax4&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(2),
      ratings: {
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      },
    },
  ];
  const getItem =(productId)=>{
   const product =  items.filter(item => item.productId == productId);
   return product[0];
  }
  return <ProductContext.Provider value={{items, getItem}}>{children}</ProductContext.Provider>;
};
