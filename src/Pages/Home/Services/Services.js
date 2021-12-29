import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
  import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://gruesome-beast-09628.herokuapp.com/services')

            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='bg-dark p-1'>
            <h2 className="text-primary  border border-primary p-2 rounded-pill m-5">Our Offer-Details</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;