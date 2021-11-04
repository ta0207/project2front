import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Amenities from './pages/Amenities';
import Reservation from './pages/Reservation';
import ViewReservation from './pages/ViewReservation'
import ViewReservation2 from './pages/ViewReservation2'
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Availability from './pages/Availability';
import Confirmation from './pages/Confirmation';
import './App.css';
import * as React from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router>
        <Navbar />

        <Switch>
            <Route path="/" exact component ={Home}/>
            <Route path="/amenities" exact component = {Amenities}/>
            <Route path="/availability" exact component ={Availability}/>
            <Route path="/reservation" exact component ={Reservation}/>
            <Route path="/viewres" component ={ViewReservation}/>
            <Route path="/viewres2" component ={ViewReservation2}/>
            <Route path="/confirmation" component={Confirmation}/>
            <Route path="/login" component={Login}/>
            <PageNotFound path="/*" component={PageNotFound}/>
        </Switch>

      </Router>
      </MuiPickersUtilsProvider>
      </div>
  );
}

export default App;
