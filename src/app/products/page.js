import Image from 'next/image';
import React from 'react'

const ProductPage = () => {
    const productPage = [
        { img: "/images/featureProduct6.png",title:"Library Stool Chair", titleBg:"#007580",Price:"$20",cartsrc:"/images/AddCartbg.png" },
        { img: "/images/featureProduct2.png", title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/featureProduct3.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/featureProduct4.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/product7.png",title:"Library Stool Chair", titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCartbg.png" },
        { img: "/images/Product2.png", title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/Product3.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/Product4.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/Product1.png",title:"Library Stool Chair", titleBg:"#007580",Price:"$20",cartsrc:"/images/AddCartbg.png" },
        { img: "/images/featureProduct2.png", title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/featureProduct3.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},
        { img: "/images/featureProduct5.png" ,title:"Library Stool Chair",titleBg:"#272343",Price:"$20",cartsrc:"/images/AddCart.png"},  
    ];

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
   
   <div>
  <h1 className="text-4xl m-12 md:text-xl leading-tight font-title  font-bold mb-4">All Products</h1>
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

    </div>
    
    <div className="bg-[#1E28320D] p-4 md:p-2 h-auto">
  {/* Subscription Heading */}
  <h1 className="text-4xl md:text-2xl leading-tight font-title text-center font-bold mb-6">
    Or subscribe to the newsletter
  </h1>

  {/* Input Section */}
  <div className="flex gap-4 justify-center">
    <input
      type="text"
      className="border-none outline-none font-bold lg:w-[400px] sm:w-full bg-transparent px-4 py-2"
      placeholder="Enter text"
    />
    <button className="bg-none   px-4 py-2 border font-bold underline decoration-black  text-black hover:bg-gray-200 transition">
      Submit
    </button>
  </div>

  {/* Instagram Heading */}
  <h1 className="text-4xl md:text-2xl leading-tight font-title font-bold mt-8 mb-4">
    Follow products and discounts on Instagram
  </h1>

  {/* Image Grid */}
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

export default ProductPage
