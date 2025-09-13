import { Link } from "react-router-dom";

const FeaturedCategories = ({ categories = [] }) => {
  const defaultCategories = [
    { id: 1, image: "https://i.ibb.co/5hXhmwGF/man.jpg", title: "Men's Clothing", link: "/shop/men" },
    { id: 2, image: "https://i.ibb.co/rRFfymGY/women.jpg", title: "Women's Fashion", link: "/shop/women" },
    { id: 3, image: "https://i.ibb.co/n94T897/weeding.jpg", title: "Wedding", link: "/shop/wedding" },
    { id: 4, image: "https://i.ibb.co/W4jxnwBJ/homedecor.jpg", title: "Home Decor", link: "/shop/homedecor" },
    { id: 5, image: "https://i.ibb.co/rRFfymGY/women.jpg", title: "Jewellery", link: "/shop/jewellery" },
    { id: 6, image: "https://i.ibb.co/YT8vtTbg/kids.jpg", title: "Kids", link: "/shop/kids" },
  ];

  const categoryData = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className="py-8 px-4 bg-gray-50">
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlideUp {
          animation: fadeSlideUp 0.6s ease-out forwards;
        }
      `}</style>

      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">Featured Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categoryData.map((category, index) => {
          // Random span for mosaic effect
          const colSpan = [1, 1, 2][Math.floor(Math.random() * 3)];
          const rowSpan = [1, 1, 2][Math.floor(Math.random() * 3)];

          return (
            <div
              key={category.id}
              className={`relative bg-white rounded-xl shadow-md overflow-hidden border-2 border-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-gray-400 animate-fadeSlideUp`}
              style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
                <h5 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">{category.title}</h5>
                <Link
                  to={category.link}
                  className="inline-block bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-800 text-white text-xs sm:text-sm"
                >
                  Explore
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCategories;
