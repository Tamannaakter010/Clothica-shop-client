
import { Link } from "react-router-dom";

const Bestsellers = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 rounded-xl overflow-hidden shadow-lg py-16 px-6 sm:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
    
      <img
        src="https://i.ibb.co.com/TBwdm8Wh/pexels-karolina-grabowska-5650041.jpg"
        alt="Bestsellers"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />


      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black animate-fadeInUp">
          🔥 Best seller Products
        </h2>
        <p className="text-black text-sm sm:text-base md:text-lg max-w-2xl animate-fadeInUp">
          Discover the most loved products by our customers. Grab your favorites before they're gone!
        </p>
        <Link
          to="/shop/sale"
          className="mt-2 inline-block bg-white text-orange-500 font-semibold px-6 py-2 rounded-full text-sm sm:text-base md:text-lg transition hover:bg-orange-100"
        >
          Shop Now
        </Link>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Bestsellers;
