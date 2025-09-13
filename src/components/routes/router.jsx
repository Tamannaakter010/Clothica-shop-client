import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../HomePage/Home";
import Shop from "../Shop/Shop";





import GiftsAndCrafts from "../Shop/Gifts & Crafts/GiftsAndCrafts";
import HomeDecor from "../Shop/HomeDecor/HomeDecor";
import Jewellery from "../Shop/Jewellery/Jewellery";
import Kids from "../Shop/Kids/Kids";
import Sale from "../Shop/Sale/Sale";
import Wedding from "../Shop/Wedding/Wedding";
import Women from "../Shop/Women/Women";
import Men from "../Shop/Men/Men";
import About from "../Pages/About/about";
import Pages from "../Pages/pages";
import Login from "../shared/Searchbar/Login";
import Register from "../shared/Searchbar/Register";
import Blog from "../HomePage/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          { path: "giftsandcrafts", element: <GiftsAndCrafts /> },
          { path: "homedecor", element: <HomeDecor /> },
          { path: "jewellery", element: <Jewellery /> },
          { path: "kids", element: <Kids /> },
          { path: "sale", element: <Sale /> },
          { path: "wedding", element: <Wedding /> },
          { path: "women", element: <Women /> },
           { path: "men", element: <Men /> },
        ],
      },
        {
        path: "page",
        element: <Pages />,
        children: [
          { path: "about", element: <About /> },
        
        ],
      },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
          { path: "blog", element: <Blog /> },
    ],
  },
]);
