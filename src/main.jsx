import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { router } from "./components/routes/router.jsx";
import { CartProvider } from "./components/HomePage/Cart/CartContext.jsx";
import { WishlistProvider } from "./components/HomePage/Wishlist/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
         <WishlistProvider>
      <RouterProvider router={router} />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>
);
