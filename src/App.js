import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/home'>
            <Home/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route path='/appointment'>
            <Appointment/>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
