import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './components/Page/Home/Home';
import Features from './components/Page/Features';
import Associations from './components/Page/Associations';
import Network from './components/Page/Network';
import Prices from './components/Page/Prices';
import Resources from './components/Page/Resources';
import Auth from './components/Page/Auth';
import Client from './components/Page/Client';
import News from './components/Home/News';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/features' component={Features} />
          <Route exact path='/associations' component={Associations} />
          <Route exact path='/network' component={Network} />
          <Route exact path='/prices' component={Prices} />
          <Route exact path='/resources' component={Resources} />
          <Route exact path='/auth' component={Auth} />
          <Route exact path='/me' component={Client} />
        </Switch>
      </Router>
  )
}

ReactDOM.render(<Root />,document.getElementById('todoasso'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
