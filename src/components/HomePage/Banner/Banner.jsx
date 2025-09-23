/* eslint-disable no-unused-vars */

import "./Banner.css"; 
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Banner1 from "../../../assets/Banner/pexels-olenagoldman-1021693-removebg-preview.png";
import Banner2 from "../../../assets/Banner/33.png";
import Banner3 from "../../../assets/Banner/44.png";


const slides = [
  {
    title: "Welcome to Our Website",
    description: "We provide amazing services to make your life easier.",
    image: Banner1,
  },
  {
    title: "Innovative Solutions",
    description: "Our team delivers creative solutions for your business.",
    image: Banner2,
  },
  {
    title: "Grow Your Business",
    description: "We help you achieve success with our expertise.",
    image: Banner3,
  },
];

const AnimatedBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider  className="custom-slider" {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
           className="mt-5 w-full h-screen flex flex-col md:flex-row items-center justify-between 
           bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-300"

            style={{ marginTop: "5rem" }}
          >
            {/* Left Text (40%) */}
            <div className=" ml-10 md:w-2/5 text-center md:text-left ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className=" text-4xl md:text-5xl font-bold ">{slide.title}</h1>
                  <p className="text-lg md:text-xl ">{slide.description}</p>
               <button className="bg-gray-700 text-white px-4 py-3 rounded 
                   hover:bg-gray-800 hover:scale-105 
                   active:scale-95 
                   transition-transform duration-300 ease-in-out">
  Learn More
</button>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Image (60%) */}
            <div className="md:w-3/5  flex justify-center ">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-auto object-contain rounded-lg  max-w-4xl border-none"
                style={{ maxHeight: "calc(113vh - 5rem)", border: "none !important" }}
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default AnimatedBanner;