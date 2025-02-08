 import { defineQuery,  } from "next-sanity";


export const allProductsQuery = defineQuery(`
  *[_type == "product"] {
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    description,
    "imageUrl": image.asset->url
  }
`);

export const fourProductsQuery = defineQuery(`
    *[_type == "product"][0...4] {
      _id,
      productName,
      category,
      price,
      inventory, 
      colors,
      status,
      description,
      "imageUrl": image.asset->url,
      slug  // Ensure you're querying for slug
    }`
  )


  // export const allProductsQuery = groq `*[_type == "product"]`;
  // export const four = `*[_type == "product"][0...4];{
  //         _id,
  //       productName,
  //       category,
  //       price,
  //       inventory,
  //       colors,
  //       status,
  //       description,
  //       "imageUrl": image.asset->url
  // }`
  // const ProductsQuery = `*[_type == "product"] | order(_createdAt desc) [0...4] {
  //   _id,
  //   productName,
  //   category,
  //   price,
  //   inventory,
  //   colors,
  //   status,
  //   description,
  //   imageUrl
  // }`;
  
  //src/app/lib/getData.tsx


  // new queriey

//   import { groq } from "next-sanity";

// export const allproducts = groq`*[_type == "product"]`;
// export const four = groq`*[_type == "product"][0..3]`;
// // src/sanity/lib/quries.ts
// export const fourProductsQuery = `*[_type == "product"]{ ... }`;  // Adjust the query to your needs
// // In fetch.ts
// // In fetch.ts
// // export const fetchData = () => { /* Some other fetch logic */ };

