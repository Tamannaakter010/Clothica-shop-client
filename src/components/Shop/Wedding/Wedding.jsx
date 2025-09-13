import React from "react";

const Wedding = () => {
  // Dummy data for wedding items
  const items = [
    {
      id: 1,
      title: "Bridal Gown",
      description: "Exquisite white gown with lace details for the bride.",
      image: "https://i.ibb.co.com/5X69Pp4G/pexels-vireshstudio-1444442.jpg",
    },
    {
      id: 2,
      title: "Groom Tuxedo",
      description: "Classic black tuxedo with a modern fit.",
      image: "https://i.ibb.co.com/5X69Pp4G/pexels-vireshstudio-1444442.jpg",
    },
    {
      id: 3,
      title: "Wedding Ring Set",
      description: "Elegant gold and diamond ring set for the couple.",
      image: "https://i.ibb.co.com/5X69Pp4G/pexels-vireshstudio-1444442.jpg",
    },
    {
      id: 4,
      title: "Bridal Veil",
      description: "Delicate veil with intricate embroidery.",
      image: "https://i.ibb.co.com/5X69Pp4G/pexels-vireshstudio-1444442.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Wedding</h1>
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

export default Wedding;