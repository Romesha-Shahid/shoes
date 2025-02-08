
// export interface product{
//     _id:string,
//     productName:string,
//     _type:"product",
//         image:{
//             asset:{
//                 _ref:string;
//                 _type:"image";
//             }
//         };
    
//     price:number,
//     description:string,
//     image:string;
//     slug:{
//         _type:"slug"
//         current:string;

//     }
// }

// NEW ONE 
import { StaticImport } from "next/dist/shared/lib/get-img-props";


export interface Product {
    inventory: number;
    imageUrl: string | StaticImport;
    _id: string;
    productName: string;
    _type?: "product";
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    price: number;
    description?: string;
    slug: {
      _type: "slug";
      current: string;
    };
    name?: string; // Add name if it's part of your data
    category?: string; // Add category if it's part of your data
    colors?: string[]; // Add colors as an optional array of strings

  }
  