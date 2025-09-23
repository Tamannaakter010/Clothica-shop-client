import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCart } from "../../HomePage/Cart/CartContext"; 
import { FiShoppingCart } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import gift1 from "../../../assets/gift & craft/gift & craft 1.jpg";
import gift2 from "../../../assets/gift & craft/gift & craft 2.jpg";
import gift3 from "../../../assets/gift & craft/gift & craft 3.jpg";
import gift4 from "../../../assets/gift & craft/gift & craft 4.jpg";
import gift5 from "../../../assets/gift & craft/gift & craft 5.jpg";
import gift6 from "../../../assets/gift & craft/gift & craft 6.jpg";
import gift7 from "../../../assets/gift & craft/gift & craft 7.jpg";
import gift8 from "../../../assets/gift & craft/gift & craft 8.jpg";

const GiftsAndCrafts = () => {
  const { addToCart } = useCart();
  const [visibleDesc, setVisibleDesc] = useState(null);

  const items = [
    { id: 1, title: "Handmade Bracelet", description: "A colorful beaded bracelet.", image: gift1 },
    { id: 2, title: "Clay Pot Decor", description: "Eco-friendly clay pot.", image: gift2 },
    { id: 3, title: "Knitted Scarf", description: "Warm and cozy scarf.", image: gift3 },
    { id: 4, title: "Wooden Ornament", description: "Hand-carved wooden piece.", image: gift4 },
    { id: 5, title: "Decorative Candle", description: "Scented decorative candle.", image: gift5 },
    { id: 6, title: "Wall Hanging", description: "Beautiful handmade wall hanging.", image: gift6 },
    { id: 7, title: "Ceramic Vase", description: "Elegant ceramic vase.", image: gift7 },
    { id: 8, title: "Photo Frame", description: "Stylish wooden photo frame.", image: gift8 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold text-center text-gray-800 mb-8"
      >
        Gift & Craft
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-md cursor-pointer"
            onClick={() => setVisibleDesc(visibleDesc === item.id ? null : item.id)}
          >
            <div className="relative group">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105 group-hover:brightness-75"
              />

              <button
                onClick={(e) => { e.stopPropagation(); addToCart(item); }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent text-white p-3 rounded-full hover:bg-gray-800 hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <FiShoppingCart size={20} />
              </button>

              <motion.a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <FaInstagram className="text-white text-3xl bg-black/60 p-2 rounded-full cursor-pointer hover:bg-orange-600 transition" />
              </motion.a>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftsAndCrafts;
