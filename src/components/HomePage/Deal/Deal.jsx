import { Link } from "react-router-dom";

const Deal = () => {
  const deals = [
    {
      id: 1,
      title: "Wedding Season Offer 🎉",
      originalPrice: 200,
      discountedPrice: 80,
      link: "/shop/wedding",
      benefits: ["60% OFF", "Free Delivery"],
      bg: "bg-pink-100 border-pink-200",
      btn: "bg-pink-500 hover:bg-pink-600 text-white",
      text: "text-pink-700",
    },
    {
      id: 2,
      title: "Summer Fashion Sale",
      originalPrice: 120,
      discountedPrice: 60,
      link: "/shop/sale",
      benefits: ["Limited Time Offer", "Free Delivery"],
      bg: "bg-yellow-100 border-yellow-200",
      btn: "bg-yellow-500 hover:bg-yellow-600 text-white",
      text: "text-yellow-700",
    },
    {
      id: 3,
      title: "Home Essentials",
      originalPrice: 80,
      discountedPrice: 40,
      link: "/shop/homedecor",
      benefits: ["Discounted Price", "Free Delivery"],
      bg: "bg-green-100 border-green-200",
      btn: "bg-green-500 hover:bg-green-600 text-white",
      text: "text-green-700",
    },
    {
      id: 4,
      title: "Free Home Delivery",
      originalPrice: 150,
      discountedPrice: 0,
      link: "/shop/sale",
      benefits: ["Free Delivery on All Orders"],
      bg: "bg-blue-100 border-blue-200",
      btn: "bg-blue-500 hover:bg-blue-600 text-white",
      text: "text-blue-700",
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

      <h2 className="text-sm font-bold text-center mb-4">🔥 Hot Deals</h2>

      <div className=" text-sm font-light flex justify-center overflow-visible">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
          {deals.map((deal, index) => {
            const extraTranslate =
              index === 1
                ? "-translate-y-3 sm:-translate-y-4"
                : index === 3
                ? "translate-y-3 sm:translate-y-4"
                : "";

            return (
              <div
                key={deal.id}
                className={`rounded-md shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fadeInUp ${extraTranslate} ${deal.bg}`}
                style={{ animationDelay: `${index * 0.15}s`, minHeight: "85px", maxWidth: "110px" }}
              >
                <div className="p-1 text-center flex flex-col justify-between h-full">
                  <div>
                    <h3 className={`text-[5px] font-semibold mb-0.5 ${deal.text}`}>
                      {deal.title}
                    </h3>

                    <div className="flex justify-center items-center gap-0.5 mb-0.5">
                      <span className="text-gray-400 line-through text-[8px]">
                        ${deal.originalPrice.toFixed(2)}
                      </span>
                      <span className={`font-bold text-[9px] ${deal.text}`}>
                        ${deal.discountedPrice.toFixed(2)}
                      </span>
                    </div>

                    <ul className="text-[7px] text-gray-700 mb-1 space-y-0.5 min-h-[16px]">
                      {deal.benefits &&
                        deal.benefits.map((benefit, i) => (
                          <li key={i}>✅ {benefit}</li>
                        ))}
                    </ul>
                  </div>

                  <Link
                    to={deal.link}
                    className={`inline-block px-1 py-0.5 rounded-md text-[8px] font-medium transition ${deal.btn}`}
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