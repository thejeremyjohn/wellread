import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/session_actions';

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    guest: { username: 'guest', password: 'password' }
  };
};

const mdp = (dispatch) => {
  return {
    signIn: (user) => dispatch(signin(user))
  };
};

class Demo extends React.Component {
  render() {
    const { loggedIn, signIn, guest } = this.props;
    return (
      !loggedIn ? <button onClick={() => signIn(guest)}>Demo</button> : null
    );
  }
}

export default connect(msp, mdp)(Demo);
