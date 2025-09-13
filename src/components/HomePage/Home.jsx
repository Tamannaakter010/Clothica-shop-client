import Latest from "../shared/Latest/Latest";
import Banner from "../HomePage/Banner/Banner";
import Deal from "./Deal/Deal";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import NewArrivals from "./NewArrival/NewArrivals";
import BestSellers from "./BestSellers/BestSellers";
import Promo from "./Promo/Promo";

export default function Home() {
  return (
    <div className="mx-auto">
   
   
      <Banner />
      <Latest />
      <Deal />
            < BestSellers />
      <FeaturedCategories />
       <Promo />
             <NewArrivals />
           
       
              
      

    </div>
  );
}
