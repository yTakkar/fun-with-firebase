import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import PreLoginHeader from './components/Header/PreLoginHeader'
import PostLoginHeader from './components/Header/PostLoginHeader'
import RouteAuth from './components/RouteAuth';
import Container from './Container';

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Account from './pages/Account'
import AddNote from './pages/AddNote'
import UpdateNote from './pages/UpdateNote';

import { ROUTE_LEVEL } from './constants';

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Switch>
            <RouteAuth type={ROUTE_LEVEL.PUBLIC} path='/login' component={PreLoginHeader} />
            <RouteAuth type={ROUTE_LEVEL.PUBLIC} path='/register' component={PreLoginHeader} />
            <RouteAuth component={PostLoginHeader} />
          </Switch>
          
          <Switch>
            <RouteAuth type={ROUTE_LEVEL.PRIVATE} path='/' exact component={Home} />
            <RouteAuth type={ROUTE_LEVEL.PRIVATE} path='/account' component={Account} />
            <RouteAuth type={ROUTE_LEVEL.PRIVATE} path='/add-note' component={AddNote} />
            <RouteAuth type={ROUTE_LEVEL.PRIVATE} path='/update-note/:id' component={UpdateNote} />
            <RouteAuth type={ROUTE_LEVEL.PUBLIC} path='/login' component={Login} />
            <RouteAuth type={ROUTE_LEVEL.PUBLIC} path='/register' component={Register} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  )
}

export default App;
