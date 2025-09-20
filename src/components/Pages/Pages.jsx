
import { Outlet } from "react-router-dom";

import PagesCategory from "./About/PagesCategory";


const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <PagesCategory />
      <Outlet />
    
    </div>
  );
};

export default Shop;
