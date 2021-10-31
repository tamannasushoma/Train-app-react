import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import BookingForm from './components/bookingForm';
import Home from './components/home';
import Navbar from './components/navbar';
import Stations from './components/stationList';
import Trains from './components/trainList';
import Districts from './components/district';
import SearchBy from './components/search';

class App extends Component {
 
  render() { 
    return (
      <div className="container-fluid p-0">
        <Navbar/>
        <div className="content">
            <Switch>
            <Route path="/search-by" component={SearchBy}/>
            <Route path="/train-list" component={Trains}/>
            <Route path="/station-list" component={Stations}/>
            <Route path="/district-list" component={Districts}/>
            <Route path="/train-booking" component={BookingForm}/>
            <Route exact path="/" component={Home}/>
         </Switch>
        </div>
      </div>
    );
  }
}
 
export default App;

