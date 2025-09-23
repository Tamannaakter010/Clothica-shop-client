/* eslint-disable no-unused-vars */
import { useCart } from "../../HomePage/Cart/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

// Import local images
import sale1 from "../../../assets/sale/sale1.jpg";
import sale2 from "../../../assets/sale/sale2.jpg";
import sale3 from "../../../assets/sale/sale3.jpg";

const Sale = () => {
  const { addToCart } = useCart();
  const [visibleDesc, setVisibleDesc] = useState(null);

  const items = [
    { id: 1, title: "Discounted Dress", description: "Elegant dress now at 50% off.", image: sale1 },
    { id: 2, title: "Clearance Shoes", description: "Stylish shoes with huge discounts.", image: sale2 },
    { id: 3, title: "Sale Bag", description: "Trendy bag reduced for a limited time.", image: sale3 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold text-center text-gray-800 mb-8"
      >
        Sale
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-md cursor-pointer"
            onClick={() => setVisibleDesc(visibleDesc === item.id ? null : item.id)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
            />

            <button
              onClick={(e) => { e.stopPropagation(); addToCart(item); }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent text-white p-3 rounded-full hover:bg-gray-800 hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <FiShoppingCart size={20} />
            </button>

            {visibleDesc === item.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4 text-white"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
