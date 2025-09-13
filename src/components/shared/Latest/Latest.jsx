import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Latest = () => {
  return (
    <div className=" bg-gray-600 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex space-x-4 text-xl text-white">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </a>
        </div>
        <div className="flex-1 mx-4 overflow-hidden">
          <marquee behavior="scroll" direction="left" className="text-white font-medium text-sm sm:text-base">
            🚨 Breaking News: React 19 is coming soon! | 🎉 TailwindCSS v4 released with new features | 🌍 AI is transforming web development | 📈 Stock market hits new highs |
          </marquee>
        </div>
        <div className="flex items-center text-white gap-2 space-x-2">
          <select className="border rounded bg-gray-500 px-2 py-1 text-sm focus:outline-none">
            <option>EN</option>
            <option>BN</option>
            <option>HI</option>
          </select>
          <select className="border bg-gray-500 rounded px-2 py-1 text-sm focus:outline-none">
            <option>USD</option>
            <option>EUR</option>
            <option>BDT</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Latest;