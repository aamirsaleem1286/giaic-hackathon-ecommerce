import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
    const imagesArray = [
        { img: "/images/Logo1.png" },
        { img: "/images/Logo2.png" },
        { img: "/images/Logo3.png" },
        { img: "/images/Logo4.png" },
        { img: "/images/Logo5.png" },
        { img: "/images/Logo6.png" },
        { img: "/images/Logo7.png" },
      ];
      const featureArray = [
        { img: "/images/featureProduct1.png",title:"Library Stool Chair", titleBg:"#007580",Price:"$20",cartsrc:"/images/AddCartbg.png" },
        { img: "/images/featureProduct2.png", title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/featureProduct3.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/featureProduct4.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},

      ];

      const categoryArray = [
        { img: "/images/Category1.png" },
        { img: "/images/Category2.png" },
        { img: "/images/Category3.png" },
      ];

      const productPage = [
        { img: "/images/featureProduct1.png",title:"Library Stool Chair", titleBg:"#007580",Price:"$20",cartsrc:"/images/AddCartbg.png" },
        { img: "/images/featureProduct2.png", title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/featureProduct3.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/featureProduct4.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/Product1.png",title:"Library Stool Chair", titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png" },
        { img: "/images/Product2.png", title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/Product3.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/Product4.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
      ];

    return (
    <>
    <div className="bg-[#F0F2F3] flex flex-col md:flex-row items-center justify-between min-h-screen p-8">
  {/* Left Text Section */}
  <div className="flex-1 text-left lg:ml-[70px]  w-full md:w-1/2 mb-8 md:mb-0">
  <p className="text-base font-title md:text-lg text-gray-700 mb-6">
  Welcome to chairy
    </p>
    <h1 className="text-3xl md:text-[4.25rem] leading-tight font-title font-bold mb-4">Best Furniture 
Collection for your
interior.</h1>
 
    <button className="bg-[#029FAE] text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
  Shop Now
  <FaArrowRight />
</button>
  </div>

  {/* Right Image Section */}
  <div className="flex-1 flex justify-center  md:w-1/2">
  <Image
    src="/images/ProductImage.png"
    alt="Sample"
    width={434} 
    height={584} 
   
  />
</div>

</div>


{/* //company logo image */}
<div className="flex flex-wrap justify-around gap-4 p-2">
  {imagesArray.map((data, index) => (
    <div key={index} className="w-[140px] h-[120px] md:w-[140px] md:h-[120px] sm:w-[100px] sm:h-[80px]">
      <Image 
        src={data.img} 
        alt={`Image ${index + 1}`} 
        width={140} 
        height={120} 
        style={{ objectFit: 'cover' }} 
      />
    </div>
  ))}
</div>

{/* //features product */}
<h1 className="text-4xl m-12 md:text-xl leading-tight font-title font-bold mb-4">Top categories</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-2">
  {featureArray.map((data, index) => (
    <div key={index}>
      <Image 
        src={data.img} 
        alt={`Image ${index + 1}`} 
        width={280} 
        height={280} 
        style={{ objectFit: 'cover' }} 
      />
<h1 className={`ml-3 mt-2 `}   style={{ color: data.titleBg }}>{data.title}</h1>
<div className='flex justify-between'>
        <p className='ml-3 text-xl font-bold'>{data.Price}</p>
        <Image src={data.cartsrc} width={40} height={40}/>
</div>
    </div>
  ))}
</div>


{/* //categories product */}
<h1 className="text-4xl m-12 md:text-xl leading-tight font-title font-bold mb-4">Top categories</h1>
<div className="flex flex-wrap justify-around gap-4 p-2">
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

{/* our product */}
<h1 className="text-4xl m-12 md:text-xl leading-tight font-title text-center font-bold mb-4">Our Products</h1>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-2">
  {productPage.map((data, index) => (
    <div key={index}>
      <Image 
        src={data.img} 
        alt={`Image ${index + 1}`} 
        width={280} 
        height={280} 
        style={{ objectFit: 'cover' }} 
      />
<h1 className={`ml-3 mt-2 `}   style={{ color: data.titleBg }}>{data.title}</h1>
<div className='flex justify-between'>
        <p className='ml-3 text-xl font-bold'>{data.Price}</p>
        <Image src={data.cartsrc} width={40} height={40}/>
</div>
    </div>
  ))}
</div>
    </>
  )
}

export default HeroSection
