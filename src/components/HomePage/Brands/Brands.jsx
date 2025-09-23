
import Zara from "../../../assets/Brands/zara.png";
import PullBear from "../../../assets/Brands/pb.png";
import Nike from "../../../assets/Brands/nike.png";
import Asos from "../../../assets/Brands/atos.png";
import Burberry from "../../../assets/Brands/bl.png";
import Gucci from "../../../assets/Brands/gucci.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const brands = [
  { id: 1, name: "ZARA", img: Zara },
  { id: 2, name: "PULL&BEAR", img: PullBear },
  { id: 3, name: "NIKE", img: Nike },
  { id: 4, name: "ASOS", img: Asos },
  { id: 5, name: "BURBERRY", img: Burberry },
  { id: 6, name: "FOREVER 21", img: Gucci},
];

export default function Brands() {
  return (
    <section className=" bg-gray-50 py-6 ">
     <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl py-8 font-extrabold text-center text-gray-800 "
      >
        Shop By Brands
      </motion.h1>
      <div className="px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 ">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center border h-20 cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="max-h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
