// 'use client';
// import { createContext, useContext, useEffect, useState } from 'react';
// import { StaticImageData } from 'next/image';

// interface CartItem {
//   id: number;
//   image: StaticImageData | string;
//   productName: string;
//   detail: string;
//   quantity: number;
//   price: string;
// }

// interface CartContextType {
//   items: CartItem[];
//   addItem: (item: CartItem) => void;
//   removeItem: (id: number) => void;
//   updateQuantity: (id: number, type: 'increase' | 'decrease') => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType>({
//   items: [],
//   addItem: () => {},
//   removeItem: () => {},
//   updateQuantity: () => {},
//   clearCart: () => {},
// });

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem('cart');
//       if (savedCart) {
//         const parsedCart = JSON.parse(savedCart);
//         const hydratedCart = parsedCart.map((item: CartItem) => ({
//           ...item,
//           image: item.image,
//         }));
//         setItems(hydratedCart);
//       }
//     } catch (error) {
//       console.error('Error loading cart:', error);
//     }
//   }, []); // Only run once

//   useEffect(() => {
//     try {
//       const cartToSave = items.map(item => ({
//         ...item,
//         image: typeof item.image === 'string' ? item.image : item.image.src
//       }));
//       localStorage.setItem('cart', JSON.stringify(cartToSave));
//     } catch (error) {
//       console.error('Error saving cart:', error);
//     }
//   }, [items]); // Run whenever items change

//   const addItem = (newItem: CartItem) => {
//     setItems(currentItems => {
//       const existingItem = currentItems.find(item => item.id === newItem.id);
//       if (existingItem) {
//         return currentItems.map(item =>
//           item.id === newItem.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...currentItems, newItem];
//     });
//   };

//   const updateQuantity = (id: number, type: 'increase' | 'decrease') => {
//     setItems(currentItems => {
//       const updatedItems = currentItems.map(item => {
//         if (item.id === id) {
//           const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
//           return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
//         }
//         return item;
//       }).filter(Boolean); // Removing null items
//       return updatedItems as CartItem[];
//     });
//   };

//   const removeItem = (id: number) => {
//     setItems(currentItems => currentItems.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);

// 'use client';
// import { createContext, useState, useContext, useEffect } from 'react';

// type CartItem = {
//   id: string;
//   productName: string;
//   price: string;
//   image: string;
//   quantity: number;
// };

// const CartContext = createContext<any>(null);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   const updateQuantity = (id: string, action: 'increase' | 'decrease') => {
//     setCart((prevCart) => {
//       return prevCart.map((item) => {
//         if (item.id === id) {
//           if (action === 'increase') item.quantity += 1;
//           else if (action === 'decrease' && item.quantity > 1) item.quantity -= 1;
//         }
//         return item;
//       });
//     });
//   };
// export const useCart = () => useContext(CartContext);

// 'use client';
// import { createContext, useContext, useEffect, useState } from 'react';
// import { StaticImageData } from 'next/image';

// interface CartItem {
//   id: number;
//   image: StaticImageData | string; // Image can be a StaticImageData or a string URL
//   productName: string;
//   detail: string;
//   quantity: number;
//   price: string;
// }

// interface CartContextType {
//   items: CartItem[];
//   addItem: (item: CartItem) => void;
//   removeItem: (id: number) => void;
//   updateQuantity: (id: number, type: 'increase' | 'decrease') => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType>({
//   items: [],
//   addItem: () => {},
//   removeItem: () => {},
//   updateQuantity: () => {},
//   clearCart: () => {},
// });

// export function CartProvider({ children }: { children: React.ReactNode }) {
//   const [items, setItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem('cart');
//       if (savedCart) {
//         const parsedCart = JSON.parse(savedCart);
//         // Ensure `image` is properly handled as a string or StaticImageData
//         const hydratedCart = parsedCart.map((item: CartItem) => ({
//           ...item,
//           image: typeof item.image === 'string' ? item.image : item.image?.src, // Handling image src if it's StaticImageData
//         }));
//         setItems(hydratedCart);
//       }
//     } catch (error) {
//       console.error('Error loading cart:', error);
//     }
//   }, []); // Only run once when the component mounts

//   useEffect(() => {
//     try {
//       const cartToSave = items.map(item => ({
//         ...item,
//         image: typeof item.image === 'string' ? item.image : item.image.src, // Save image as string (URL)
//       }));
//       localStorage.setItem('cart', JSON.stringify(cartToSave));
//     } catch (error) {
//       console.error('Error saving cart:', error);
//     }
//   }, [items]); // Run whenever items change

//   const addItem = (newItem: CartItem) => {
//     setItems(currentItems => {
//       const existingItem = currentItems.find(item => item.id === newItem.id);
//       if (existingItem) {
//         return currentItems.map(item =>
//           item.id === newItem.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...currentItems, newItem];
//     });
//   };

//   const updateQuantity = (id: number, type: 'increase' | 'decrease') => {
//     setItems(currentItems => {
//       const updatedItems = currentItems
//         .map(item => {
//           if (item.id === id) {
//             const newQuantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
//             return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
//           }
//           return item;
//         })
//         .filter(Boolean); // Remove null items, meaning removed from cart
//       return updatedItems as CartItem[]; // Type assertion to ensure type is correct
//     });
//   };

//   const removeItem = (id: number) => {
//     setItems(currentItems => currentItems.filter(item => item.id !== id));
//   };

//   const clearCart = () => {
//     setItems([]);
//   };

//   return (
//     <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);

// 'use client'; // This marks the file as a client-side component

// import React, { createContext, useState, useContext } from 'react'; // Import React hooks

// // Define the type for your cart items
// type CartItem = {
//   id: string;
//   productName: string;
//   image: string;
//   quantity: number;
//   price: string | number;
// };

// type CartContextType = {
//   items: CartItem[];
//   updateQuantity: (id: string, action: 'increase' | 'decrease') => void;
//   addToCart: (item: CartItem) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

// export const CartProvider: React.FC = ({ children }) => {
//   const [items, setItems] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.id === item.id);
//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//   };

//   const updateQuantity = (id: string, action: 'increase' | 'decrease') => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1,
//             }
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ items, addToCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
