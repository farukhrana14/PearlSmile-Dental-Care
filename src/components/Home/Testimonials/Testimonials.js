import React from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial';
import wilsonImg from '../../../images/wilson.png';
import emaImg from '../../../images/ema.png';
import alizaImg from '../../../images/aliza.png';
import commaImg from '../../../images/comma.png';


const testimonialData = [
    {
        quote:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, autem! Tempore mollitia minima, ab provident odit ex suscipit maxime.',
        name:   'Wilson Harry',
        from:   'California',
        img:    wilsonImg
    },
    {
        quote:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, autem! Tempore mollitia minima, ab provident odit ex suscipit maxime.',
        name:   'Ema Johnson',
        from:   'New Jersey',
        img:    emaImg
    },
    {
        quote:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, autem! Tempore mollitia minima, ab provident odit ex suscipit maxime.',
        name:   'Aliza Winston',
        from:   'California',
        img:    alizaImg
    }
]


const Testimonials = () => {
    return (
        <section className='testimonials my-5 py-5' >
            <div className='container'>
              <div className='container row'>
                <div className='section-header col-md-10'>
                    <h5 className='text-brand'>TESTIMONIALS</h5>
                    <h2>What Our Patients <br/>Say</h2>
                </div>
                <div className = 'col-md-2'>
                    <img src={commaImg} alt=" " />
                </div>
              </div>
                <div className='card-deck mt-5 row '>
                    {
                        testimonialData.map(data => <Testimonial data = {data} ></Testimonial>)
                    }

                </div>

            </div>
            
        </section>
    );
};

export default Testimonials;