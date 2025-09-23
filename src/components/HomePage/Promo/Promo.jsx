import sampleImg from "../../../assets/Banner/black friday.jpg";
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <section className="py-8 px-4 sm:px-14 lg:px-16 bg-gray-800">
      <div className="flex flex-col lg:flex-row items-center gap-6">
       
        <div className="lg:w-1/2 text-left  md:lg:text-left   sm:text-center">
          <h2 className="text-2xl font-bold mb-4 text-white sm:text-center">
            Special Promotion
          </h2>
          <p className="text-gray-200 mb-4 italic font-semibold sm:text-center">
            Check out our amazing offers this season! High-quality products at
            unbeatable prices. Don’t miss out on limited-time deals.
          </p>
          <div className="flex justify-center sm:justify-center">
            <Link to="/shop/sale">
              <button className="bg-gray-700 text-white px-4 py-3 rounded hover:bg-gray-800 hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative animate-bounce-slow">
            <img
              src={sampleImg}
              alt="Promo"
              className="rounded-md w-auto h-70 object-cover block z-10 relative"
            />
            <div className="absolute top-6 left-6 w-[calc(100%+8px)] h-[calc(100%+8px)] border-8 border-gray-400 rounded-md -z-10"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Promo;
