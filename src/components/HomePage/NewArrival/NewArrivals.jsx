import { Link } from "react-router-dom";


import Men1 from "../../../assets/shirt/shirt1.jpg";
import Men2 from "../../../assets/shirt/shirt2.jpg";
import Men3 from "../../../assets/shirt/shirt3.jpg";

import Women1 from "../../../assets/women/women1.jpg";
import Women2 from "../../../assets/women/women2.jpg";
import Women3 from "../../../assets/women/women3.jpg";

import Smartwatch1 from "../../../assets/watch/watch1.jpg";
import Smartwatch2 from "../../../assets/watch/watch2.jpg";
import Smartwatch3 from "../../../assets/watch/watch3.jpg";

import DecorVase1 from "../../../assets/decor/vase1.jpg";
import DecorVase2 from "../../../assets/decor/vase2.jpg";
import DecorVase3 from "../../../assets/decor/vase3.jpg";

import Necklace1 from "../../../assets/necklace/necklace1.jpg";
import Necklace2 from "../../../assets/necklace/necklace2.jpg";
import Necklace3 from "../../../assets/necklace/necklace3.jpg";

import KidsToy1 from "../../../assets/toys/toys1.jpg";
import KidsToy2 from "../../../assets/toys/toys2.jpg";
import KidsToy3 from "../../../assets/toys/toys3.jpg";

const NewArrivals = ({ products = [] }) => {
  const defaultProducts = [
    { 
      id: 1, 
      title: "Men's Shirt", 
      images: [Men1, Men2, Men3], 
      type: "men"
    },
    { 
      id: 2, 
      title: "Women's Dress", 
      images: [Women1, Women2, Women3], 
      type: "women"
    },
    { 
      id: 3, 
      title: "Smartwatch", 
      images: [Smartwatch1, Smartwatch2, Smartwatch3], 
      type: "smartwatch"
    },
    { 
      id: 4, 
      title: "Decor Vase", 
      images: [DecorVase1, DecorVase2, DecorVase3], 
      type: "homedecor"   
    },
    { 
      id: 5, 
      title: "Necklace", 
      images: [Necklace1, Necklace2, Necklace3], 
      type: "jewellery"   
    },
    { 
      id: 6, 
      title: "Kids Toy", 
      images: [KidsToy1, KidsToy2, KidsToy3], 
      type: "kids"   
    },
  ];

  const productData = products.length > 0 ? products : defaultProducts;

  const getLink = (product) => {
    switch (product.type) {
      case "women":
        return `/women/${product.id}`;
      case "smartwatch":
        return `/smartwatch/${product.id}`;
      case "homedecor":
        return `/decorvase/${product.id}`;
      case "kids":
        return `/kidstoy/${product.id}`;
      case "jewellery":
        return `/necklace/${product.id}`;
      default:
        return `/shirt/${product.id}`;
    }
  };

  return (
    <section className="py-6 px-6 sm:px-12 lg:px-30 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">New Arrivals</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 w-auto h-auto justify-center">
        {productData.map((product) => (
          <Link 
            key={product.id}
            to={getLink(product)}  
            state={{ product }}  
          >
            <div
              className="relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 animate-fade-in"
              style={{ maxWidth: '250px', width: '100%' }}
            >
             
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
