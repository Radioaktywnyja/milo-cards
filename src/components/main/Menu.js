import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Menu(props) {
  return(
    <div className="menu">
      <Link to="/" className={props.location.pathname === '/' ? 'link active' : 'link'}>Home</Link>
      <Link to="/memory" className={props.location.pathname === '/memory' ? 'link active' : 'link'}>Memory</Link>
      <Link to="/contact" className={props.location.pathname === '/contact' ? 'link active' : 'link'}>Contact</Link>
    </div>
  );
}

export default withRouter(Menu);
