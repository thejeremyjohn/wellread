import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  // constructor(props) {
  //   super(props);
  // }
  // <h1 className='logo' read='read'>well</h1>

  render() {
    return (
      <span className='header'>
        <Link className='logo' to='/' read='read'>well</Link>
        <div className='nav-bar'>
          <span>Home</span>
          <span>My Books</span>
          <span>Browse</span>
          <span>Community</span>
        </div>
      </span>
      );
  }

}

export default Header;
