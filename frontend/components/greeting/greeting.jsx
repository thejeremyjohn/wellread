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
          <button onClick={ logout }>Logout</button>
          <h3>greetings, { currentUser.username }</h3>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/signin'>Sign in</Link>
        </div>
      );
    }
  }

}
