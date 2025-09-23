import { Link } from "react-router-dom";
import BestSell from "../../../assets/Banner/best sell.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Bestsellers = () => {
  return (
    <section className="relative rounded-xl overflow-hidden shadow-2xl py-15 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center bg-gray-900">

      <img
        src={BestSell}
        alt="Bestsellers"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-fadeInUp">
           Best Selling Products
        </h2>
        <p className="text-gray-200 text-base sm:text-lg md:text-xl animate-fadeInUp delay-100">
          Discover the most loved products by our customers. Grab your favorites before they're gone!
        </p>

        <div className="flex justify-center">
          <Link to="/shop/sale">
            <button className="bg-gray-700 text-white px-4 py-3 rounded hover:bg-gray-800 hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease forwards;
          }
          .animate-fadeInUp.delay-100 { animation-delay: 0.1s; }
          .animate-fadeInUp.delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </section>
  );
};

export default Bestsellers;
