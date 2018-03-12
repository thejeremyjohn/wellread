import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { logout, currentUser } = this.props;

    if ( currentUser ) {
      return (
        <div>
          <button
            className='button'
            onClick={ logout }
            >sign out
          </button>
          <h3>well met, { currentUser.username }!</h3>

          <Link to={`/users/${currentUser.id}/bookshelves`}>
            Click here to go to bookshelves -- extremely under construction
          </Link>
          <br/><br/><br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      );
    } else {
      return (
        <nav className='session-nav'>
          <Link to='/signup'>Sign Up</Link>
          &nbsp;or&nbsp;
          <Link to='/signin'>Sign In</Link>
        </nav>
      );
    }
  }

}
