import { connect } from 'react-redux';
import {
  signin, signup,
  logout, clearErrors
} from '../../actions/session_actions';
import Greeting from './greeting';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.session
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    signup: (user) => (
      dispatch(signup(user))
    ),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(msp, mdp)(Greeting);
