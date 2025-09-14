import { useMemo } from "react";
import { motion } from "framer-motion";

const GiftsAndCrafts = () => {
  const items = [
    {
      id: 1,
      title: "Handmade Bracelet",
      description: "A colorful beaded bracelet perfect for any occasion.",
      image: "https://i.ibb.co/W4jxnwBJ/homedecor.jpg",
    },
    {
      id: 2,
      title: "Clay Pot Decor",
      description: "Eco-friendly clay pot painted with unique designs.",
      image: "https://i.ibb.co/W4jxnwBJ/homedecor.jpg",
    },
    {
      id: 3,
      title: "Knitted Scarf",
      description: "Warm and cozy scarf made with soft yarn.",
      image: "https://i.ibb.co/W4jxnwBJ/homedecor.jpg",
    },
    {
      id: 4,
      title: "Wooden Ornament",
      description: "Hand-carved wooden piece for holiday decor.",
      image: "https://i.ibb.co/W4jxnwBJ/homedecor.jpg",
    },
  ];

  // Shuffle items randomly on every render
  const shuffledItems = useMemo(() => {
    return [...items].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Gifts & Crafts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shuffledItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GiftsAndCrafts;
