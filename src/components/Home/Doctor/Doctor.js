import React from 'react';
import './Doctor.css';
import img from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt=""/>
            <h4>Dr. Coudi</h4>
            <p> <FontAwesomeIcon className="text-brand" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;