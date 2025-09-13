import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaBars } from "react-icons/fa";

const Navbar = ({ user, cart = [], wishlist = [], handleLogOut }) => {
  const [shopOpen, setShopOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar top-0 left-0 w-full bg-gray-600 text-white z-50 h-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      {/* Left: Brand */}
      <div className="font-bold text-xl">Clothica</div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          className="btn btn-ghost p-1 h-8 w-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars className="h-5 w-5" />
        </button>
      </div>

      {/* Middle: Menu */}
      <div className={`lg:flex ${mobileMenuOpen ? "block" : "hidden"} lg:block`}>
        <ul className="menu menu-horizontal lg:menu-horizontal gap-x-6 text-sm font-medium lg:space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li className="relative">
            <button onClick={() => setShopOpen(!shopOpen)} className="hover:text-gray-200">
              Shop
            </button>
            {shopOpen && (
              <ul
                className="absolute mt-2 bg-gray-500 rounded-box p-2 shadow text-white"
                onMouseLeave={() => setShopOpen(false)}
              >
                <li><Link to="/shop/giftsandcrafts" className=" text-white hover:text-gray-200">GiftsAndCrafts</Link></li>
                <li><Link to="/shop/homedecor" className="text-white hover:text-gray-200">HomeDecor</Link></li>
                <li><Link to="/shop/jewellery" className="text-white hover:text-gray-600">Jewellery</Link></li>
                <li><Link to="/shop/kids" className="text-white hover:text-gray-200">Kids</Link></li>
                <li><Link to="/shop/sale" className="text-white hover:text-gray-200">Sale</Link></li>
                <li><Link to="/shop/wedding" className="text-white hover:text-gray-200">Wedding</Link></li>
                <li><Link to="/shop/women" className="text-white hover:text-gray-200">Women</Link></li>
                <li><Link to="/shop/men" className="text-white hover:text-gray-200">Men</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/blog" className=" text-white hover:text-gray-200">Blog</Link></li>
          <li><Link to="/pages/contact" className="text-white hover:text-gray-200">Contact</Link></li>
        </ul>
      </div>

      {/* Right: Wishlist, Login, Cart, Search */}
      <div className="flex items-center gap-4">
        {/* Wishlist */}
        <Link to="/wishlist" className="relative flex items-center gap-1 text-white hover:text-gray-200">
          <FaHeart className="text-lg" />
          <span className="badge badge-secondary absolute -top-3 -right-5 text-xs">
            {wishlist.length}
          </span>
          
        </Link>

        {/* Login/User */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="flex items-center gap-1 cursor-pointer hover:bg-pink-700 px-2 py-1 rounded"
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          >
            <FaUser className="text-lg" />
            <span className="hidden sm:inline font-medium">
           
            </span>
          </label>
          {userDropdownOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-pink-600 rounded-box w-40 mt-2 text-white"
              onBlur={() => setUserDropdownOpen(false)}
            >
              {!user ? (
                <>
                  <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
                  <li><Link to="/register" className="hover:text-gray-200">Register</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/account" className="hover:text-gray-200">My Account</Link></li>
                  <li><button onClick={handleLogOut} className="hover:text-gray-200">Logout</button></li>
                </>
              )}
            </ul>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative flex items-center gap-1 text-white hover:text-gray-200">
          <FaShoppingCart className="text-lg" />
          <span className="badge badge-secondary absolute -top-3 -right-5 text-xs">
            {cart.length}
          </span>
        
        </Link>

        {/* Search */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black px-2 py-1 rounded text-sm w-24 sm:w-40 focus:outline-none focus:ring-1 focus:ring-pink-500"
          />
          <FaSearch className="absolute right-2 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;