import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedDashboard} from './Dashboard'
import {store} from '../store'
import {Route, Router} from 'react-router-dom'
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                {/* Dashboard goes here */}
                {/* <ConnectedDashboard /> */}
                <ConnectedNavigation/>
                <Route 
                    exact 
                    path='/dashboard' 
                    render={()=> (<ConnectedDashboard/>)} />
            </div>
        </Provider>
    </Router>
)