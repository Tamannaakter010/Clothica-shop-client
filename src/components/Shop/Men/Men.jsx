import { useCart } from "../../HomePage/Cart/CartContext";

const Men = () => {
  const { addToCart } = useCart();

  const items = [
    { id: 1, title: "Slim Fit Shirt", description: "Stylish shirt for a sharp look.", image: "https://i.ibb.co/rRFfymwGY/women.jpg" },
    { id: 2, title: "Leather Jacket", description: "Rugged leather jacket for all seasons.", image: "https://i.ibb.co/rRFfymwGY/women.jpg" },
    { id: 3, title: "Formal Suit", description: "Tailored suit for business or events.", image: "https://i.ibb.co/rRFfymwGY/women.jpg" },
    { id: 4, title: "Casual Sneakers", description: "Comfortable sneakers for daily wear.", image: "https://i.ibb.co/rRFfymwGY/women.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Men</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <button
              onClick={() => addToCart(item)}
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

export default Men;
