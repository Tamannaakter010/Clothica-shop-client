import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../../assets/Banner/Banner1.jpg";
import Image2 from "../../../assets/Banner/Banner 2.jpg";
import Image4 from "../../../assets/Banner/Banner 4.jpg";

const Banner = () => {
  const fallbackImage = "https://via.placeholder.com/1200x400?text=Image+Not+Available";

  return (
    <Carousel interval={2000} pause="hover" controls indicators style={{ maxHeight: "300px", overflow: "hidden" }}>
      <Carousel.Item>
        <div style={{ position: "relative", maxHeight: "300px" }}>
          <img
            className="d-block w-100"
            src={Image1 || fallbackImage}
            alt="First slide"
            onError={(e) => { e.target.src = fallbackImage; }}
            style={{ objectFit: "cover", height: "300px", width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            <h3 className="text-xl font-bold mb-2">First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ position: "relative", maxHeight: "300px" }}>
          <img
            className="d-block w-100"
            src={Image2 || fallbackImage}
            alt="Second slide"
            onError={(e) => { e.target.src = fallbackImage; }}
            style={{ objectFit: "cover", height: "300px", width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            <h3 className="text-xl font-bold mb-2">Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div style={{ position: "relative", maxHeight: "300px" }}>
          <img
            className="d-block w-100"
            src={Image4 || fallbackImage}
            alt="Third slide"
            onError={(e) => { e.target.src = fallbackImage; }}
            style={{ objectFit: "cover", height: "300px", width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            <h3 className="text-xl font-bold mb-2">Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;