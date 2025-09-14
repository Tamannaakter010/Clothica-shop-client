import { useEffect, useState } from "react";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup when website loads
    setIsOpen(true);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              ✖
            </button>

            {/* Logo */}
            <img
              src="https://i.ibb.co.com/W4jxnwBJ/homedecor.jpg"
              alt="Logo"
              className="mx-auto mb-4 w-20"
            />

            {/* Offer text */}
            <h2 className="text-2xl font-bold text-orange-600">
              🎉 Get 20% OFF!
            </h2>
            <p className="mt-2 text-gray-700">
              Enjoy an exclusive 20% discount on your first order.
            </p>

            {/* Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferPopup;
