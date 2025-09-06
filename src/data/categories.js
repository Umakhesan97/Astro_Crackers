// src/data/categories.js

import rocket_logo from "../assets/rocket_category_image.png"

const categories = [
  {
    category: "Sparklers",
items: [
  { 
    name: { type: "paragraph", value: "Small Sparkler" },
    discountprice: { type: "paragraph", value: "50" },
    content: { type: "paragraph", value: "1 box (10 pcs)" },
    actualprice: { type: "paragraph", value: "60" },
    quantity: { type: "input", value: "" },
  },
  { 
    name: { type: "paragraph", value: "Big Sparkler" },
    discountprice: { type: "paragraph", value: "100" },
    content: { type: "paragraph", value: "1 box (5 pcs)" },
    actualprice: { type: "paragraph", value: "120" },
    quantity: { type: "input", value: "" },
  },
  { 
    name: { type: "paragraph", value: "Color Sparkler" },
    discountprice: { type: "paragraph", value: "80" },
    content: { type: "paragraph", value: "1 pack (6 pcs)" },
    actualprice: { type: "paragraph", value: "95" },
    quantity: { type: "input", value: "" },
  },
  { 
    name: { type: "paragraph", value: "Long Sparkler" },
    discountprice: { type: "paragraph", value: "150" },
    content: { type: "paragraph", value: "1 box (10 pcs)" },
    actualprice: { type: "paragraph", value: "170" },
    quantity: { type: "input", value: "" },
  },
  { 
    name: { type: "paragraph", value: "Twinkling Sparkler" },
    discountprice: { type: "paragraph", value: "200" },
    content: { type: "paragraph", value: "1 box (12 pcs)" },
    actualprice: { type: "paragraph", value: "230" },
    quantity: { type: "input", value: "" },
  },
  { 
    name: { type: "paragraph", value: "Mega Sparkler" },
    discountprice: { type: "paragraph", value: "300" },
    content: { type: "paragraph", value: "1 box (15 pcs)" },
    actualprice: { type: "paragraph", value: "350" },
    quantity: { type: "input", value: "" },
  },
]

  },
  {
    category: "Flower Pots",
    items: [
      { 
        name: { type: "paragraph", value: "Small Flower Pots" },
        discountprice: { type: "paragraph", value: "50" },
        content: { type: "paragraph", value: "1box" },
        actualprice: { type: "paragraph", value: "60" },
        quantity: { type: "input", value: "" },
      },
      { 
        name: { type: "paragraph", value: "Big Flower pots" },
        discountprice: { type: "paragraph", value: "60" },
        content: { type: "paragraph", value: "1box" },
        actualprice: { type: "paragraph", value: "100" },
        quantity: { type: "input", value: "" },
      },
    ],
  },
  {
    category: "Rockets",
    image: rocket_logo,
    items: [
      {
        name: { type: "paragraph", value: "Mini Rocket" },
        discountprice: { type: "paragraph", value: "150" },
        content: { type: "paragraph", value: "1pack" },
        actualprice: { type: "paragraph", value: "180" },
        quantity: { type: "input", value: "" },
      },
      {
        name: { type: "paragraph", value: "Sky Rocket" },
        discountprice: { type: "paragraph", value: "250" },
        content: { type: "paragraph", value: "1pack" },
        actualprice: { type: "paragraph", value: "300" },
        quantity: { type: "input", value: "" },
      },
    ],
  },
  {
    category: "Candles",
    items: [
      {
        name: { type: "paragraph", value: "Birthday Candle Set" },
        discountprice: { type: "paragraph", value: "40" },
        content: { type: "paragraph", value: "1pack(12pcs)" },
        actualprice: { type: "paragraph", value: "50" },
        quantity: { type: "input", value: "" },
      },
      {
        name: { type: "paragraph", value: "Decorative Candle" },
        discountprice: { type: "paragraph", value: "60" },
        content: { type: "paragraph", value: "1piece" },
        actualprice: { type: "paragraph", value: "70" },
        quantity: { type: "input", value: "" },
      },
    ],
  },
  {
    category: "Fountains",
    items: [
      {
        name: { type: "paragraph", value: "Mini Water Fountain" },
        discountprice: { type: "paragraph", value: "500" },
        content: { type: "paragraph", value: "1unit" },
        actualprice: { type: "paragraph", value: "600" },
        quantity: { type: "input", value: "" },
      },
      {
        name: { type: "paragraph", value: "Deluxe Fountain" },
        discountprice: { type: "paragraph", value: "1200" },
        content: { type: "paragraph", value: "1unit" },
        actualprice: { type: "paragraph", value: "1500" },
        quantity: { type: "input", value: "" },
      },
    ],
  },
  {
    category: "Firecrackers",
    items: [
      {
        name: { type: "paragraph", value: "Anar" },
        discountprice: { type: "paragraph", value: "80" },
        content: { type: "paragraph", value: "1pack" },
        actualprice: { type: "paragraph", value: "100" },
        quantity: { type: "input", value: "" },
      },
      {
        name: { type: "paragraph", value: "Chakra" },
        discountprice: { type: "paragraph", value: "120" },
        content: { type: "paragraph", value: "1pack" },
        actualprice: { type: "paragraph", value: "150" },
        quantity: { type: "input", value: "" },
      },
    ],
  },
  {
    category: "Sparklers Mega",
    items: [
      {
        name: { type: "paragraph", value: "Mega Sparkler Set" },
        discountprice: { type: "paragraph", value: "300" },
        content: { type: "paragraph", value: "1box(50pcs)" },
        actualprice: { type: "paragraph", value: "350" },
        quantity: { type: "input", value: "" },
      },
      {
        name: { type: "paragraph", value: "Ultra Sparkler Set" },
        discountprice: { type: "paragraph", value: "500" },
        content: { type: "paragraph", value: "1box(100pcs)" },
        actualprice: { type: "paragraph", value: "600" },
        quantity: { type: "input", value: "" },
      },
    ],
  },
];
export default categories;
