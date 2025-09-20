import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // ✅ don’t forget this import
import { useCart } from "../../HomePage/Cart/CartContext"; 

const GiftsAndCrafts = () => {
  const { addToCart } = useCart();

  const items = [
    { id: 1, title: "Handmade Bracelet", description: "A colorful beaded bracelet.", images: ["https://i.ibb.co/W4jxnwBJ/homedecor.jpg"] },
    { id: 2, title: "Clay Pot Decor", description: "Eco-friendly clay pot.", images: ["https://i.ibb.co/5hXhmwGF/man.jpg"] },
    { id: 3, title: "Knitted Scarf", description: "Warm and cozy scarf.", images: ["https://i.ibb.co/YT8vtTbg/kids.jpg"] },
    { id: 4, title: "Wooden Ornament", description: "Hand-carved wooden piece.", images: ["https://i.ibb.co/rRFfymwGY/women.jpg"] },
  ];

  const [imageIndexes, setImageIndexes] = useState(Array(items.length).fill(0));

  const handleMouseEnter = (index) => {
    setImageIndexes((prev) =>
      prev.map((val, i) =>
        i === index ? (val + 1) % items[i].images.length : val
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
        Gifts & Crafts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <motion.img
              src={item.images[imageIndexes[index]]}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <button
              onClick={() => addToCart(item)}
              className="px-3 py-1 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GiftsAndCrafts;
