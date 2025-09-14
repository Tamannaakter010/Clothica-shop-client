import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ user, cart = [], wishlist = [], handleLogOut }) => {
  const [shopOpen, setShopOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-600  text-white z-50 h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8">
      
      {/* Brand */}
      <div className="font-bold text-xl">CloThiCa</div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          className="btn btn-ghost p-1 h-8 w-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-300 z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-500 border-gray-200">
          <span className="font-bold text-lg">Menu</span>
          <button
            className="btn btn-ghost p-2.5 h-8 w-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        <ul className="menu menu-compact flex flex-col gap-3 p-4 text-white text-lg">
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>

          {/* Shop Mobile */}
          <li>
            <button onClick={() => setShopOpen(!shopOpen)} className="w-full text-left">Shop</button>
            {shopOpen && (
              <ul className="ml-4 mt-2 space-y-1">
                {["GiftsAndCrafts","HomeDecor","Jewellery","Kids","Sale","Wedding","Women","Men"].map((cat) => (
                  <li key={cat}>
                    <Link to={`/shop/${cat.toLowerCase()}`} onClick={() => {setShopOpen(false); setMobileMenuOpen(false);}}>{cat}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Pages Mobile */}
          <li>
            <button onClick={() => setPagesOpen(!pagesOpen)} className="w-full  text-left">Pages</button>
            {pagesOpen && (
              <ul className="ml-4 mt-2 space-y-1">
                <li><Link to="/pages/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                <li><Link to="/pages/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        <ul className="menu menu-horizontal gap-x-3 bg-gray-600 text-sm">
          <li><Link to="/">Home</Link></li>
          
          <li className="relative group">
            <button>Shop</button>
            <ul className="absolute hidden group-hover:block mt-2 bg-gray-200 rounded shadow p-2 w-48 text-white">
              {["GiftsAndCrafts","HomeDecor","Jewellery","Kids","Sale","Wedding","Women","Men"].map((cat) => (
                <li key={cat}><Link to={`/shop/${cat.toLowerCase()}`}>{cat}</Link></li>
              ))}
            </ul>
          </li>

          <li className="relative group ">
            <button>Pages</button>
            <ul className="absolute hidden group-hover:block mt-2 bg-gray-200 rounded shadow p-2 w-40 text-white">
              <li><Link to="/pages/about">About</Link></li>
              <li><Link to="/pages/contact">Contact</Link></li>
            </ul>
          </li>

          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

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

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <Link to="/wishlist" className="relative flex items-center gap-1 text-white hover:text-gray-200">
          <FaHeart className="text-lg" />
          <span className="badge badge-secondary absolute -top-3 -right-5 text-xs">{wishlist.length}</span>
        </Link>

        <Link to="/cart" className="relative flex items-center gap-1 text-white hover:text-gray-200">
          <FaShoppingCart className="text-lg" />
          <span className="badge badge-secondary absolute -top-3 -right-5 text-xs">{cart.length}</span>
        </Link>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="flex items-center gap-1 hover:bg-pink-700 px-2 py-1 rounded"
          >
            <FaUser className="text-lg" />
          </button>
          {userDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-pink-600 text-white rounded shadow p-2">
              {!user ? (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/account">My Account</Link></li>
                  <li><button onClick={handleLogOut}>Logout</button></li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
