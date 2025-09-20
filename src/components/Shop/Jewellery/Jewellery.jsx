import { useCart } from "../../HomePage/Cart/CartContext";


import jewel1 from "../../../assets/necklace/necklace1.jpg";
import jewel2 from "../../../assets/necklace/necklace2.jpg";
import jewel3 from "../../../assets/necklace/necklace3.jpg";
//import jewel4 from "../../../assets/jewellery/jewel4.jpg";
//import jewel5 from "../../../assets/jewellery/jewel5.jpg";
//import jewel6 from "../../../assets/jewellery/jewel6.jpg";

const Jewellery = () => {
  const { addToCart } = useCart();

  const items = [
    { id: 1, title: "Gold Necklace", description: "Elegant gold necklace with a pendant.", image: jewel1 },
    { id: 2, title: "Silver Earrings", description: "Dazzling silver earrings for daily wear.", image: jewel2 },
    { id: 3, title: "Pearl Bracelet", description: "Classic pearl bracelet for special occasions.", image: jewel3 },
    //{ id: 4, title: "Diamond Ring", description: "Sparkling diamond ring.", image: jewel4 },
   // { id: 5, title: "Beaded Anklet", description: "Colorful and stylish anklet.", image: jewel5 },
   // { id: 6, title: "Gold Bangle", description: "Traditional gold bangle for every occasion.", image: jewel6 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Jewellery</h1>
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

export default Jewellery;
