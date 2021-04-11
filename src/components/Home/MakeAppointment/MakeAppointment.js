import React from 'react';
import './MakeAppointment.css';
import doctorImg from '../../../images/doctor.png';

const MakeAppointment = () => {
    return (
        <section className='make-appointment'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img src={doctorImg} alt=''/>
                    </div>

                    <div className='col-md-7 text-white mt-5'>
                        <h5 className='text-brand' >Appointment</h5>
                        <h1 className='my-4'>Make an Appointment Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto culpa illum eligendi sint. Dignissimos libero veritatis. </p>
                        <button className='btn btn-brand'>Learn More</button>
                    </div>
                </div>

            </div>
            
        </section>
    );
};

export default MakeAppointment;