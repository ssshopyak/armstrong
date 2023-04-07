import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './Screens/Home';
import Christmas from './Screens/Christmas';
import About from './Screens/About';
import Services from './Screens/Services';
import Faqs from './Screens/Faqs';
import Property from './Screens/Property';

const App = () => {
  return (
    <BrowserRouter basename='/'> {/* Не забути вернути на BrowserRouter*/}
      <Switch>
        <Route exact path='/' component={() => <Home/>} />
        <Route path='/About' component={() => <About/>} />
        <Route path='/Services' component={() => <Services/>} />
        <Route path='/FAQs' component={() => <Faqs/>} />
        <Route path='/Property' component={()=> <Property/>} />
        <Route path='/Christmas' component={()=> <Christmas/>} />
      </Switch>
    </BrowserRouter>
  );
};


export default App;
