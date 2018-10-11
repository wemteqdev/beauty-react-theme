import React from 'react';
import Layout from './layout'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'

const Routes = () => {
    return(
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Layout>
        
    )
}

export default Routes;