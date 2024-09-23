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

const getRatings = (ratings) => {
  let totalRatings = 0;
  let weightedSum = 0;

  for (let rate in ratings) {
    totalRatings += ratings[rate];
    weightedSum += rate * ratings[rate];
  }
  const averageRating = (weightedSum / totalRatings).toFixed(2);
  const length = Math.round(averageRating);
  return length;
};

export const ProductsProvide = ({ children }) => {
  const [items, setItems] = useState([
    {
      productId: "8746",
      name: "Boat Buds",
      price: 1309,
      unit: "kg",
      images: [
        "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a.png?v=1698315950",
        "https://m.media-amazon.com/images/I/41carWmAFAL._AC_UF1000,1000_QL80_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMhmQxRg6cH4ifiNXr6DfIW1HqEGyRzEIxVsDD_D4ObKsuRETwkd6Pt6EBMqo-mhUzNU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfeZu0Te-QOiAfSZ9c525GR22dHK-YytG7ETHF2CMD8c4GvNQYVRiTwPaeJY0z6gQZ98&usqp=CAU",
      ],
      shortDescript: "Boat Ahead",
      longDescript:
        "Best Buds with premium quality, durability and reliability",
      seller: sellerDetails(0),
      ratings: {
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      },
      overAllRating: getRatings({
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      }),
      category: "Ear Phones",
    },
    {
      productId: "1298",
      name: "Eear Phones",
      category: "Ear Phones",
      price: 699,
      unit: "",
      images: [
        "https://m.media-amazon.com/images/I/41carWmAFAL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/I/51yYK4RGtLL.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNTFT3UgX8THE2MrA2O2ZrN5lGxw4DNnAz3D-vJgZwocqSShwQBZlctn1RzCSCx3ApvE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMhmQxRg6cH4ifiNXr6DfIW1HqEGyRzEIxVsDD_D4ObKsuRETwkd6Pt6EBMqo-mhUzNU&usqp=CAU",
      ],
      shortDescript: "Best earphones",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(1),
      ratings: {
        1: 12,
        2: 119,
        3: 126,
        4: 200,
        5: 90,
      },
      overAllRating: getRatings({
        1: 12,
        2: 119,
        3: 126,
        4: 200,
        5: 90,
      }),
    },
    {
      productId: "7488",
      name: "Realme Blutooth",
      category: "Ear Phones",
      price: 1199,
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/51yYK4RGtLL.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rDYdruG4CYZPQ0hJCJl-Hv2xu6-xHZD59A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_z-46I2M3_qqVGIalxfGbv9qGyeRKLigAVHBPcQMvHq69jd-7MdHi494Sf3c5vetZq0&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNTFT3UgX8THE2MrA2O2ZrN5lGxw4DNnAz3D-vJgZwocqSShwQBZlctn1RzCSCx3ApvE&usqp=CAU",
      ],
      shortDescript: "Best Bluetooth",
      longDescript: "Best Bluetooth for call and connectivity",
      seller: sellerDetails(2),
      ratings: {
        1: 80,
        2: 19,
        3: 26,
        4: 20,
        5: 70,
      },
      overAllRating: getRatings({
        1: 80,
        2: 19,
        3: 26,
        4: 20,
        5: 70,
      }),
    },
    {
      productId: "1297",
      name: "Oppo A79",
      category: "Mobile Phones",
      price: 18000,
      unit: "kg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rDYdruG4CYZPQ0hJCJl-Hv2xu6-xHZD59A&s",
        "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_z-46I2M3_qqVGIalxfGbv9qGyeRKLigAVHBPcQMvHq69jd-7MdHi494Sf3c5vetZq0&usqp=CAU",
      ],
      shortDescript: "Premium quality phone",
      longDescript: "Best and Premium quality phone",
      seller: sellerDetails(2),
      ratings: {
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      },
      overAllRating: getRatings({
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      }),
    },
    {
      productId: "2344",
      name: "Iphone 12",
      category: "Mobile Phones",
      price: 49888,
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Best mobile phone available in market",
      seller: sellerDetails(2),
      ratings: {
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      },
      overAllRating: getRatings({
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      }),
    },
    {
      productId: "2541",
      name: "Hp-1424",
      category: "Laptop",
      price: 50000,
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJidn3nyR6dOfn9NZwP5tDGu8wX7RYyraQg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Best qualitu laptop with 2 years of warranty",
      seller: sellerDetails(1),
      ratings: {
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      },
      overAllRating: getRatings({
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      }),
    },
    {
      productId: "9871",
      name: "Samsung Tv",
      category: "Television",
      price: 23000,
      unit: "10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChy6DsVr0VSVn9fqQwoU-jk8TTfkHElZ17w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK06btm2BDx-ppAf4viUumUvclr4I68cIf-ffnxjY02XJilnGr1QWi9EkXarkV-Tp4ax4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
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
      overAllRating: getRatings({
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      }),
    },
    {
      productId: "9872",
      name: "Samsung",
      category: "Television",
      price: 30000,
      unit: "20",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChy6DsVr0VSVn9fqQwoU-jk8TTfkHElZ17w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK06btm2BDx-ppAf4viUumUvclr4I68cIf-ffnxjY02XJilnGr1QWi9EkXarkV-Tp4ax4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
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
      overAllRating: getRatings({
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      }),
    },
  ]);
  const [ProductItems, setProductItems] = useState([
    {
      productId: "8746",
      name: "Boat Buds",
      price: 1309,
      unit: "kg",
      images: [
        "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_0684daf7-e7d9-4224-9724-07271a45c73a.png?v=1698315950",
        "https://m.media-amazon.com/images/I/41carWmAFAL._AC_UF1000,1000_QL80_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMhmQxRg6cH4ifiNXr6DfIW1HqEGyRzEIxVsDD_D4ObKsuRETwkd6Pt6EBMqo-mhUzNU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfeZu0Te-QOiAfSZ9c525GR22dHK-YytG7ETHF2CMD8c4GvNQYVRiTwPaeJY0z6gQZ98&usqp=CAU",
      ],
      shortDescript: "Boat Ahead",
      longDescript:
        "Best Buds with premium quality, durability and reliability",
      seller: sellerDetails(0),
      ratings: {
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      },
      overAllRating: getRatings({
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      }),
      category: "Ear Phones",
    },
    {
      productId: "1298",
      name: "Eear Phones",
      category: "Ear Phones",
      price: 699,
      unit: "",
      images: [
        "https://m.media-amazon.com/images/I/41carWmAFAL._AC_UF1000,1000_QL80_.jpg",
        "https://m.media-amazon.com/images/I/51yYK4RGtLL.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNTFT3UgX8THE2MrA2O2ZrN5lGxw4DNnAz3D-vJgZwocqSShwQBZlctn1RzCSCx3ApvE&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMhmQxRg6cH4ifiNXr6DfIW1HqEGyRzEIxVsDD_D4ObKsuRETwkd6Pt6EBMqo-mhUzNU&usqp=CAU",
      ],
      shortDescript: "Best earphones",
      longDescript: "Tomatoes are healthy to consume with great taste",
      seller: sellerDetails(1),
      ratings: {
        1: 12,
        2: 119,
        3: 126,
        4: 200,
        5: 90,
      },
      overAllRating: getRatings({
        1: 12,
        2: 119,
        3: 126,
        4: 200,
        5: 90,
      }),
    },
    {
      productId: "7488",
      name: "Realme Blutooth",
      category: "Ear Phones",
      price: 1199,
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/51yYK4RGtLL.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rDYdruG4CYZPQ0hJCJl-Hv2xu6-xHZD59A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_z-46I2M3_qqVGIalxfGbv9qGyeRKLigAVHBPcQMvHq69jd-7MdHi494Sf3c5vetZq0&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNTFT3UgX8THE2MrA2O2ZrN5lGxw4DNnAz3D-vJgZwocqSShwQBZlctn1RzCSCx3ApvE&usqp=CAU",
      ],
      shortDescript: "Best Bluetooth",
      longDescript: "Best Bluetooth for call and connectivity",
      seller: sellerDetails(2),
      ratings: {
        1: 80,
        2: 19,
        3: 26,
        4: 20,
        5: 70,
      },
      overAllRating: getRatings({
        1: 80,
        2: 19,
        3: 26,
        4: 20,
        5: 70,
      }),
    },
    {
      productId: "1297",
      name: "Oppo A79",
      category: "Mobile Phones",
      price: 18000,
      unit: "kg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rDYdruG4CYZPQ0hJCJl-Hv2xu6-xHZD59A&s",
        "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_z-46I2M3_qqVGIalxfGbv9qGyeRKLigAVHBPcQMvHq69jd-7MdHi494Sf3c5vetZq0&usqp=CAU",
      ],
      shortDescript: "Premium quality phone",
      longDescript: "Best and Premium quality phone",
      seller: sellerDetails(2),
      ratings: {
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      },
      overAllRating: getRatings({
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      }),
    },
    {
      productId: "2344",
      name: "Iphone 12",
      category: "Mobile Phones",
      price: 49888,
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yWQP7S48wca1QjRPEgT4OR5xa6ducRNDV6sQSHbtsVT9zOrIHOFO8lt_3lsiQZZ98a8&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Best mobile phone available in market",
      seller: sellerDetails(2),
      ratings: {
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      },
      overAllRating: getRatings({
        1: 0,
        2: 19,
        3: 26,
        4: 20,
        5: 100,
      }),
    },
    {
      productId: "2541",
      name: "Hp-1424",
      category: "Laptop",
      price: 50000,
      unit: "kg",
      images: [
        "https://m.media-amazon.com/images/I/61+r3+JstZL._AC_UF1000,1000_QL80_.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJidn3nyR6dOfn9NZwP5tDGu8wX7RYyraQg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
      ],
      shortDescript: "Tomatoes are healthy",
      longDescript: "Best qualitu laptop with 2 years of warranty",
      seller: sellerDetails(1),
      ratings: {
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      },
      overAllRating: getRatings({
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      }),
    },
    {
      productId: "9871",
      name: "Samsung Tv",
      category: "Television",
      price: 23000,
      unit: "10",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChy6DsVr0VSVn9fqQwoU-jk8TTfkHElZ17w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK06btm2BDx-ppAf4viUumUvclr4I68cIf-ffnxjY02XJilnGr1QWi9EkXarkV-Tp4ax4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
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
      overAllRating: getRatings({
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      }),
    },
    {
      productId: "9872",
      name: "Samsung",
      category: "Television",
      price: 30000,
      unit: "20",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChy6DsVr0VSVn9fqQwoU-jk8TTfkHElZ17w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK06btm2BDx-ppAf4viUumUvclr4I68cIf-ffnxjY02XJilnGr1QWi9EkXarkV-Tp4ax4&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TeSMqRWvPoXmOP03FzCEVUTc--2i-CD3kaXcFazvdIN9pGsB7u4AR3vkxpOapnGw3kI&usqp=CAU",
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
      overAllRating: getRatings({
        1: 12,
        2: 19,
        3: 26,
        4: 20,
        5: 10,
      }),
    },
  ]);

  const getItem = (productId) => {
    const product = items.filter((item) => item.productId === productId);
    return product[0];
  };
  const [noOfItemsInCart, setNoOfItemsInCart] = useState(0);

  const [cartList, setCartList] = useState([]);
  const [buyList, setBuyList] = useState([]);

  const [categoryType, setCategoryType] = useState("Categories");
  const [priceType, setPriceType] = useState("All Prices");
  const [ratingsType, setRatingType] = useState("All Ratings");

  const sortItems = (sortType, value) => {
    var num = -1;
    if(ratingsType !== "All Ratings"){
      const numericRating = ratingsType.slice(0, ratingsType.indexOf(" "));
       num = Number(numericRating);
    }
    let newItems = items;
    switch (sortType) {
      case "Category":
        if (value === "Categories") {
          if (priceType !== "All Prices" && ratingsType !== "All Ratings") {
            newItems = ProductItems.filter(
              (item) =>
                isPriceUnderRange(item.price, priceType) &&
              item.overAllRating>=num
            );
          } else if (
            priceType !== "All Prices" &&
            ratingsType === "All Ratings"
          ) {
            newItems = ProductItems.filter((item) => 
              isPriceUnderRange(item.price, priceType)
            );
          } else if (
            priceType === "All Prices" &&
            ratingsType !== "All Ratings"
          ) {
            newItems = ProductItems.filter((item) =>
              item.overAllRating>=num
            );
          } else {
            newItems = ProductItems;
          }
        } else {
          newItems = ProductItems.filter(
            (item) =>
              item.category === value &&
            item.overAllRating>=num &&
              isPriceUnderRange(item.price, priceType)
          );
        }

        break;

      case "Price":
        if (value === "All Prices") {
          if (categoryType !== "Categories" && ratingsType !== "All Ratings") {
            newItems = ProductItems.filter(
              (item) =>
                item.category === categoryType &&
              item.overAllRating>=num
            );
          } else if (
            categoryType !== "Categories" &&
            ratingsType === "All Ratings"
          ) {
            newItems = ProductItems.filter(
              (item) => item.category === categoryType
            );
          } else if (
            categoryType === "Categories" &&
            ratingsType !== "All Ratings"
          ) {
            newItems = ProductItems.filter((item) =>
              item.overAllRating>=num
            );
          } else {
            newItems = ProductItems;
          }
        } else {
          if (value === "3000+") {
            value = value.slice(0, -1);
            const number = Number(value);
            console.log(num,number,categoryType);
            
            newItems = ProductItems.filter(
              (item) =>
                (categoryType === "Categories" ||
                item.category === categoryType) &&
                  item.price >= number &&
                  item.overAllRating>=num
            );
          } else {
            const matches = value.match(/\d+/g);
            const num1 = Number(matches[0]);
            const num2 = Number(matches[1]);
            newItems = ProductItems.filter(
              (product) =>
                (product.category !== "Categories" ||
                  product.category === categoryType) &&
                product.price >= num1 &&
                product.price <= num2 &&
                product.overAllRating >= num
            );
          }
        }
        break; // Add break to prevent fall-through

      case "Rating":
        if (value === "All Ratings") {
          if (categoryType !== "Categories" && priceType !== "All Prices") {
            newItems = ProductItems.filter(
              (item) =>
                item.category === categoryType &&
                isPriceUnderRange(item.price, priceType)
            );
          } else if (
            categoryType !== "Categories" &&
            priceType === "All Prices"
          ) {
            newItems = ProductItems.filter(
              (item) => item.category === categoryType
            );
          } else if (
            categoryType === "Categories" &&
            priceType !== "All Prices"
          ) {
            newItems = ProductItems.filter((item) =>
              isPriceUnderRange(item.price, priceType)
            );
          } else {
            newItems = ProductItems;
          }
        } else {
          newItems = ProductItems.filter(
            (product) =>
              (categoryType === "Categories" ||
                product.category === categoryType) &&
              isPriceUnderRange(product.price, priceType) &&
              product.overAllRating >= num
          ); // Example sorting by price
        }
        break;
    }
    setItems(newItems); // Update state with new items
  };

  const searchProducts = (query) => {
    if (query === "") {
      setItems(ProductItems);
    } else {
      const searchItems = ProductItems.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setItems(searchItems);
    }
  };

  const isPriceUnderRange = (itemPrice, selectedPrice) => {
    if (selectedPrice === "All Prices") {
      return true;
    }
    if (selectedPrice === "3000+") {
      selectedPrice = selectedPrice.slice(0, -1);
    
      return itemPrice >= selectedPrice;
    } else {
      const matches = selectedPrice.match(/\d+/g);
      const num1 = Number(matches[0]);
      const num2 = Number(matches[1]);
      return itemPrice >= num1 && itemPrice <= num2;
    }
  };



  return (
    <ProductContext.Provider
      value={{
        items,
        getItem,
        noOfItemsInCart,
        setNoOfItemsInCart,
        cartList,
        setCartList,
        buyList,
        setBuyList,
        sortItems,
        searchProducts,
        categoryType,
        setCategoryType,
        ratingsType,
        setRatingType,
        priceType,
        setPriceType,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
