import { useEffect, useState } from "react";
import Latest from "../shared/Latest/Latest";
import Banner from "../HomePage/Banner/Banner";
import Deal from "./Deal/Deal";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import NewArrivals from "./NewArrival/NewArrivals";
import BestSellers from "./BestSellers/BestSellers";
import Promo from "./Promo/Promo";
import OfferPopup from "./PopupModals/PopupModals";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // check if popup was shown before
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("hasSeenPopup", "true"); // store flag
    }
  }, []);

  return (
    <div className="mx-auto">
      <Banner />
      <Latest />
      <Deal />
      <BestSellers />
      <FeaturedCategories />
      <Promo />
      <NewArrivals />

    
      {showPopup && <OfferPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
