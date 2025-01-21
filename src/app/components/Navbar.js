"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck } from "react-icons/fa";
import { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <>
<div className="flex flex-col md:flex-row justify-around bg-[#272343] items-center p-4 md:p-6">
  <div className="flex items-center mb-4 md:mb-0">
    <h3 className="text-sm md:text-medium font-bold text-left text-white flex items-center gap-4">
      <FaCheck size={20} />
      Free shipping on all orders over $50
    </h3>
  </div>
  <Link href="/">
    <Image src="/images/Link.png" alt="Logo" width={140} height={50} />
  </Link>
</div>



    <div className='flex justify-between lg:mx-12'>
            <Image src="/images/Logo.png" width={140} height={30} />
            <Image src="/images/UserLinks.png" width={120} height={60} />

    </div>
    <nav className="text-[#636270] py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 relative">
        
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={toggleMenu}
        >
          {mobileMenuOpen ? (
            <HiX className="text-[#007580]" />
          ) : (
            <HiMenu className="text-[#007580]" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" className="hover:text-[#007580] text-bold font-title text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="hover:text-[#007580] text-bold font-title text-xl">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-[#007580] text-bold font-title text-xl">
              Product
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-[#007580] text-bold font-title text-xl">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#007580] text-bold font-title text-xl">
              About
            </Link></li>
            <li><Link href="/cart" className="hover:text-[#007580] text-bold font-title text-xl">
              cart
            </Link>
          </li>
          <li><Link href="/singleProduct" className="hover:text-[#007580] text-bold font-title text-xl">
              Single Product
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu - Appears on the left side */}
        {mobileMenuOpen && (
          <ul className="md:hidden absolute top-14 left-4 bg-white shadow-lg rounded-lg w-48 py-2 z-50 space-y-2">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:text-[#007580] text-bold font-title"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="block px-4 py-2 hover:text-[#007580] text-bold font-title"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block px-4 py-2 hover:text-[#007580] text-bold font-title"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="block px-4 py-2 hover:text-[#007580] text-bold font-title"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 hover:text-[#007580] text-bold font-title"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="block px-4 py-2 hover:text-[#007580] text-bold font-title"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link
                href="/singleProduct"
                className="block px-4 py-2 hover:text-[#007580] text-bold font-title"
              >
                Single Product 
              </Link>
            </li>
          </ul>
        )}

        {/* Contact Info Section */}
        <div className="hidden md:flex text-lg font-bold text-[#636270] items-center">
          Contact: <p className="text-[#272343] ml-1">(808) 555-0111</p>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
