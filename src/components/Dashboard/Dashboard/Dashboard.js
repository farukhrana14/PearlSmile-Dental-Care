import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from '../../../App';

const containerStyle ={
    backgroundColor:    '#F4FDFB',
    // height: '100%'
}

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // console.log(date.toISOString());
    }

    useEffect(()=>{
        
        fetch('https://glacial-bayou-90829.herokuapp.com/appointmentsByDate', {
        method: 'POST',
        headers:    {'Content-Type': 'application/json'},
        body:   JSON.stringify({date: selectedDate, email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setAppointments(data))

    }, [selectedDate])




    return (
        <section>
            <div style={containerStyle} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar/>
                </div>
                <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                <Calendar className='react-calendar' onChange={handleDateChange} value={new Date()} />
                </div>
                <div className="col-md-5 col-sm-12 col-12">
                    <AppointmentByDate appointments={appointments} />
                </div>


            </div>
        </section>
    );
};

export default Dashboard;