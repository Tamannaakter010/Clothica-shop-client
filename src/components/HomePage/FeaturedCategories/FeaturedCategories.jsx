import { Link } from "react-router-dom";

const FeaturedCategories = ({ categories = [] }) => {
  const defaultCategories = [
    {
      id: 1,
      image: "https://i.ibb.co.com/5hXhmwGF/man.jpg",
      title: "Men's Clothing",
      link: "/shop/men",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/rRFfymGY/women.jpg",
      title: "Women's Fashion",
      link: "/shop/women",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/n94T897/weeding.jpg",
      title: "Wedding",
      link: "/shop/wedding",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/W4jxnwBJ/homedecor.jpg",
      title: "Home Decor",
      link: "/shop/homedecor",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/1JRVHknw/crafts.jpg",
      title: "Jewellery",
      link: "/shop/jewellery",
    },
    {
      id: 6,
      image: "https://i.ibb.co.com/YT8vtTbg/kids.jpg",
      title: "Kids",
      link: "/shop/kids",
    },
  ];

  const categoryData = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className="py-8 px-4 bg-gray-50">
      <style>
        {`
          @keyframes fadeSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeSlideUp {
            animation: fadeSlideUp 0.5s ease-out forwards;
          }
        `}
      </style>
      <h2 className="text-xl font-bold text-center mb-6">Featured Categories</h2>
      <div className="grid grid-cols-6 gap-4">
        {categoryData.map((category, index) => (
          <div
            key={category.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 hover:shadow-xl hover:border-blue-500 border-2 border-transparent animate-fadeSlideUp flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image Area - 80% */}
            <div className="flex-grow" style={{ flexBasis: "80%" }}>
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover"
              />
            </div>

            {/* Text Area - 20% */}
            <div
              className="p-2 text-center"
              style={{ flexBasis: "20%" }}
            >
              <h3 className="text-sm font-medium mb-1">{category.title}</h3>
              <Link
                to={category.link}
                className="inline-block bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 text-xs"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
