"use client"
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';

const cartItems = [
  {
    id: 1,
    image: '/images/featureProduct3.png',
    price: 29.99,
  },
 
];

const CartPage = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="flex flex-wrap justify-center md:justify-start gap-6">
      <Image src="/images/cart.png" width={740} height={600} />

      

      {/* Summary Section */}
      <div className=" shadow-md rounded-lg mt-8 p-6 max-w-md mx-auto w-full md:mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Summary</h2>
        <div className="flex justify-between border-b py-2 mb-4">
          <span className="text-gray-800 font-bold">Subtotal:</span>
          <span className="text-gray-900 font-semibold">$198.00</span>
        </div>
        <div className="flex justify-between py-2 mb-4">
          <span className="text-gray-800 font-bold">Estimated Delivery & Handling:</span>
          <span className="text-gray-900 font-semibold">Free</span>
        </div>
        <div className="flex justify-between  mt-4 border-t pt-2">
          <span className="text-gray-800 font-bold">Total:</span>
          <span className="text-gray-900 font-bold">$198.00</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartPage;
