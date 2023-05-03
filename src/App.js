import React from 'react';
import {Switch, Route, BrowserRouter, HashRouter} from 'react-router-dom';
import Home from './Screens/Home';
import Christmas from './Screens/Christmas';
import About from './Screens/About';
import Faqs from './Screens/Faqs';
import Property from './Screens/Property';
import Contact from './Screens/Contact';
import Outdoor from './Screens/OutDoor';
import HouseClean from './Screens/HouseClean';
import Power from './Screens/Power';
import Gutter from './Screens/Gutter';
import Landscaping from './Screens/Landscaping';
import Windows from './Screens/Window';
import {Navbar} from './Components/Navbar';
import {Footer} from './Components/Footer';
import Galery from './Screens/Galery';

const App = () => {
  return (
    <HashRouter basename='/'> {/* Не забути вернути на BrowserRouter*/}
      <Navbar/>
      <Switch>
        <Route exact path='/' component={() => <Home/>} />
        <Route path='/About' component={() => <About/>} />
        <Route path='/FAQs' component={() => <Faqs/>} />
        <Route path='/Property' component={()=> <Property/>} />
        <Route path='/Christmas' component={()=> <Christmas/>} />
        <Route path='/Contact' component={()=> <Contact/>} />
        <Route path='/Outdoor' component={()=> <Outdoor/>} />
        <Route path='/Houseclean' component={()=> <HouseClean/>} />
        <Route path='/Power' component={()=> <Power/>} />
        <Route path='/Gutter' component={()=> <Gutter/>} />
        <Route path='/Landscaping' component={()=> <Landscaping/>} />
        <Route path='/Window' component={()=> <Windows/>} />
        <Route path='/Galery' component={()=> <Galery/>} />
      </Switch>
      <Footer/>
    </HashRouter>
  );
};


export default App;
