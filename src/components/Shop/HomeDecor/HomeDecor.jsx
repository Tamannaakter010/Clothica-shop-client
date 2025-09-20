import { useCart } from "../../HomePage/Cart/CartContext";

// Import images
import decor1 from "../../../assets/decor/vase1.jpg";
import decor2 from "../../../assets/decor/vase2.jpg";
import decor3 from "../../../assets/decor/vase3.jpg";
import decor4 from "../../../assets/decor/vase4.jpg";
import decor5 from "../../../assets/decor/vase5.jpg";
import decor6 from "../../../assets/decor/vase6.jpg";
import decor7 from "../../../assets/decor/vase7.jpg";
import decor8 from "../../../assets/decor/vase8.jpg";

const HomeDecor = () => {
  const { addToCart } = useCart();

  const items = [
    { id: 1, title: "Rustic Wall Shelf", description: "Handcrafted wooden shelf for modern homes.", image: decor1 },
    { id: 2, title: "Ceramic Vase", description: "Elegant vase with intricate patterns.", image: decor2 },
    { id: 3, title: "Candle Holder", description: "Stylish holder for a cozy ambiance.", image: decor3 },
    { id: 4, title: "Wall Art Frame", description: "Beautiful decorative frame for walls.", image: decor4 },
    { id: 5, title: "Decorative Bowl", description: "Perfect centerpiece for your table.", image: decor5 },
    { id: 6, title: "Indoor Plant Pot", description: "Chic planter for indoor plants.", image: decor6 },
    { id: 7, title: "Table Lamp", description: "Elegant lamp to brighten up your room.", image: decor7 },
    { id: 8, title: "Hanging Lantern", description: "Adds a rustic charm to any space.", image: decor8 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Home Decor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <button
              onClick={() => addToCart({ ...item, quantity: 1 })}
              className="px-3 py-1 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDecor;
