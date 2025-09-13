import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = ({ products = [] }) => {
  const defaultProducts = [
    { id: 1, image: "https://i.ibb.co.com/rRFfymGY/women.jpg", title: "Men's Shirt", link: "/shop/men" },
    { id: 2, image: "https://i.ibb.co.com/rRFfymGY/women.jpg", title: "Women's Dress", link: "/shop/women" },
    { id: 3, image: "https://i.ibb.co/RppHv7xB/crafts.jpg", title: "Smartwatch", link: "/shop/electronics" },
    { id: 4, image: "https://i.ibb.co/RppHv7xB/crafts.jpg", title: "Decor Vase", link: "/shop/homedecor" },
    { id: 5, image: "https://i.ibb.co.com/rRFfymGY/women.jpg", title: "Necklace", link: "/shop/jewellery" },
    { id: 6, image: "https://i.ibb.co.com/rRFfymGY/women.jpg", title: "Kids Toy", link: "/shop/kids" },
  ];

  const productData = products.length > 0 ? products : defaultProducts;

  return (
    <section className="py-8 px-4 bg-gray-50 flex flex-col items-center">
      <style>
        {`
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeSlideUp { animation: fadeSlideUp 0.5s ease-out forwards; }
          .card-container:hover .card-image { display: none; }
          .card-container:hover .card-content { display: flex; }
        `}
      </style>

      <h2 className="text-2xl font-bold text-center mb-6">New Arrivals</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl w-full justify-center">
        {productData.map((product, index) => (
          <div
            key={product.id}
            className="card-container bg-white rounded-full shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-110 hover:rotate-2 animate-fadeSlideUp"
            style={{ animationDelay: `${index * 0.1}s`, aspectRatio: '1 / 1', width: '150px' }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="card-image w-full h-full object-cover rounded-full"
            />
            <div className="card-content hidden flex-col items-center justify-center w-full h-full p-2 text-center   rounded-full">
              <h3 className="text-sm sm:text-sm md:text-sm text-black mb-2">{product.title}</h3>
              <Link
                to={product.link}
                className="inline-block border border-white px-3 py-1 rounded-full text-sm sm:text-sm md:text-sm hover:bg-transparent transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
