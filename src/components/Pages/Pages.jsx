import { Link, Outlet } from "react-router-dom";

export default function Pages() {
  return (
    <div>
      <h1>Pages</h1>

      {/* Dropdown-style links */}
      <nav className="flex gap-4">
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>

      {/* Nested route content goes here */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
