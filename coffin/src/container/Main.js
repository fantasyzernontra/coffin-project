import React from 'react'

import Aux from '../hoc/Aux/Aux'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import ProductOverview from './ProductOverviews/ProductOverviews'

const Main = props => {
    return (
        <Aux>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/standard/adult' component={ProductOverview}/>
                <Route path='/standard/child' component={ProductOverview}/>
                <Route path='/modern/adult' component={ProductOverview}/>
                <Route path='/modern/child' component={ProductOverview}/>
            </Switch>
        </Aux>
    )
}

export default Main
