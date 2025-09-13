import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../../assets/Banner/slide1.jpg";
import Image2 from "../../../assets/Banner/slide2.jpg";
import Image3 from "../../../assets/Banner/slide3.jpg";

const Banner = () => {
  const fallbackImage = "https://via.placeholder.com/1200x400?text=Image+Not+Available";

  return (
    <Carousel interval={2000} pause="hover" controls indicators style={{ maxHeight: "300px", overflow: "hidden" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1 || fallbackImage}
          alt="First slide"
          onError={(e) => { e.target.src = fallbackImage; }}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
        <Carousel.Caption className="text-shadow">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2 || fallbackImage}
          alt="Second slide"
          onError={(e) => { e.target.src = fallbackImage; }}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
        <Carousel.Caption className="text-shadow">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3 || fallbackImage}
          alt="Third slide"
          onError={(e) => { e.target.src = fallbackImage; }}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
        <Carousel.Caption className="text-shadow">
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;