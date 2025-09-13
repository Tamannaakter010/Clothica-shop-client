import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Searchbar = ({ user, cart = [], wishlist = [], handleLogOut }) => {
  return (
    <div className="navbar mx-auto bg-pink-600 bg-opacity-90 px-4 text-black">
      {/*  Search Bar */}
      <div className="flex-1 mx-4">
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered input-sm w-full pl-10"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>
      </div>

     
      <div className="flex items-center gap-4">
        {/* Wishlist */}
    <Link to="/wishlist" className="relative flex items-center gap-2 text-white">
  <div className="relative">
    <FaHeart className="text-lg" />
    <span className="badge badge-secondary absolute -top-3 -left-5">
      {wishlist.length}
    </span>
  </div>
  <span className="hidden sm:inline">Wishlist</span>
</Link>

{/* Cart */}
<Link to="/cart" className="relative flex items-center gap-2 text-white">
  <div className="relative">
    <FaShoppingCart className="text-lg" />
    <span className="badge badge-secondary absolute -top-3 -left-5">
      {cart.length}
    </span>
  </div>
  <span className="hidden sm:inline">Cart</span>
</Link>
        {/* User/Login */}
    <button to="/login" className="relative flex dropdown text-white dropdown-end">
  <label
    tabIndex={0}
    className="flex items-center gap-2 cursor-pointer text-white px-2 py-1 hover:bg-pink-700 rounded"
  >
    <div className="flex gap-2"><FaUser className="text-lg" />
    <span className="font-medium">{user ? user.name : "Login"}</span></div>
  </label>

<ul
  tabIndex={0}
  className="dropdown-content menu p-2 shadow bg-pink-600 rounded-box w-40 mt-2 text-white"
>
  {!user && (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  )}
  {user && (
    <>
      <li>
        <Link to="/account">My Account</Link>
      </li>
      <li>
        <button onClick={handleLogOut}>Logout</button>
      </li>
    </>
  )}
</ul>
</button>

      </div>
    </div>
  );
};

export default Searchbar;
