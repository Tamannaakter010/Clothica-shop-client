/* eslint-disable no-unused-vars */
import { useCart } from "../../HomePage/Cart/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";

import decor1 from "../../../assets/decor/vase1.jpg";
import decor2 from "../../../assets/decor/vase2.jpg";
import decor3 from "../../../assets/decor/vase3.jpg";
import decor4 from "../../../assets/decor/vase4.jpg";
import decor5 from "../../../assets/decor/vase5.jpg";
import decor6 from "../../../assets/decor/vase6.jpg";
import decor7 from "../../../assets/decor/vase7.jpg";
import decor8 from "../../../assets/decor/vase8.jpg";

const HomeDecor = () => {
  const { addToCart } = useCart();
  const [visibleDesc, setVisibleDesc] = useState(null);

  const items = [
    { id: 1, title: "Rustic Wall Shelf", description: "Handcrafted wooden shelf for modern homes.", image: decor1 },
    { id: 2, title: "Ceramic Vase", description: "Elegant vase with intricate patterns.", image: decor2 },
    { id: 3, title: "Candle Holder", description: "Stylish holder for a cozy ambiance.", image: decor3 },
    { id: 4, title: "Wall Art Frame", description: "Beautiful decorative frame for walls.", image: decor4 },
    { id: 5, title: "Decorative Bowl", description: "Perfect centerpiece for your table.", image: decor5 },
    { id: 6, title: "Indoor Plant Pot", description: "Chic planter for indoor plants.", image: decor6 },
    { id: 7, title: "Table Lamp", description: "Elegant lamp to brighten up your room.", image: decor7 },
    { id: 8, title: "Hanging Lantern", description: "Adds a rustic charm to any space.", image: decor8 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold text-center text-gray-800 mb-8"
      >
        Home Decor
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

export default HomeDecor;
