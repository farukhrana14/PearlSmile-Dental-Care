import React from 'react';
import './Testimonial.css';



const Testimonial = ({data}) => {
    return (
        <div className='col-md-4 p-4'>
          <div className='card my-card shadow-sm bg-white rounded'>
              <div className='card-body'>
                <p>{data.quote}</p>
            </div>
            
            <div className ='row mb-3'>
                <div className='mx-5'>
                    <img style={{height: '40px'}} src={data.img} alt =''/>
                </div>
                <div className='mx-1'>
                    <h6 style={{color: '#1CC7C1'}}>{data.name}</h6>
                    <small>{data.from}</small>
                </div>
            </div>

          </div>
        </div>
    );
};

export default Testimonial;