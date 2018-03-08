import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {

  // constructor(props) {
  //   super(props);
  // }
  // <h1 className='logo' read='read'>well</h1>

  render() {
    return (
      <div className='header'>
        <Link className='logo' to='/' read='read'>well</Link>
        <div className='nav-bar'>
          <div>Home</div>
          <div>My Books</div>
          <div>Browse</div>
          <div>Community</div>
        </div>
      </div>
      );
  }

}

export default Header;
