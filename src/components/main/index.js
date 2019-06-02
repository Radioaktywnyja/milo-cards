import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from './Sidebar.js';
import Memory from './../memory/index.js';

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
