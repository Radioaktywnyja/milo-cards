import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Home from './Home';
import Contact from './Contact';
import Memory from './../memory';

function Main() {
  return(
    <div className="container">
      <Router>
        <Sidebar />
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/memory" component={Memory} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default Main;
