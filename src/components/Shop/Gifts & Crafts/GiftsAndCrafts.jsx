import React from "react";

const GiftsAndCrafts = () => {
  // Dummy data for gifts and crafts items
  const items = [
    {
      id: 1,
      title: "Handmade Bracelet",
      description: "A colorful beaded bracelet perfect for any occasion.",
      image: "https://via.placeholder.com/300x300?text=Handmade+Bracelet",
    },
    {
      id: 2,
      title: "Clay Pot Decor",
      description: "Eco-friendly clay pot painted with unique designs.",
      image: "https://via.placeholder.com/300x300?text=Clay+Pot+Decor",
    },
    {
      id: 3,
      title: "Knitted Scarf",
      description: "Warm and cozy scarf made with soft yarn.",
      image: "https://via.placeholder.com/300x300?text=Knitted+Scarf",
    },
    {
      id: 4,
      title: "Wooden Ornament",
      description: "Hand-carved wooden piece for holiday decor.",
      image: "https://via.placeholder.com/300x300?text=Wooden+Ornament",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Gifts & Crafts</h1>
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
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftsAndCrafts;