import React from "react";

const Women = () => {
  const items = [
    { id: 1, title: "Summer Dress", description: "Light and breezy dress for summer.", image: "https://i.ibb.co.com/5hXhmwGF/man.jpg" },
    { id: 2, title: "Leather Handbag", description: "Stylish handbag for everyday use.", image: "https://i.ibb.co.com/5hXhmwGF/man.jpg" },
    { id: 3, title: "High Heels", description: "Elegant heels for special occasions.", image: "https://i.ibb.co.com/5hXhmwGF/man.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Women</h1>
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

export default Women;