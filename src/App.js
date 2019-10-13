import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './layouts/mainLayout/MainLayout';
import ArticlePage from './pages/articlePage/ArticlePage';

import Home from './pages/home/Home';
import About from './pages/about/About';
import ContactPage from './pages/contact/ContactPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/article/:id" component={ArticlePage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/about" component={About} />
            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
