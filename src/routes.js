import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom'


import Home from './pages/home/Home'



function Routes() {

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                {/*  <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/galeria" component={Galeria} />
                <Route path="/upload" component={Upload} />
               
                <Route component={NotFound} />
                 */}
            </Switch>
        </Router>
    )

}


export default Routes;