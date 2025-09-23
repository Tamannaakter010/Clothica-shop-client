import { useEffect, useState } from "react";
import Latest from "../shared/Latest/Latest";
import Banner from "../HomePage/Banner/Banner";
import Deal from "./Deal/Deal";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import NewArrivals from "./NewArrival/NewArrivals";
import BestSellers from "./BestSellers/BestSellers";
import Promo from "./Promo/Promo";
import OfferPopup from "./PopupModals/PopupModals";
import Trending from "./Trending/Trending";
import Brands from "./Brands/Brands";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
   
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("hasSeenPopup", "true"); 
    }
  }, []);

  return (
    <div className="w-full">
      <Banner />
    
      <Latest />
        <Trending />
       
      <Deal />
       <Brands />
      <BestSellers />
      <FeaturedCategories />
      <Promo />
      <NewArrivals />

    
      {showPopup && <OfferPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
