import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Company1 from "../images/company-carousel/accenture.png";
import Company2 from "../images/company-carousel/amazon.png";
import Company3 from "../images/company-carousel/citibank.png";
import Company4 from "../images/company-carousel/deloitte.png";
import Company6 from "../images/company-carousel/grammarly.png";
import Company7 from "../images/company-carousel/kpmg.png";
import Company8 from "../images/company-carousel/microsoft.png";
import Company9 from "../images/company-carousel/pwc.png";
import Company10 from "../images/company-carousel/remote.png";
import Company11 from "../images/company-carousel/sap.png";
import Company12 from "../images/company-carousel/twilio.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselItems = [
  { imgUrl: Company1 },
  { imgUrl: Company2 },
  { imgUrl: Company3 },
  { imgUrl: Company4 },
  { imgUrl: Company6 },
  { imgUrl: Company7 },
  { imgUrl: Company8 },
  { imgUrl: Company9 },
  { imgUrl: Company10 },
  { imgUrl: Company11 },
  { imgUrl: Company12 },
];

const CompanyCarousel = () => (
  <Carousel
    swipeable={false}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    className="px-5"
    containerClass="carousel-container"
    itemClass="carousel-item-padding-40-px px-10"
  >
    {carouselItems.map((post, index) => (
      <div className="text-left" key={index}>
        <img width="100" height="relative" src={post.imgUrl} alt="company" />
      </div>
    ))}
  </Carousel>
);

export default CompanyCarousel;
