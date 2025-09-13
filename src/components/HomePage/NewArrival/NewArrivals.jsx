import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaEye } from "react-icons/fa";

const NewArrivals = ({ products = [] }) => {
  const defaultProducts = [
    { id: 1, image: "https://i.ibb.co/rRFfymGY/women.jpg", title: "Men's Shirt", link: "/shop/men" },
    { id: 2, image: "https://i.ibb.co/rRFfymGY/women.jpg", title: "Women's Dress", link: "/shop/women" },
    { id: 3, image: "https://i.ibb.co/rRFfymGY/women.jpg", title: "Smartwatch", link: "/shop/electronics" },
    { id: 4, image: "https://i.ibb.co/rRFfymGY/women.jpg", title: "Decor Vase", link: "/shop/homedecor" },
    { id: 5, image: "https://i.ibb.co/rRFfymGY/women.jpg", title: "Necklace", link: "/shop/jewellery" },
    { id: 6, image: "https://i.ibb.co/rRFfymGY/women.jpg", title: "Kids Toy", link: "/shop/kids" },
  ];

  const productData = products.length > 0 ? products : defaultProducts;

  return (
    <section className="py-6 px-6 sm:px-12 lg:px-30 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">New Arrivals</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 w-auto h-auto justify-center">
        {productData.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-fade-in"
            style={{ maxWidth: '250px', width: '100%' }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full p-6 h-54 object-cover rounded-t-lg"
            />

          

            {/* Product Title */}
            <div className="absolute bottom-0 w-full bg-white bg-opacity-90 text-center py-2">
              <h6 className="text-xs sm:text-sm lg:text-xl font-semibold text-gray-800">{product.title}</h6>

            </div>
          </div>
        ))}
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default NewArrivals;