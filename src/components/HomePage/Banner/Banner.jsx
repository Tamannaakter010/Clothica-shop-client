import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../../assets/Banner/Banner1.jpg";
import Image2 from "../../../assets/Banner/Banner 2.jpg";
import Image4 from "../../../assets/Banner/Banner 4.jpg";

const Banner = () => {
  const fallbackImage = "https://via.placeholder.com/1200x800?text=Image+Not+Available";

  const slides = [
    {
      img: Image1,
      title: "First slide label",
      desc: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: Image2,
      title: "Second slide label",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Image4,
      title: "Third slide label",
      desc: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  return (
    <Carousel interval={2000} pause="hover" controls indicators>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <img
              className="d-block w-full h-full object-cover"
              src={slide.img || fallbackImage}
              alt={slide.title}
              onError={(e) => { e.target.src = fallbackImage; }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 sm:px-6">
              <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">{slide.title}</h3>
              <p className="text-sm sm:text-lg md:text-xl">{slide.desc}</p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
