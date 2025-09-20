import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../HomePage/Cart/CartContext";
//import { useWishlist } from "../../HomePage/Wishlist/WishlistContext";

const Navbar = ({ user, handleLogOut }) => {
  const [shopOpen, setShopOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search input

  const { cartItems } = useCart();
  //const { wishlistItems } = useWishlist();

  return (
    <nav className="fixed top-0 left-0 w-full mb-2 bg-gray-600 text-white z-50 h-16 flex justify-between items-center px-4 sm:px-6 lg:px-8">
   
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
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-gray-600 z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b bg-gray-600 border-gray-200">
          <span className="font-bold text-lg">Menu</span>
          <button
            className="btn btn-ghost p-2.5 h-8 w-8"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        <ul className="menu menu-compact flex flex-col gap-3 p-4 text-white text-lg">
          <li>
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
              }
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>

          {/* Shop Mobile */}
          <li>
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="w-full text-left text-white hover:text-gray-200"
            >
              Shop
            </button>
            {shopOpen && (
              <ul className="ml-4 mt-2 space-y-1">
                {["GiftsAndCrafts", "HomeDecor", "Jewellery", "Kids", "Sale", "Wedding", "Women", "Men"].map((cat) => (
                  <li key={cat}>
                    <NavLink
                      to={`/shop/${cat.toLowerCase()}`}
                      onClick={() => {
                        setShopOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className={({ isActive }) =>
                        isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
                      }
                      style={{ textDecoration: "none" }}
                    >
                      {cat}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Pages Mobile */}
          <li>
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="w-full text-left text-white hover:text-gray-200"
            >
              Pages
            </button>
            {pagesOpen && (
              <ul className="ml-4 mt-2 space-y-1">
                <li>
                  <NavLink
                    to="/pages/about"
                    onClick={() => {
                      setPagesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pages/services"
                    onClick={() => {
                      setPagesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pages/team"
                    onClick={() => {
                      setPagesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    Our Team
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
              }
              style={{ textDecoration: "none" }}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-6">
        <ul className="menu menu-horizontal gap-x-3 bg-gray-600 text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
              }
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>

          <li className="relative group">
            <button className="text-white hover:text-gray-200">Shop</button>
            <ul className="absolute hidden group-hover:block mt-3 bg-gray-600 rounded shadow-lg p-2 w-48 z-50">
              {["GiftsAndCrafts", "HomeDecor", "Jewellery", "Kids", "Sale", "Wedding", "Women", "Men"].map((cat) => (
                <li key={cat}>
                  <NavLink
                    to={`/shop/${cat.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
                    }
                    style={{ textDecoration: "none" }}
                  >
                    {cat}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li className="relative group">
            <button className="text-white hover:text-gray-200">Pages</button>
            <ul className="absolute hidden group-hover:block mt-3 bg-gray-600 rounded shadow-lg p-2 w-40 z-50">
              <li>
                <NavLink
                  to="/pages/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
                  }
                  style={{ textDecoration: "none" }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages/services"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
                  }
                  style={{ textDecoration: "none" }}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pages/team"
                  className={({ isActive }) =>
                    isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
                  }
                  style={{ textDecoration: "none" }}
                >
                  Our Team
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
              }
              style={{ textDecoration: "none" }}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
              }
              style={{ textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Search */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-black px-2 py-1 rounded text-sm w-24 sm:w-40 focus:outline-none focus:ring-1 focus:ring-pink-500"
            value={searchQuery} // Bind the input value to state
            onChange={(e) => setSearchQuery(e.target.value)} // Update state on change
          />
          <FaSearch className="absolute right-2 text-gray-600 cursor-pointer" />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        {/* Wishlist 
        <Link
          to="/wishlist"
          className="relative flex items-center gap-1 text-white hover:text-gray-200"
        >
          <FaHeart className="text-lg" />
          <span className="badge badge-secondary absolute -top-2 -right-2 text-xs">
            {wishlistItems.length}
          </span>
        </Link>
        */}

        {/* Cart */}
        <Link
          to="/cart"
          className="relative flex items-center gap-1 text-white hover:text-gray-200"
        >
          <FaShoppingCart className="text-lg" />
          <span className="badge badge-secondary absolute -top-3 -right-5 text-xs">
            {cartItems.length}
          </span>
        </Link>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="flex items-center gap-1 hover:bg-gray-200 px-2 py-1 rounded"
          >
            <FaUser className="text-lg" />
          </button>
         {userDropdownOpen && (
  <ul className="absolute right-0 mt-2 w-40 bg-gray-300 text-white rounded shadow p-2">
    {!user ? (
      <>
        <li>
          <Link
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
            }
            style={{ textDecoration: "none" }}
            onClick={() => setUserDropdownOpen(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-white hover:text-gray-200"
            }
            style={{ textDecoration: "none" }}
            onClick={() => setUserDropdownOpen(false)}
          >
            Register
          </Link>
        </li>
      </>
    ) : (
      <>
        <li>
          <Link
            to="/account"
            onClick={() => setUserDropdownOpen(false)}
          >
            My Account
          </Link>
        </li>
        <li>
          <button onClick={handleLogOut}>Logout</button>
        </li>
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