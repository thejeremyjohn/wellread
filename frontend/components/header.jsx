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
          <Link to='/'>Home</Link>
          <Link to='/books'>Books</Link>
          <a className='not-implemented'>Browse</a>
          <a className='not-implemented'>Community</a>
        </div>
      </div>
      );
  }

}

export default Header;
