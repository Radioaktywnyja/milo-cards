import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Memory from './../memory';

function Main() {
  return(
    <div className="container">
      <Router>
        <Sidebar />
        <div className="main">
          <Route exact path="/" component={Memory} />
        </div>
      </Router>
    </div>
  );
}

export default Main;
