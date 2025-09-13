
import { Outlet } from "react-router-dom";
import CategoryMenu from "./Category/CategoryMenu ";


const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CategoryMenu />
      <Outlet />
    
    </div>
  );
};

export default Shop;
