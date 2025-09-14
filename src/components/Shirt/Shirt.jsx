import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const Shirt = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  // ✅ Safe initial state (empty string if product is undefined)
  const [bigImage, setBigImage] = useState(product?.images?.[0] || "");
  const [fade, setFade] = useState(false);

  // Handle thumbnail click
  const handleThumbnailClick = (img) => {
    setFade(true);
    setTimeout(() => {
      setBigImage(img);
      setFade(false);
    }, 200);
  };

  // ✅ Now check after hooks
  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">
        No product data found for ID {id} 😢
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6">
      {/* Left: Image Gallery (60%) */}
      <div className="basis-full lg:basis-[60%] flex flex-col items-center lg:items-start">
        {/* Big Image */}
        <img
          src={bigImage}
          alt={product.title}
          className={`w-full max-w-lg h-auto rounded-lg shadow-lg mb-4 transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Thumbnails */}
        <div className="flex ml-18 gap-4 flex-wrap">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.title} ${idx}`}
              className={`w-24 h-24 object-cover rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-200 ${
                bigImage === img ? "ring-2 ring-pink-500" : ""
              }`}
              onClick={() => handleThumbnailClick(img)}
            />
          ))}
        </div>
      </div>

      {/* Right: Description (40%) */}
      <div className="basis-full lg:basis-[40%] flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-600 mb-6">
          This is the detail page for <strong>{product.title}</strong>.  
          (Here you can add price, description, material, shipping details, etc.)
        </p>

        <p className="text-xl font-semibold text-pink-600 mb-4">${product.price || 120.0}</p>
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Shirt;
