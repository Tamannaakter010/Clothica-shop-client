

const Jewellery = () => {
  const items = [
    { id: 1, title: "Gold Necklace", description: "Elegant gold necklace with a pendant.", image: "https://i.ibb.co.com/MDVHc0kJ/pexels-cottonbro-6640013.jpg" },
    { id: 2, title: "Silver Earrings", description: "Dazzling silver earrings for daily wear.", image: "https://i.ibb.co.com/MDVHc0kJ/pexels-cottonbro-6640013.jpg" },
    { id: 3, title: "Pearl Bracelet", description: "Classic pearl bracelet for special occasions.", image: "https://i.ibb.co.com/MDVHc0kJ/pexels-cottonbro-6640013.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Jewellery</h1>
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

export default Jewellery;