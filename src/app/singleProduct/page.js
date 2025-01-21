import Image from 'next/image';
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'; // Importing the cart icon from React Icons

const singleProduct = () => {
    const imagesArray = [
        { img: "/images/product7.png" },
        { img: "/images/product8.png" },
        { img: "/images/featureProduct2.png" },
        { img: "/images/Product4.png" },
        { img: "/images/featureProduct3.png" },
        { img: "/images/featureProduct5.png" },
      ];

 
    return (
    <>
     <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row items-center md:space-x-6 bg-white shadow-lg rounded-lg p-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image
            src="/images/featureProduct2.png" 
            alt="Product Image" 
            className="w-full h-auto rounded-lg shadow-md"
            width={675}
            height={607}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Library Stool <br/> Chair</h2>
          <p className='text-white bg-[#029FAE] rounded-3xl w-32 p-3'>$20.00 USD</p>
          <p className="text-gray-700 mb-6 leading-relaxed lg:mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing          </p>
          <button 
      className="bg-gradient-to-r from-[#029FAE] to-[#027BAE] hover:from-[#027BAE] hover:to-[#029FAE] text-white px-4 py-2 rounded-lg shadow-lg transition duration-200 flex items-center space-x-2"
    >
      <FaShoppingCart className="text-lg" />
      
      <span>Add to Cart</span>
    </button>
        </div>
      </div>
    </div>
    <div>
  <h1 className="text-4xl md:text-2xl leading-tight font-title text-center font-bold mt-8 mb-4">
    Featured Products
  </h1>  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
    {imagesArray.map((data, index) => (
      <div
        key={index}
        className="w-full h-auto overflow-hidden rounded-lg shadow-md"
      >
        <Image
          src={data.img}
          alt={`Image ${index + 1}`}
          width={70}
          height={80}
          className="w-full h-auto object-cover"
        />
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default singleProduct
