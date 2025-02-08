

// import Image from "next/image";
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { Product } from "../../../../type/product";
// import AddToCart from "@/components/Add to Card"; // Import the AddToCart component

// type ProductInterface = {
//   _id: string;
//   productName: string;
//   category: string;
//   price: number;
//   inventory: string;
//   colors: string[];
//   status: string;
//   imageUrl: string;
//   description: string;
// };

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const { id } = params;

//   // Check if the slug is valid
//   if (!id) {
//     return <p className="text-center">Invalid product slug.</p>;
//   }

//   const query = `
//     *[_type == "product" && _id == $id][0] {
//       _id,
//       productName,
//       category,
//       price,
//       inventory,
//       colors,
//       status,
//       description,
//       "imageUrl": image.asset->url
//     }
//   `;

//   console.log("Slug for query:", id); // Check slug
//   console.log("Query:", query); // Verify the query

//   try {
//     // Fetch product data from Sanity
//     const product: ProductInterface = await sanityFetch({ query, params: { id } });

//     console.log("Product fetched:", product);

//     if (!product) {
//       return <p className="text-center">Product not found.</p>;
//     }

//     return (
//       <div className="product-page">
//         <h1 className="text-4xl font-extrabold text-center">{product.productName}</h1>
//         <div className="product-details flex flex-col lg:flex-row">
//           <div className="product-image w-full lg:w-1/2">
//             <Image
//               className="w-full h-full object-cover"
//               src={product.imageUrl}
//               alt={product.productName}
//               width={500}
//               height={500}
//             />
//           </div>
//           <div className="product-info w-full lg:w-1/2 p-4">
//             <p className="text-lg">{product.description}</p>
//             <p className="text-xl font-semibold mt-4">
//               Price: {product.price} Rs.
//             </p>
//             <p className="text-lg mt-2">
//               Available Colors:{" "}           
//               {product.colors && product.colors.length > 0 ? (
//                 product.colors.map((color, index) => (
//                   <span
//                     key={index}
//                     className="inline-block w-6 h-6 rounded-full"
//                     style={{ backgroundColor: color }}
//                     title={color}
//                   ></span>
//                 ))
//               ) : (
//                 <span>No colors available</span>
//               )}
//             </p>

//             {/* Add to Cart Button */}
//             <AddToCart
//               productId={product._id}
//               productName={product.productName}
//               price={product.price}
//               imageUrl={product.imageUrl}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching product data:", error);
//     return <p className="text-center">An error occurred while fetching the product data.</p>;
//   }
// }

// import Image from 'next/image';
// import { sanityFetch } from '@/sanity/lib/fetch';
// import { Product } from '../../../../type/product';
// import AddToCart from '@/components/Add to Card'; // Import AddToCart component

// type ProductInterface = {
//   _id: string;
//   productName: string;
//   category: string;
//   price: number;
//   inventory: string;
//   colors: string[];
//   status: string;
//   imageUrl: string;
//   description: string; // Add description field
// };

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const { id } = params;

//   // Check if the slug is valid
//   if (!id) {
//     return <p className="text-center">Invalid product slug.</p>;
//   }

//   const query = `
//     *[_type == "product" && _id == $id][0] {
//       _id,
//       productName,
//       category,
//       price,
//       inventory,
//       colors,
//       status,
//       description,
//       "imageUrl": image.asset->url
//     }
//   `;

//   try {
//     // Fetch product data from Sanity
//     const product: ProductInterface = await sanityFetch({ query, params: { id } });

//     if (!product) {
//       return <p className="text-center">Product not found.</p>;
//     }

//     return (
//       <div className="product-page">
//         <h1 className="text-4xl font-extrabold text-center">{product.productName}</h1>
//         <div className="product-details flex flex-col lg:flex-row">
//           <div className="product-image w-full lg:w-1/2">
//             <Image
//               className="w-full h-full object-cover"
//               src={product.imageUrl}
//               alt={product.productName}
//               width={500}
//               height={500}
//             />
//           </div>
//           <div className="product-info w-full lg:w-1/2 p-4">
//             <p className="text-lg">{product.description}</p>
//             <p className="text-xl font-semibold mt-4">
//               Price: {product.price} Rs.
//             </p>
//             <p className="text-lg mt-2">
//               Available Colors:{" "}
//               {product.colors && product.colors.length > 0 ? (
//                 product.colors.map((color, index) => (
//                   <span
//                     key={index}
//                     className="inline-block w-6 h-6 rounded-full"
//                     style={{ backgroundColor: color }}
//                     title={color}
//                   ></span>
//                 ))
//               ) : (
//                 <span>No colors available</span>
//               )}
//             </p>

//             {/* AddToCart Component */}
//             <AddToCart
//               productId={product._id}
//               productName={product.productName}
//               price={product.price}
//               imageUrl={product.imageUrl}
//               description={product.description} // Pass the description to AddToCart
//             />
//           </div>
//         </div>
//       </div>
//     );
// //   } catch (error) {
//     console.error('Error fetching product data:', error);
//     return <p className="text-center">An error occurred while fetching the product data.</p>;
//   }
// }

// // NEW

import Image from 'next/image';
import { sanityFetch } from '@/sanity/lib/fetch';
// import { Product } from '../../../../type/product';
import AddToCart from '@/components/Add to Card'; // Import the AddToCart component

type ProductInterface = {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: string;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // Check if the slug is valid
  if (!id) {
    return <p className="text-center">Invalid product slug.</p>;
  }

  const query = `
    *[_type == "product" && _id == $id][0] {
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
  `;

  try {
    // Fetch product data from Sanity
    const product: ProductInterface = await sanityFetch({ query, params: { id } });

    if (!product) {
      return <p className="text-center">Product not found.</p>;
    }

    return (
      <div className="product-page">
        <h1 className="text-4xl font-extrabold text-center">{product.productName}</h1>
        <div className="product-details flex flex-col lg:flex-row">
          <div className="product-image w-full lg:w-1/2">
            <Image
              className="w-full h-full object-cover"
              src={product.imageUrl}
              alt={product.productName}
              width={500}
              height={500}
            />
          </div>
          <div className="product-info w-full lg:w-1/2 p-4">
            <p className="text-lg">{product.description}</p>
            <p className="text-xl font-semibold mt-4">
              Price: {product.price} Rs.
            </p>
            <p className="text-lg mt-2">
              Available Colors:{" "}
              {product.colors && product.colors.length > 0 ? (
                product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="inline-block w-6 h-6 rounded-full"
                    style={{ backgroundColor: color }}
                    title={color}
                  ></span>
                ))
              ) : (
                <span>No colors available</span>
              )}
            </p>

            {/* AddToCart Component */}
            <AddToCart
              productId={product._id}
              productName={product.productName}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching product data:', error);
    return <p className="text-center">An error occurred while fetching the product data.</p>;
  }
}
