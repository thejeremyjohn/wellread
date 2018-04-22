import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/session_actions';

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    demouser: { username: 'DemoUser', password: 'password' }
  };
};

const mdp = (dispatch) => {
  return {
    signIn: (user) => dispatch(signin(user))
  };
};

class Demo extends React.Component {
  render() {
    const { loggedIn, signIn, demouser } = this.props;
    if (!loggedIn) {
      return (
        <button
          className='demo button'
          onClick={() => signIn(demouser)}
          >DEMO
        </button>
      );
    } else {
      return null;
    }
  }
}

export default connect(msp, mdp)(Demo);
