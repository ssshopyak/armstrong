import React from 'react'
import { HashRouter , Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Screens/Home'
import About from './Screens/About'
import Services from './Screens/Services'
import Faqs from './Screens/Faqs'

const App = () => {
    return (
        <BrowserRouter  basename='/'> {/*Не забути вернути на BrowserRouter*/}
            <Switch>
                <Route exact path='/' component={() => <Home/>} />
                <Route path='/About' component={() => <About/>} />
                <Route path='/Services' component={() => <Services/>} />
                <Route path='/FAQs' component={() => <Faqs/>} />
            </Switch>
        </BrowserRouter>
    )
}


export default App
