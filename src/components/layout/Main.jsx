import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
//import Searchbar from "../shared/Searchbar/Searchbar";


const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="min-h-screen flex flex-col">
      {!noHeaderFooter && <Navbar user={null} cart={[]} handleLogOut={() => {}} />}
       
     {/* {!noHeaderFooter && <Searchbar user={null} cart={[]} wishlist={[]} handleLogOut={() => {}} />}*/}
     
      <main className="mt-0">
        <Outlet />
      </main>
      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;