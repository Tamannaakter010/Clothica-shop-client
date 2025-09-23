import { useCart } from "../../HomePage/Cart/CartContext";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi"; // Import cart icon

// Import local images
import shirt1 from "../../../assets/shirt/shirt1.jpg";
import jacket1 from "../../../assets/shirt/shirt2.jpg";
//import suit1 from "../../../assets/shirt/shirt3.jpg";
import sneakers1 from "../../../assets/shirt/shirt3.jpg";

const Men = () => {
  const { addToCart } = useCart();
  const [visibleDesc, setVisibleDesc] = useState(null);

  const items = [
    { id: 1, title: "Slim Fit Shirt", description: "Stylish shirt for a sharp look.", image: shirt1 },
    { id: 2, title: "Leather Jacket", description: "Rugged leather jacket for all seasons.", image: jacket1 },
    //{ id: 3, title: "Formal Suit", description: "Tailored suit for business or events.", image: suit1 },
    { id: 4, title: "Casual Sneakers", description: "Comfortable sneakers for daily wear.", image: sneakers1 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-extrabold text-center text-gray-800 mb-8"
      >
        Men
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-md cursor-pointer"
            onClick={() => setVisibleDesc(visibleDesc === item.id ? null : item.id)}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Add to Cart icon button */}
           
<button
  onClick={(e) => { e.stopPropagation(); addToCart(item); }}
  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent text-white p-3 rounded-full hover:bg-gray-800 hover:scale-110 transition-transform duration-300 ease-in-out"
>
  <FiShoppingCart size={20} />
</button>

            {/* Description overlay */}
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

export default Men;
