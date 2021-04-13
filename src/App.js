import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          
          <PrivateRoute path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>
          
          <PrivateRoute path='/allPatients'>
            <AllPatients/>
          </PrivateRoute>

          <PrivateRoute path='/addDoctor'>
            <AddDoctor/>
          </PrivateRoute>

          <Route exact path='/'>
            <Home/>
          </Route>
          
          <Route exact path='/home'>
            <Home/>
          </Route>

          <Route path='/appointment'>
            <Appointment/>
          </Route>

          <Route exact path='/login'>
            <Login/>
          </Route>
        
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
