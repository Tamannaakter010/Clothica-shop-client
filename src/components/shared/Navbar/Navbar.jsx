import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="navbar top-0 left-0 w-full bg-orange-500 text-white z-50 h-16">
      <div className="navbar px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="font-bold text-lg">Clothica</div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="btn btn-ghost p-1 h-8 w-8"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <ul className="menu menu-compact flex flex-col items-center gap-2 p-2 bg-orange-500 rounded-box shadow mt-2">
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            </li>

            {/* Shop dropdown for mobile */}
            <li className="relative">
              <button onClick={() => setShopOpen(!shopOpen)}>Shop</button>
              {shopOpen && (
                <ul
                  className="absolute mt-2 bg-orange-500 rounded-box p-2 shadow text-white"
                  onMouseLeave={() => setShopOpen(false)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <li><Link to="/shop/giftsandcrafts" onClick={() => setShopOpen(false)}>GiftsAndCrafts</Link></li>
                  <li><Link to="/shop/homedecor" onClick={() => setShopOpen(false)}>HomeDecor</Link></li>
                  <li><Link to="/shop/jewellery" onClick={() => setShopOpen(false)}>Jewellery</Link></li>
                  <li><Link to="/shop/kids" onClick={() => setShopOpen(false)}>Kids</Link></li>
                  <li><Link to="/shop/sale" onClick={() => setShopOpen(false)}>Sale</Link></li>
                  <li><Link to="/shop/wedding" onClick={() => setShopOpen(false)}>Wedding</Link></li>
                  <li><Link to="/shop/women" onClick={() => setShopOpen(false)}>Women</Link></li>
                  <li><Link to="/shop/men" onClick={() => setShopOpen(false)}>Men</Link></li>
                </ul>
              )}
            </li>

            {/* Pages dropdown for mobile */}
            <li className="relative">
              <button onClick={() => setPagesOpen(!pagesOpen)}>Pages</button>
              {pagesOpen && (
                <ul
                  className="absolute mt-2 bg-orange-500 rounded-box p-2 shadow text-white"
                  onMouseLeave={() => setPagesOpen(false)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <li><Link to="/pages/about" onClick={() => setPagesOpen(false)}>About</Link></li>
                  <li><Link to="/pages/contact" onClick={() => setPagesOpen(false)}>Contact</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-3 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* Shop dropdown */}
            <li className="relative">
              <button onClick={() => setShopOpen(!shopOpen)}>
                Shop
              </button>
              {shopOpen && (
                <ul
                  className="absolute mt-2 bg-orange-500 rounded-box p-2 shadow text-white"
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <li><Link to="/shop/giftsandcrafts" onClick={() => setShopOpen(false)}>GiftsAndCrafts</Link></li>
                  <li><Link to="/shop/homedecor" onClick={() => setShopOpen(false)}>HomeDecor</Link></li>
                  <li><Link to="/shop/jewellery" onClick={() => setShopOpen(false)}>Jewellery</Link></li>
                  <li><Link to="/shop/kids" onClick={() => setShopOpen(false)}>Kids</Link></li>
                  <li><Link to="/shop/sale" onClick={() => setShopOpen(false)}>Sale</Link></li>
                  <li><Link to="/shop/wedding" onClick={() => setShopOpen(false)}>Wedding</Link></li>
                  <li><Link to="/shop/women" onClick={() => setShopOpen(false)}>Women</Link></li>
                  <li><Link to="/shop/men" onClick={() => setShopOpen(false)}>Men</Link></li>
                </ul>
              )}
            </li>

            {/* Pages dropdown */}
            <li className="relative">
              <button onClick={() => setPagesOpen(!pagesOpen)}>
                Pages
              </button>
              {pagesOpen && (
                <ul
                  className="absolute mt-2 bg-orange-500 rounded-box p-2 shadow text-white"
                  onMouseLeave={() => setPagesOpen(false)}
                >
                  <li><Link to="/pages/about" onClick={() => setPagesOpen(false)}>About</Link></li>
                  <li><Link to="/pages/contact" onClick={() => setPagesOpen(false)}>Contact</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;