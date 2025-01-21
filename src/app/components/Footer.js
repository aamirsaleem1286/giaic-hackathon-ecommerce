import Image from "next/image";
import React from "react";
import { FaTwitter, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lightgray py-8 sm:py-12">
      <div className="container mx-auto px-4">
        {/* Main Wrapper: Responsive Flexbox */}
        <div className="flex flex-wrap lg:gap-8 gap-4 items-start mb-8">
          {/* Company Logo Section */}
          <div className="lg:w-1/4 sm:w-full mb-4">
            <Image src="/images/Logo.png" width={200} height={120} />
            <p className="text-sm w-full text-gray-600 mt-2">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              Cras egestas purus.
            </p>
            {/* Social Media Links */}
            <div className="flex mt-2 space-x-4 text-gray-500">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="lg:w-[60%] md:w-full sm:w-full mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Category 1 */}
              <div className="flex flex-col">
                <h1 className="text-base font-medium text-[#9A9CAA] mb-2">Category</h1>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Sofa</a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Armchair</a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Wing Chair</a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Desk Chair</a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Wooden Chair</a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Park Bench</a>
                </div>
              </div>

              {/* Support */}
              <div className="flex flex-col">
                <h1 className="text-base font-medium text-[#9A9CAA] mb-2">Support</h1>
                <div className="flex flex-col space-y-2">
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Help & Support</a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Terms & Conditions</a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Privacy Policy</a>
                  <a href="#" className="text-sm text-gray-700 hover:text-blue-500 transition-colors">Help</a>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="flex flex-col">
                <h1 className="text-base font-medium text-[#9A9CAA] mb-2">Newsletter</h1>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                  />
                  <button className="bg-[#029FAE] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Image */}
        <div className="w-full mt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
  <p className="text-slate-500 text-center md:text-left">
    © 2021 - Blogy - Designed & Developed by Zakirsoft
  </p>
  <div className="flex justify-center">
    <Image src="/images/footpay.png" width={300} height={100} className="max-w-full h-auto" />
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
