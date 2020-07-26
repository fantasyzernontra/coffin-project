import React from 'react'

import Aux from '../hoc/Aux/Aux'
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Test from './Test'

const Main = props => {
    return (
        <Aux>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/standard' component={Test}/>
                <Route path='/modern' component={Test}/>
            </Switch>
        </Aux>
    )
}

export default Main
