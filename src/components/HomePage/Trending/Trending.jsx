/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";



import gift1 from "../../../assets/shirt/shirt1.jpg";
import gift2 from "../../../assets/gift & craft/gift & craft 2.jpg";
import gift3 from "../../../assets/gift & craft/gift & craft 3.jpg";
import gift4 from "../../../assets/gift & craft/gift & craft 4.jpg";
import gift5 from "../../../assets/gift & craft/gift & craft 5.jpg";
import gift6 from "../../../assets/gift & craft/gift & craft 6.jpg";

const Trending = ({ images }) => {
  const defaultImages = [gift1, gift2, gift3, gift4, gift5, gift6];
  const safeImages = images && images.length > 0 ? images : defaultImages;


  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="py-16 bg-gray-50">
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-extrabold text-center mb-12 text-orange-600 tracking-wide"
      >
         Trending Items
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {safeImages.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden bg-white group rounded-lg shadow-md cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={imgSrc}
              alt={`Trending item ${idx + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-4"
              onError={(e) => {
                console.error(`Failed to load image: ${imgSrc}`);
                e.target.src = "https://via.placeholder.com/150"; // Fallback image
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Trending;