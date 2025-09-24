import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Latest = () => {
  return (
    <div className="mt-0 bg-gray-800 shadow-md  ">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-2 sm:px-6 lg:px-8 gap-2">
       {/* Social Media Icons */}
<div className="flex space-x-4 text-xl text-white">
  <a href="https://facebook.com" target="_blank" rel="noreferrer">
    <FaFacebook className="text-white hover:text-blue-600 transition-colors cursor-pointer" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <FaTwitter className="text-white hover:text-sky-500 transition-colors cursor-pointer" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <FaInstagram className="text-white hover:text-pink-500 transition-colors cursor-pointer" />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noreferrer">
    <FaYoutube className="text-white hover:text-red-600 transition-colors cursor-pointer" />
  </a>
</div>


        {/* Breaking News Marquee */}
        <div className="flex-1 mx-2 overflow-hidden">
          <marquee
            behavior="scroll"
            direction="left"
            className="text-white bg-gray-700 font-medium text-sm sm:text-base"
          >
            🚨 Breaking News: React 19 is coming soon! | 🎉 TailwindCSS v4 released with new features | 🌍 AI is transforming web development | 📈 Stock market hits new highs |
          </marquee>
        </div>

        {/* Language & Currency Select */}
        <div className="flex items-center ml-12 gap-4">
          <select className="border border-white rounded bg-gray-700 px-2 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>EN</option>
            <option>BN</option>
            <option>HI</option>
          </select>
          <select className="border border-white rounded bg-gray-700 px-2 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
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
