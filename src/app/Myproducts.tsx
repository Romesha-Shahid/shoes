
// import AddToCart from "@/components/Add to Card";
import { sanityFetch } from "@/sanity/lib/fetch";
import {  fourProductsQuery  }from "@/sanity/lib/quries"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Product from "./product/page";
// import { ok } from "assert";

type Product = {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  description: string;
  imageUrl: string;
};

export default async function Myproduct() {
  // Fetching data
  const products: Product[] = await sanityFetch({ query: fourProductsQuery });
  console.log("this is my prduct data",products);
  
  // const handleAddtoCart =(e:React.MouseEvent,product:Product) => {
  //   e.preventDefault()
  //   AddToCart(product)
  //   alert(ok)
  //   console.log(handleAddtoCart)

  // }

  return (
    <>
      <h1 className="text-3xl font-extrabold text-center my-8">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {products.map((product) => (
          <Link href={`/product/${product._id}`} key={product._id}>
            <div
              className="border border-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center bg-white hover:shadow-xl transition-shadow duration-300"
              style={{ cursor: "pointer" }}
            >
              <div className="w-64 h-64 overflow-hidden rounded-lg mb-4">
                <Image
                  className="w-full h-full object-cover"
                  src={product.imageUrl}
                  alt={product.productName}
                  width={256}
                  height={256}
                />
              </div>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                {product.productName}
              </h2>
              <p className="text-center text-gray-600">
                <span className="font-bold text-gray-800">Price:</span> {product.price}{" "}
                <span>Rs.</span>
              </p>
              <div className="mt-4 flex gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="block w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                    title={color}
                  ></span>
                  

            
                ))}
                {/* <button onClick={(e) => handleAddtoCart (e, product)} >
                  add to card
                </button> */}
              </div>
            </div>
          </Link>
        ))}
 
      </div>
    </>
  );
}
