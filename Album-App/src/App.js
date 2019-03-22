import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Upload from './pages/Upload'
import Header from './components/Header';

const App = props => {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/upload' component={Upload} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
