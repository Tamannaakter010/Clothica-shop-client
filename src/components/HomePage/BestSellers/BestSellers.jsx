import { Link } from "react-router-dom";
import BestSell from "../../../assets/Banner/bestsell.jpg"

const Bestsellers = () => {
  return (
    <section className="relative rounded-xl overflow-hidden shadow-2xl py-15 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center bg-gray-900">
      {/* Background Image */}
      <img
        src={BestSell}
        alt="Bestsellers"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-fadeInUp">
          🔥 Best Selling Products
        </h2>
        <p className="text-gray-200 text-base sm:text-lg md:text-xl animate-fadeInUp delay-100">
          Discover the most loved products by our customers. Grab your favorites before they're gone!
        </p>
        <Link
          to="/shop/sale"
          className="mt-2 inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white font-semibold px-4 py-3 rounded-full text-base sm:text-lg md:text-xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl animate-fadeInUp delay-200"
        >
          Shop Now
        </Link>
      </div>

      {/* Animations */}
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
