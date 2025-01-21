import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt , FaRegClock } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto max-w-7xl bg-white shadow-lg rounded-lg p-8">
        {/* Header Section */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Get In Touch With Us
        </h1>
        <p className="text-[#9F9F9F] text-center mb-6 leading-relaxed">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        

        {/* Main Section - Split into Address & Contact Form */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-8 lg:space-y-0">
          {/* Left Section - Address Info */}
          <div className="lg:w-1/2 rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center space-x-2">
              <FaMapMarkerAlt className="text-black text-xl" />
              <span>Address</span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              236 5th SE Avenue, New York NY10000, United States
            </p>
            <div className="text-gray-600 mb-4 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center space-x-2">
              <FaPhoneAlt  className="text-black text-xl" />
              <span>Phone</span>
            </h2><p> Mobile: +84 546-6789</p>
              <p>Hotline: +84 456-6789</p>
            </div>
            <div className="text-gray-600 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center space-x-2">
              <FaRegClock className="text-black text-xl" />
              <span>Working Time</span>
            </h2>              <p>Mon - Fri: 9:00 - 22:00</p>
              <p>Sat - Sun: 9:00 - 21:00</p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:w-1/2  rounded-lg p-6 shadow-md">
            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#029FAE]"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#029FAE]"
                  placeholder="Enter your email"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-gray-700 text-sm mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#029FAE]"
                  placeholder="Enter the subject"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-gray-700 text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#029FAE]"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#029FAE] w-[130px] text-white px-6 py-2 rounded-md hover:bg-[#005f63] transition duration-200"
                >
                  Submit
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
