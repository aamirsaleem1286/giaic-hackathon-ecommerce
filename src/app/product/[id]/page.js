"use client"
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { notFound } from "next/navigation"; // Use next/navigation if in app directory

const ProductPage = async ({ params }) => {
  const { id } = params;

  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    price,
    imageUrl,
    description
  }`;

  const product = await client.fetch(query, { id });

  if (!product) {
    return notFound();
  }

  const handleAddToCart = () => {
    // Get existing cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the product to the cart
    cart.push(product);

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
 
    window.location.href="/cart";


    // Redirect to cart page
  };

  return (
    <div className="flex flex-col items-center px-6 py-10 sm:flex-row sm:items-start sm:space-x-8">
      <div className="flex-shrink-0">
        <Image
          src={product.imageUrl || "/placeholder-image.png"}
          alt={product.title}
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col mt-6 sm:mt-0">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-lg font-semibold text-gray-700 mb-6">
          <span className="text-gray-500">Price:</span> ${product.price}
        </p>
        <button
          onClick={handleAddToCart}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200 w-[30%]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
