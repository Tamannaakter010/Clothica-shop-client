import { useState } from "react";
import { useCart } from "../HomePage/Cart/CartContext"; 
import Women1 from "../../assets/women/women1.jpg";
import Women2 from "../../assets/women/women2.jpg";
import Women3 from "../../assets/women/women3.jpg";

const Dress = ({ product }) => {
  const { addToCart } = useCart(); 
  const images = [Women1, Women2, Women3];
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
      title: "Women's Elegant Shirt",
      price: 130,
      description:
        "Stylish and comfortable women's shirt made with high-quality fabric. Perfect for casual and formal occasions.",
    };
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 pt-8">
    
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
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center">{product.title}</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">{product.description}</p>
        <p className="text-lg sm:text-xl font-semibold text-pink-600 mb-4 text-center">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="w-40 px-2 sm:px-3 py-1.5 sm:py-2 bg-pink-500 text-white rounded-md shadow-sm hover:bg-pink-600 transition text-sm sm:text-sm mx-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Dress;
