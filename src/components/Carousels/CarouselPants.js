import Carousel from 'react-bootstrap/Carousel';

function CarouselPants() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-10" src="./images/6.jpg" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-10" src="./images/6.jpg" alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-10" src="./images/6.jpg" alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPants;