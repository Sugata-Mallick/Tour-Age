import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
       <>
       <Carousel>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://images.moneycontrol.com/static-mcnews/2021/10/phuket-770x433.png?impolicy=website&width=770&height=431"
      alt="First slide"
    />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://www.indianpanorama.in/blog/wp-content/uploads/2019/06/blog-cover1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="http://tourismwings.com/wp-content/uploads/2020/04/tw-vietnam.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://135525-391882-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/01/vietnam-tourism.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </>
    );
};

export default Banner;