import Carousel from 'react-bootstrap/Carousel';


function Slider(Prop) {
  const {prop1,prop2,prop3,control}=Prop
  return (
    <div className='mx-auto' >
      <Carousel fade controls={control} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-size"
            src={prop3}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-size"
            src={prop2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-size"
            src={prop1}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
