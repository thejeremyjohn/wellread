import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/session_actions';

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    demo: { username: 'demo', password: 'password' }
  };
};

const mdp = (dispatch) => {
  return {
    signIn: (user) => dispatch(signin(user))
  };
};

class Demo extends React.Component {
  render() {
    const { loggedIn, signIn, demo } = this.props;
    if (!loggedIn) {
      return (
        <button
          className='demo button'
          onClick={() => signIn(demo)}
          >DEMO
        </button>
      );
    } else {
      return null;
    }
  }
}

export default connect(msp, mdp)(Demo);
