import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Menu(props) {
  return(
    <div className="menu">
      <span className='link'>Home</span>
      <Link to="/" className={props.location.pathname === '/' ? 'link active' : 'link'}>Memory</Link>
      <span className='link'>Contact</span>
    </div>
  );
}

export default withRouter(Menu);
