import React from 'react'
import { Provider } from 'react-redux'
import { Redirect } from 'react-router'
import { ConnectedDashboard } from './Dashboard'
import { ConnectedLogin } from './Login'
import { store } from '../store'
import { Route, Router } from 'react-router-dom'
import { history } from '../store/history';
import { ConnectedNavigation } from './Navigation';
import { ConnectTaskDetail } from './TaskDetail';


const RouteGaurd = Component => ({match})=>{
    console.info('Route Gaurd', match);
    if(!store.getState().session.authenticated){
        return <Redirect to='/' />
    }else{
        return <Component match={match} />
    }
    
}

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                {/* Dashboard goes here */}
                {/* <ConnectedDashboard /> */}
                <ConnectedNavigation/>
                <Route 
                    exact 
                    path='/' 
                    component={ConnectedLogin} /> 
                {/* <Route 
                    exact 
                    path='/dashboard' 
                    render={()=> (<ConnectedDashboard/>)} /> */}
                {/* <Route 
                    exact 
                    path='/task/:id' 
                    render={({match})=> (<ConnectTaskDetail match={match}/>)} /> */}
                <Route 
                    exact 
                    path='/dashboard' 
                    render={RouteGaurd(ConnectedDashboard)} /> 
                <Route 
                    exact 
                    path='/task/:id' 
                    render={RouteGaurd(ConnectTaskDetail)} />
       
            </div>
        </Provider>
    </Router>
)