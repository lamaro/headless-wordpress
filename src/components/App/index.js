import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import Category from '../../pages/Category'
import NavBar from '../../components/NavBar'
import { Container } from 'bloomer';

function App() {
  return (
    <div>
    <Router>
    <NavBar />
    <Container>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category/:slug" component={Category} />
      </Switch>
    </Container>
    </Router>
    </div>
  );
}

export default App;
