import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCart } from "../../HomePage/Cart/CartContext"; 

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

  const items = [
    { id: 1, title: "Handmade Bracelet", description: "A colorful beaded bracelet.", images: [gift1] },
    { id: 2, title: "Clay Pot Decor", description: "Eco-friendly clay pot.", images: [gift2] },
    { id: 3, title: "Knitted Scarf", description: "Warm and cozy scarf.", images: [gift3] },
    { id: 4, title: "Wooden Ornament", description: "Hand-carved wooden piece.", images: [gift4] },
    { id: 5, title: "Decorative Candle", description: "Scented decorative candle.", images: [gift5] },
    { id: 6, title: "Wall Hanging", description: "Beautiful handmade wall hanging.", images: [gift6] },
    { id: 7, title: "Ceramic Vase", description: "Elegant ceramic vase.", images: [gift7] },
    { id: 8, title: "Photo Frame", description: "Stylish wooden photo frame.", images: [gift8] },
  ];

  const [imageIndexes, setImageIndexes] = useState(Array(items.length).fill(0));

  const handleMouseEnter = (index) => {
    setImageIndexes((prev) =>
      prev.map((val, i) =>
        i === index ? (val + 1) % items[i].images.length : val
      )
    );
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
    alert(`${item.title} added to cart!`);
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
              onClick={() => handleAddToCart(item)}
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
