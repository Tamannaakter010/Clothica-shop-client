

const HomeDecor = () => {
  const items = [
    { id: 1, title: "Rustic Wall Shelf", description: "Handcrafted wooden shelf for modern homes.", image: "https://i.ibb.co.com/W4jxnwBJ/homedecor.jpg" },
    { id: 2, title: "Ceramic Vase", description: "Elegant vase with intricate patterns.", image: "https://i.ibb.co.com/W4jxnwBJ/homedecor.jpg" },
    { id: 3, title: "Candle Holder", description: "Stylish holder for a cozy ambiance.", image: "https://i.ibb.co.com/W4jxnwBJ/homedecor.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Home Decor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDecor;