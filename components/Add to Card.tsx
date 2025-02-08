'use client'; // Ensures this component runs on the client-side, allowing the use of hooks
import { useState, useEffect } from 'react';
import Link from 'next/link';

type AddToCartProps = {
  productId: string;
  productName: string;
  price: number;
  imageUrl: string;
};

const AddToCart = ({ productId, productName, price, imageUrl }: AddToCartProps) => {
  const [added, setAdded] = useState(false); // Tracks if the product is added to cart
  const [cart, setCart] = useState<unknown[]>([]); // Stores the cart items
  const [showMessage, setShowMessage] = useState(false); // Controls the visibility of the confirmation message

  useEffect(() => {
    // Load cart from localStorage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = () => {
    const cartItem = { productId, productName, price, imageUrl };

    // Update the local cart state
    const newCart = [...cart, cartItem];
    setCart(newCart);

    // Persist the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(newCart));

    // Show the "Added to Cart" message
    setShowMessage(true);

    // Change the button text to "Added to Cart"
    setAdded(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div>
      <button 
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        <Link href="/cart"> 
          {added ? 'Added to Cart' : 'Add to Cart'}
        </Link>
      </button>

      {/* Show a temporary message when product is added */}
      {showMessage && (
        <div
          className="mt-2 p-3 text-white bg-green-500 rounded-md"
          style={{
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <p>Product added to cart!</p>
        </div>
      )}

      {/* Optionally, show cart count */}
      <div className="mt-2">
        <p>Items in Cart: {cart.length}</p>
      </div>
    </div>
  );
};

export default AddToCart;
