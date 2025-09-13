import sampleImg from "../../../assets/Banner/black friday.jpg";

const Promo = () => {
  return (
    <section className="py-8 px-14 lg:px-16 bg-black">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Left Text */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-2xl font-bold mb-4 text-white   ">
            Special Promotion
          </h2>
          <p className="text-gray-200 mb-4 italic font-semibold">
            Check out our amazing offers this season! High-quality products at
            unbeatable prices. Don’t miss out on limited-time deals.
          </p>
          <button className="px-4 py-2 rounded-full bg-blue-400 text-white font-bold transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
  Shop Now
</button>

        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative animate-bounce-slow">
            <img
              src={sampleImg}
              alt="Promo"
              className="rounded-md w-auto h-70 object-cover block z-10 relative"
            />
            {/* Offset Border */}
            <div className="absolute top-6 left-6 w-[calc(100%+8px)] h-[calc(100%+8px)] border-8 border-gray-400 rounded-md -z-10"></div>
          </div>
        </div>
      </div>

      {/* Custom animation */}
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
