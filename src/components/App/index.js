import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Category from '../../pages/Category'

function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:slug" component={Category} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
