import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import NotFound from './pages/NotFound/notFound'




function Routes() {

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Sobre" component={Sobre} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>

    )

}


export default Routes;