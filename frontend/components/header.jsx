import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  signoutButton() {
    if ( this.props.currentUser ) {
      return (
        <div className='header-right header-nav'>
          <button
            className='header-temp-signout button'
            onClick={ this.props.logout }
            >sign out
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='header-outer'>
        <div className='header'>
          <Link className='logo' to='/' read='read'>well</Link>
          <div className='header-left header-nav'>
            <Link to='/'>Home</Link>
            <Link to='/books'>Books</Link>
            <a className='not-implemented'>Browse</a>
            <a className='not-implemented'>Community</a>
          </div>
          {this.signoutButton()}
        </div>
      </div>
      );
  }

}

export default connect(msp, mdp)(Header);
