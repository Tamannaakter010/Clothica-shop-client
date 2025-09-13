
import { Link } from "react-router-dom";

const Deal = () => {
  const deals = [
    {
      id: 1,
      title: "Wedding Season Offer 🎉",
      originalPrice: 200,
      discountedPrice: 80, // 60% OFF
      link: "/shop/wedding",
      highlight: true,
      benefits: ["60% OFF", "Free Delivery", "bKash Cashback"],
    },
    {
      id: 2,
      title: "Summer Fashion Sale",
      originalPrice: 120,
      discountedPrice: 60,
      link: "/shop/summer-sale",
      benefits: ["Limited Time Offer", "Free Delivery"],
    },
    {
      id: 3,
      title: "Home Essentials",
      originalPrice: 80,
      discountedPrice: 40,
      link: "/shop/home-deals",
      benefits: ["Discounted Price", "Free Delivery"],
    },
    {
      id: 4,
      title: "Free Home Delivery",
      originalPrice: 150,
      discountedPrice: 0,
      link: "/shop/home-deals",
      benefits: ["Free Delivery on All Orders"],
    },
  ];

  return (
    <section className="py-8 px-3 sm:px-6 lg:px-8 bg-gray-50">
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(15px);
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

      <h2 className="text-lg font-bold text-center mb-6">🔥 Hot Deals</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className={`rounded-md shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp ${
                deal.highlight
                  ? "bg-red-100 border border-red-200"
                  : "bg-gray-100 border border-gray-200"
              }`}
              style={{ animationDelay: `${index * 0.15}s`, minHeight: "180px" }}
            >
              <div className="p-3 text-center flex flex-col justify-between h-full">
                <div>
                  <h3
                    className={`text-sm font-semibold mb-2 ${
                      deal.highlight ? "text-red-600" : "text-gray-800"
                    }`}
                  >
                    {deal.title}
                  </h3>

                  <div className="flex justify-center items-center gap-2 mb-2">
                    <span className="text-gray-400 line-through text-xs">
                      ${deal.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-red-600 font-bold text-sm">
                      ${deal.discountedPrice.toFixed(2)}
                    </span>
                  </div>

                  {/* Benefits */}
                  <ul className="text-[11px] text-gray-700 mb-2 space-y-0.5 min-h-[40px]">
                    {deal.benefits &&
                      deal.benefits.map((benefit, i) => (
                        <li key={i}>✅ {benefit}</li>
                      ))}
                  </ul>
                </div>

                <Link
                  to={deal.link}
                  className={`inline-block px-2 py-1 rounded-md text-xs font-medium transition ${
                    deal.highlight
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deal;
