import "./Banner.css"; 
import Slider from "react-slick";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Banner1 from "../../../assets/Banner/pexels-olenagoldman-1021693-removebg-preview.png";
import Banner2 from "../../../assets/Banner/33.png";
import Banner3 from "../../../assets/Banner/44.png";

const slides = [
  { title: "Welcome to Our Website", description: "We provide amazing services to make your life easier.", image: Banner1 },
  { title: "Innovative Solutions", description: "Our team delivers creative solutions for your business.", image: Banner2 },
  { title: "Grow Your Business", description: "We help you achieve success with our expertise.", image: Banner3 },
];

const Banner = () => {
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
    <Slider className="custom-slider" {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="mt-5 w-full flex flex-col md:flex-row items-center justify-between 
            bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-300 p-4 md:p-10"
          >
            {/* Left Text */}
            <div className="w-full md:w-2/5 text-center md:text-left mb-6 md:mb-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.title}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{slide.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl mt-2">{slide.description}</p>
                  <button className="mt-4 bg-gray-700 text-white px-4 py-3 rounded 
                    hover:bg-gray-800 hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out">
                    Learn More
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-3/5 flex justify-center">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md md:max-w-4xl h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
