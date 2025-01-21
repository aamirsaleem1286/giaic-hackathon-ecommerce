import Image from 'next/image';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // React Icons for the cart

const AboutPage = () => {
    const data = [
        {
          id: 1,
          icon: "/images/icon1.png",
          title: "Next day as standard",
          description: "Order before 3pm and get your order the next day as standard",
        },
        {
          id: 2,
          icon:"/images/icon2.png" ,
          title: "Made by true artisans",
          description: "Handmade crafted goods made with real passion and craftmanship",
        },
        {
          id: 3,
          icon: "/images/icon3.png",
          title: "Unbeatable prices",
          description: "For our materials and quality you wont find better prices anywhere",
        },
        {
          id: 4,
          icon: "/images/icon4.png",
          title: "Recycled packaging",
          description: "We use 100% recycled to ensure our footprint is more manageable",
        },
      ];
    const categoryArray = [
        { img: "/images/about1.png" ,width:630,height:462},
        { img: "/images/about2.png",width:305,height:462},
        { img: "/images/about3.png" ,width:305,height:462}
      ];
    return (
       <> 
    <div className="flex flex-col gap-12 md:flex-row items-center justify-center min-h-screen">
      {/* Text Section */}
      <div className="bg-[#007580] lg:ml-[60px] text-center md:text-left md:w-1/2 p-6 md:p-12">
        <h1 className="text-white text-3xl font-bold mb-4">About Us - Comforty</h1>
        <p className="text-white mb-6">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort. 
          Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
        </p>
        <button className="bg-[#65aeb4] text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2 mx-auto md:mx-0">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2">
        <Image
          src="/images/aboutImage.png"
          alt="About Us"
          width={380}
          height={284}
          className="object-cover"
        />
      </div>
    </div>
    
    <h1 className="text-4xl m-12 md:text-xl leading-tight font-title font-bold mb-4 text-center">What makes our Brand Different </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mt-4">
  {data.map((item) => (
    <div key={item.id} className="space-y-2 lg:ml-4">
      {/* Icon */}
      <Image
        className="text-[#007580]"
        src={item.icon}
        width={40}
        height={30}
      />

      {/* Title */}
      <h3 className="text-lg font-bold text-left text-[#007580]">{item.title}</h3>

      {/* Description */}
      <p className="text-sm text-left text-[#007580]">{item.description}</p>
    </div>
  ))}
</div>



    <h1 className="text-4xl m-12 md:text-xl leading-tight font-title font-bold  mb-4">Our Popular Products </h1>
<div className="flex flex-wrap justify-around  gap-4 p-2">
  {categoryArray.map((data, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <Image 
        src={data.img} 
        alt={`Image ${index + 1}`} 
        width={424} 
        height={424} 
        style={{ objectFit: 'cover' }} 
      />
    </div>
  ))}
</div>
    
    </>
  );
};

export default AboutPage;
