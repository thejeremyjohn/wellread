import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  signin, signup,
  logout, clearErrors
} from '../actions/session_actions';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    signin: (user) => (
      dispatch(signin(user))
    ),
    clearErrors: () => dispatch(clearErrors()),
  };
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signin(user);
    // this.setState({});
    this.setState({ username: '', password: '' });

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return(
      <ul className='landing-page errors-list'>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
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
            className='header-signout button'
            onClick={ this.props.logout }
            >sign out
          </button>
        </div>
      );
    } else {
      return (
        <div className='header-right header-nav'>
          <form className='header-auth-form' onSubmit={this.handleSubmit}>
            <input
              className='header-auth-input'
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              placeholder='Name'
              autoFocus
              />
            <input
              className='header-auth-input'
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='Password'
              />
            <input
              className='header-button'
              type='submit'
              value='Sign in'
              />
          </form>
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
        <div className='header-inner'>
          <div className='header'>
            <Link className='logo' to='/' read='read'>well</Link>
            {this.headerLeft()}
            {this.headerRight()}
          </div>
        </div>
      </div>
      );
  }

}

export default connect(msp, mdp)(Header);
