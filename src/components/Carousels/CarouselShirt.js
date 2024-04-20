import Carousel from 'react-bootstrap/Carousel';

function CarouselShirt() {
  return (
    <Carousel style={{ width: '100%', height: '100%' }}>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src="./images/1.jpg" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src="./images/2.jpg" alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src="./images/3.jpg" alt="Third slide"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselShirt;