

import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='bg-dark'>
    
           
           <div className="row">
        
                        <div className="col-md-6  bg-warning mt-5">
                        
                        <Carousel className='mt-5' >
  <Carousel.Item >
    <img
      className="d-block mx-auto w-75 " 
      src="https://www.viewstorm.com/wp-content/uploads/2015/07/Paris.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <NavLink style={{textDecoration:"none"}} to="/explores"></NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://kasiawrites.com/wp-content/uploads/2017/08/Rome-the-Eternal-City-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <NavLink style={{textDecoration:"none"}} to="/explores"> </NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="http://wearandcheer.com/wp-content/uploads/2015/06/Best-Places-to-Visit-in-Malaysia-wearandcheer.com_.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    
    <NavLink style={{textDecoration:"none"}} to="/explores"> </NavLink>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Button className="btn fw-bolder btn-success text-white mt-5">About</Button>
<h4 className="fw-bolder mb-5 pt-4 text-dark">" Tour-Age is the choice relevent Page "</h4>
                          </div>
                                <div className="col-md-3 container">
                                <div className="cart">
                                    <h4 className="fw-bolder mt-5 text-info border border-info p-2 rounded">About-Page</h4>
                    <p className="fw-bolder mt-4 text-info">Saint Martin’s, the one and only coral island of Bangladesh, is a small island measuring eight square kilometers. The visible landmass sinks during the tide. Alternatively called the pearl of the sea, it is about 10 km from the mainland at teknaf. The safest means of transport is the government-owned ferry which takes around two hours one way. Tourists have the option to spend a few hours and return the same day or stay for one or two days.Saint Martin's Island harbors some of the most beautiful beaches in Bangladesh. It has become one of the most popular tourist destinations.</p><p className='mb-4'> Due to ferry’s timing, one and a half days tour is practical. Relaxation and fun on the picturesque place of blue sky and coconut trees, swimming in crystal blue water, snorkeling in the lagoon, and walking in the fresh air will be a lifetime experience.</p>
                </div>
                                    </div>
                                    </div>

            </div>
    

    );
};

export default AboutUs;
