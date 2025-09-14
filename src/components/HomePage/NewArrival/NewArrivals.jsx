import { Link } from "react-router-dom";

const NewArrivals = ({ products = [] }) => {
  const defaultProducts = [
    { 
      id: 1, 
      title: "Men's Shirt", 
      images: [
        "https://i.ibb.co/rRFfymGY/women.jpg",
        "https://i.ibb.co/rRFfymGY/women.jpg",
        "https://i.ibb.co/rRFfymGY/women.jpg"
      ], 
      link: "/shop/men" 
    },
    { 
      id: 2, 
      title: "Women's Dress", 
      images: [
        "https://i.ibb.co/rRFfymGY/women.jpg",
        "https://i.ibb.co/rRFfymGY/women.jpg",
        "https://i.ibb.co/rRFfymGY/women.jpg"
      ], 
      link: "/shop/women" 
    },
    { 
      id: 3, 
      title: "Smartwatch", 
      images: [
        "https://i.ibb.co/d5sSw6N/smartwatch1.jpg",
        "https://i.ibb.co/q7kzQpm/smartwatch2.jpg",
        "https://i.ibb.co/4d2R4cP/smartwatch3.jpg"
      ], 
      link: "/shop/electronics" 
    },
    { 
      id: 4, 
      title: "Decor Vase", 
      images: [
        "https://i.ibb.co/W4jxnwBJ/homedecor1.jpg",
        "https://i.ibb.co/Z8n3p3v/homedecor2.jpg",
        "https://i.ibb.co/M8Rw7Kt/homedecor3.jpg"
      ], 
      link: "/shop/homedecor" 
    },
    { 
      id: 5, 
      title: "Necklace", 
      images: [
        "https://i.ibb.co/Z1wFj8t/necklace1.jpg",
        "https://i.ibb.co/K5v3h0d/necklace2.jpg",
        "https://i.ibb.co/rGHWk3t/necklace3.jpg"
      ], 
      link: "/shop/jewellery" 
    },
    { 
      id: 6, 
      title: "Kids Toy", 
      images: [
        "https://i.ibb.co/3TzFbtv/kidstoy1.jpg",
        "https://i.ibb.co/7gbmRyQ/kidstoy2.jpg",
        "https://i.ibb.co/hCLJX4x/kidstoy3.jpg"
      ], 
      link: "/shop/kids" 
    },
  ];

  const productData = products.length > 0 ? products : defaultProducts;

  return (
    <section className="py-6 px-6 sm:px-12 lg:px-30 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">New Arrivals</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 w-auto h-auto justify-center">
        {productData.map((product) => (
          <Link 
            to={`/shirt/${product.id}`} 
            key={product.id}
            state={{ product }}  
          >
            <div
              className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-fade-in"
              style={{ maxWidth: '250px', width: '100%' }}
            >
              {/* Thumbnail (first image) */}
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full p-6 h-54 object-cover rounded-t-lg"
              />

              <div className="absolute bottom-0 w-full bg-white bg-opacity-90 text-center py-2">
                <h6 className="text-xs sm:text-sm lg:text-xl font-semibold text-gray-800">{product.title}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
