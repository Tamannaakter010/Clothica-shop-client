import { Link } from "react-router-dom";

const pageCategories = ["About", "Services","Team"];

const PagesCategory = () => {
  return (
    <div className="flex gap-3 overflow-x-auto py-2 px-4 bg-white shadow">
      


      {pageCategories.map((page) => (
        <Link
          key={page}
          to={`/${page.toLowerCase()}`}
          className="px-3 py-1 rounded-lg bg-blue-500 text-white whitespace-nowrap hover:bg-blue-600 transition"
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default PagesCategory;
