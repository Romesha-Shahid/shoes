import React from "react";
import Image from "next/image";
// Left side component
const LeftDiv = () => {
  return (
    <div className="0 p-4 w-full md:w-64">
      <h1>(New) 500</h1>
      <br />
      <p>Shoes</p>
      <p>Sports Bras</p>
      <p>Tops & T-Shirts</p>
      <p>Hoodies & Sweatshirts</p>
      <p>Jackets</p>
      <p>Trousers & Tights</p>
      <p>Shorts</p>
      <p>Tracksuits</p>
      <p>Jumpsuits & Rompers</p>
      <p>Skirts & Dresses</p>
      <p>Socks</p>
      <p>Accessories</p>
      <p>Equipment</p>
      <hr />
      <div>
        <h2>Gender</h2>
        <div>
          <label style={{ display: "block", margin: "10px 0" }}>
          <input
          type="radio"
          name="gender"
          value="Men"
          style={{ marginRight: "10px" }}
            />
           Men
      </label>
              <label style={{ display: "block", margin: "10px 0" }}>
              <input
              type="radio"
              name="gender"
              value="Women"
              style={{ marginRight: "10px" }}
              />
               Women 
               </label>
        <label style={{ display: "block", margin: "10px 0" }}>
        <input
        type="radio"
        name="gender"
        value="Unisex"
        style={{ marginRight: "10px" }}
        />
         Unisex
        </label>
        </div>
        </div>
        <hr />
        <h2>Kids</h2>
         <div>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input
            type="radio"
            name="gender"
            value="Boys"
            style={{ marginRight: "10px" }}
          />
          Boys
        </label>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input
            type="radio"
            name="gender"
            value="Girls"
            style={{ marginRight: "10px" }}
          />
          Girls
        </label>
      </div>
      <hr />
      <h2>Shop by Price</h2>
      <div>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input
            type="radio"
            name="price"
            value="Under $2500.00"
            style={{ marginRight: "10px" }}
          />
          Under $2500.00
        </label>
        <label style={{ display: "block", margin: "10px 0" }}>
          <input
            type="radio"
            name="price"
            value="$2500.00"
            style={{ marginRight: "10px" }}
          />
          $2500.00
        </label>
      </div>
    </div>
  );
};

// Right side component
const items = [
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 1,price: "Rs: 1200",img_url: "/image1.png",},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 1300", img_url: "/image1.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 1400", img_url: "/image2.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 1600", img_url: "/image3.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 1500", img_url: "/image4.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 1900", img_url: "/image5.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 1700", img_url: "/image6.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 1200", img_url: "/image7.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 1800", img_url: "/image8.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 1100", img_url: "/image9.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 2200", img_url: "/image10.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 2100", img_url: "/image11.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 2000", img_url: "/image12.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 2400", img_url: "/LOW+RETRO.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 3400", img_url: "/motive1.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 2700", img_url: "/NIKE+P-6000.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 3800", img_url: "/NIKE+.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 2900", img_url: "/WMNS+NIKE.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 3000", img_url: "/WMNS+NIKE+MOTIVA.png"},
  {title: "Nike Air Max",text: "Men's Shoes",colour: 1,id: 2, price: "Rs: 3100", img_url: "/image7.png"},
  {title: "Nike Air Max",text: "Women's Shoes",colour: 1,id: 2, price: "Rs: 3200", img_url: "/image2.png"},
  // Add more items as needed...
];

const RightDiv = () => {
  return (
    <div className="w-full md:w-2/3 p-4">
      <h1 className="text-4xl md:text-3xl font-bold text-center my-6">Items</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((data, i) => (
          <div
            key={i}
            className="bg-white border rounded-lg overflow-hidden shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center">
              <Image
                src={data.img_url}
                alt={data.title}
                width={200}
                height={200}
                className="rounded-md"
              />
              <h1 className="font-bold text-lg mt-2">{data.title}</h1>
              <p className="text-gray-500">{data.text}</p>
              <p className="text-gray-500">Colour: {data.colour}</p>
              <p className="text-gray-500">{data.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
const Items = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <LeftDiv />
      <RightDiv />
    </div>
  );
};

export default Items;