import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { v4 as uuidv4 } from "uuid";
const Slider = ({ desktop, mob, tablet, Card }) => {
  const list = [1, 2, 3, 4, 6, 7, 8, 9];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktop,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mob,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
      autoPlaySpeed={3000}
    >
      {list.map((ls) => (
        <Card key={uuidv4()} />
      ))}
    </Carousel>
  );
};

export default Slider;
