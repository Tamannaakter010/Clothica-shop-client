import { Link } from "react-router-dom";


const categories = [
  "GiftsAndCrafts", "HomeDecor", "Jewellery", "Kids", "Sale", "Wedding", "Women"
];

const CategoryMenu = () => {
  return (
    <div className="flex gap-3 overflow-x-auto py-2 px-4 bg-white shadow">
      {categories.map((cat) => (
        <Link
          key={cat}
          to={`/shop/${cat.toLowerCase()}`}
          className="px-3 py-1 rounded-lg bg-orange-500 text-white whitespace-nowrap hover:bg-orange-600 transition"
        >
          {cat.replace(/([A-Z])/g, ' $1').trim()}
        </Link>
      ))}
     
    </div>
   
  );
};

export default CategoryMenu;
