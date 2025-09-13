import Latest from "../shared/latest/latest";
import Banner from "../HomePage/Banner/Banner";
import Deal from "./Deal/Deal";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import NewArrivals from "./NewArrival/NewArrivals";
import BestSellers from "./BestSellers/BestSellers";

export default function Home() {
  return (
    <div className="mx-auto">
   
      <Latest />
      <Banner />
      <Deal />
             <NewArrivals />
             < BestSellers />
      <FeaturedCategories />

    </div>
  );
}
