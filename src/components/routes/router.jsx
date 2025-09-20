import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../HomePage/Home";
import Shop from "../Shop/Shop";
import Contact from "../Contact/Contact";

import GiftsAndCrafts from "../Shop/GiftsAndCrafts/GiftsAndCrafts";
import HomeDecor from "../Shop/HomeDecor/HomeDecor";
import Jewellery from "../Shop/Jewellery/Jewellery";
import Kids from "../Shop/Kids/Kids";
import Sale from "../Shop/Sale/Sale";
import Wedding from "../Shop/Wedding/Wedding";
import Women from "../Shop/Women/Women";
import Men from "../Shop/Men/Men";

import Login from "../shared/Searchbar/Login";
import Register from "../shared/Searchbar/Register";
import Blog from "../HomePage/Blog/Blog";
import Shirt from "../Shirt/Shirt";



import Pages from "../Pages/Pages";
import About from "../Pages/About/About";

import Cart from "../HomePage/Cart/Cart";
import Services from "../Pages/About/Services/Services";
import Team from "../Pages/Team/Team";
import Dress from "../Shirt/Dress";
import Smartwatch from "../Shirt/Smartwatch";
import DecorVase from "../Shirt/DecorVase";
import KidsToy from "../Shirt/KidsToy";
import Necklace from "../Shirt/Necklace";





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

    
{ path: "women/:id", element: <Dress /> },
{ path: "smartwatch/:id", element: <Smartwatch /> },
{ path: "decorvase/:id", element: <DecorVase /> },
{ path: "kidstoy/:id", element: <KidsToy /> },
{ path: "necklace/:id", element: <Necklace /> },
{ path: "shirt/:id", element: <Shirt /> },

       {
        path: "pages",
        element: <Pages />,
        children: [
          { path: "about", element: <About /> },
           { path: "services", element: <Services /> },
           { path: "team", element: <Team /> },

        
          
        ],
      },
            { path: "contact", element: <Contact /> },
         
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "blog", element: <Blog /> },
        { path: "cart", element: <Cart /> },
      
    ],
  },
]);
