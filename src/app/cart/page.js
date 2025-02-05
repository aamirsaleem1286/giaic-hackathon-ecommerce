"use client";

import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";

const CartPage = () => {
  const { isSignedIn, user } = useUser();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isSignedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">You must sign in to proceed.</h1>
        <SignInButton />
      </div>
    );
  }

  const proceedToPayment = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Redirect to payment page
    window.location.href="/payment";
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="border p-4 mb-2">
            <Image src={product.imageUrl} alt={product.title} width={50} height={50} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))
      )}

      <button onClick={proceedToPayment} className="bg-blue-500 text-white px-4 py-2 mt-4">
        Proceed to Payment
      </button>

      <div className="mt-4">
        <SignOutButton />
      </div>
    </div>
  );
};

export default CartPage;
