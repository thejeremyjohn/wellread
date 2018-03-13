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

  headerRight() {
    if ( this.props.currentUser ) {
      return (
        <div className='header-right header-nav'>
          <img className='not-implemented'src='https://s.gr-assets.com/assets/layout/header/icn_nav_notifications.svg'></img>
          <img className='not-implemented'src='https://s.gr-assets.com/assets/layout/header/icn_nav_discussions.svg'></img>
          <img className='not-implemented'src='https://s.gr-assets.com/assets/layout/header/icn_nav_msgs.svg'></img>
          <img className='not-implemented'src='https://s.gr-assets.com/assets/layout/header/icn_nav_friend.svg'></img>
          <button
            className='header-temp-signout button'
            onClick={ this.props.logout }
            >sign out
          </button>
        </div>
      );
    }
  }

  headerLeft() {
    if ( this.props.currentUser ) {
      return (
        <div className='header-left header-nav'>
          <Link to='/'>Home</Link>
          <Link
            to={`/users/${this.props.currentUser.id}/bookshelves`}
            >My&nbsp;Books
          </Link>
          <Link to='/books'>Browse</Link>
          <a className='not-implemented'>Community</a>
        </div>
      );
    } else {
      return (
        <div className='header-left header-nav'>
          <a className='not-implemented'>Home</a>
          <a className='not-implemented'>My&nbsp;Books</a>
          <a className='not-implemented'>Browse</a>
          <a className='not-implemented'>Community</a>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='header-outer'>
        <div className='header'>
          <Link className='logo' to='/' read='read'>well</Link>
          {this.headerLeft()}
          {this.headerRight()}
        </div>
      </div>
      );
  }

}

export default connect(msp, mdp)(Header);
