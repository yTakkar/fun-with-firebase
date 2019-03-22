import React from 'react';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'
import List from './pages/List'
import Update from './pages/Update'

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/list' component={List} />
        <Route path='/update/:id' component={Update} />
      </Switch>
    </Router>
  )
}

export default App;
