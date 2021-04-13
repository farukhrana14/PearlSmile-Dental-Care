import React from 'react';
import './Testimonial.css';



const Testimonial = ({data}) => {
    return (
          <div className='card my-card shadow-sm bg-white rounded'>
              <div className='card-body'>
                <p className="card-text text-center" >{data.quote}</p>
            </div>
            
            <div className ='row mb-3'>
                <div className='card-footer d-flex  align-items-center mx-5'>
                    <img style={{height: '60px'}} src={data.img} alt =''/>
                </div>
                <div className='mx-1 '>
                    <h6 className='text-brand'>{data.name}</h6>
                    <p  className="mt--5">{data.from}</p>
                </div>
            </div>

          </div>
    );
};

export default Testimonial;