import { useState } from "react";
import { useCart } from "../HomePage/Cart/CartContext"; 
import Shirt1 from "../../assets/shirt/shirt1.jpg";
import Shirt2 from "../../assets/shirt/shirt2.jpg";
import Shirt3 from "../../assets/shirt/shirt3.jpg";

const Shirt = ({ product }) => {
  const { addToCart } = useCart(); 
  const images = [Shirt1, Shirt2, Shirt3];
  const [bigImage, setBigImage] = useState(images[0]);
  const [fade, setFade] = useState(false);

  const handleThumbnailClick = (img) => {
    setFade(true);
    setTimeout(() => {
      setBigImage(img);
      setFade(false);
    }, 200);
  };

  if (!product) {
    product = {
      id: 1, 
      title: "Sample Shirt",
      price: 120,
    };
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 }); 
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 pt-24">
   
      <div className="basis-full lg:basis-3/5 flex flex-col items-center lg:items-start mt-24">
        <img
          src={bigImage}
          alt={product.title}
          className={`w-40 sm:w-52 md:w-64 lg:w-full max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-96 rounded-lg shadow-lg mb-4 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}
        />

        <div className="flex gap-4 flex-wrap">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.title} ${idx + 1}`}
              className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-200 ${
                bigImage === img ? "ring-2 ring-pink-500" : ""
              }`}
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </div>
      </div>

      <div className="basis-full lg:basis-2/5 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">
          {product.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
          This is the detail page for <strong>{product.title}</strong>.
        </p>

        <p className="text-lg sm:text-xl font-semibold text-pink-600 mb-4 text-center">
          ${product.price}
        </p>

        <button
          onClick={handleAddToCart}
          className="w-40 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600 transition text-sm sm:text-sm mx-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Shirt;
