import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

function Slider() {
  return (
    <Carousel slide={false} className="slider ">
      <Carousel.Item className="h-100">
        <img
          className="d-block w-100 h-100"
          src="./img/11.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
