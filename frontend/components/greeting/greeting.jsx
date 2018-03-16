import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { logout, currentUser } = this.props;

    // <Link to={`/users/${currentUser.id}/bookshelves`}>
    //   Click here to go to bookshelves -- extremely under construction
    // </Link>
    if ( currentUser ) {
      // $('.content-left').addClass('width-170');
      return (
        <div>
          <h3>well met, { currentUser.username }!</h3>
          <img
            className='howtoposelikethis'
            src='http://weknowmemes.com/wp-content/uploads/2012/03/how-to-pose-like-this.jpg'>
          </img>
        </div>
      );
    } else {
      return (
        <nav className='session-option'>
          <Link to='/signup'>Sign Up</Link>
          &nbsp;or&nbsp;
          <Link to='/signin'>Sign In</Link>
        </nav>
      );
    }
  }

}
