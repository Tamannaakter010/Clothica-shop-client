import { Link } from "react-router-dom";

const Deal = () => {
  const deals = [
    {
      id: 1,
      title: "Wedding Season Offer 🎉",
      originalPrice: 200,
      discountedPrice: 80,
      link: "/shop/wedding",
      highlight: true,
      benefits: ["60% OFF", "Free Delivery"],
    },
    {
      id: 2,
      title: "Summer Fashion Sale",
      originalPrice: 120,
      discountedPrice: 60,
      link: "/shop/sale",
      benefits: ["Limited Time Offer", "Free Delivery"],
    },
    {
      id: 3,
      title: "Home Essentials",
      originalPrice: 80,
      discountedPrice: 40,
      link: "/shop/homedecor",
      benefits: ["Discounted Price", "Free Delivery"],
    },
    {
      id: 4,
      title: "Free Home Delivery",
      originalPrice: 150,
      discountedPrice: 0,
      link: "/shop/sale",
      benefits: ["Free Delivery on All Orders"],
    },
  ];

  return (
    <section className="py-6 px-2 sm:px-4 lg:px-8 bg-gray-50">
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.5s ease forwards;
          }
        `}
      </style>

      <h2 className="text-base font-bold text-center mb-4">🔥 Hot Deals</h2>

      <div className="flex justify-center overflow-visible">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
          {deals.map((deal, index) => {
            // Staggered layout: 2nd card up, 4th card down
            const extraTranslate =
              index === 1
                ? "-translate-y-4 sm:-translate-y-6"
                : index === 3
                ? "translate-y-4 sm:translate-y-6"
                : "";

            return (
              <div
                key={deal.id}
                className={`rounded-md shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp ${extraTranslate} ${
                  deal.highlight
                    ? "bg-red-100 border border-red-200"
                    : "bg-gray-100 border border-gray-200"
                }`}
                style={{ animationDelay: `${index * 0.15}s`, minHeight: "90px", maxWidth: "120px" }}
              >
                <div className="p-1 text-center flex flex-col justify-between h-full">
                  <div>
                    <h3
                      className={`text-[10px] font-semibold mb-1 ${
                        deal.highlight ? "text-red-600" : "text-gray-800"
                      }`}
                    >
                      {deal.title}
                    </h3>

                    <div className="flex justify-center items-center gap-1 mb-1">
                      <span className="text-gray-400 line-through text-[9px]">
                        ${deal.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-red-600 font-bold text-[10px]">
                        ${deal.discountedPrice.toFixed(2)}
                      </span>
                    </div>

                    <ul className="text-[8px] text-gray-700 mb-1 space-y-0.5 min-h-[18px]">
                      {deal.benefits &&
                        deal.benefits.map((benefit, i) => <li key={i}>✅ {benefit}</li>)}
                    </ul>
                  </div>

                  <Link
                    to={deal.link}
                    className={`inline-block px-1 py-0.5 rounded-md text-[9px] font-medium transition ${
                      deal.highlight
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Deal;
