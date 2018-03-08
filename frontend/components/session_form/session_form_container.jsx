import { connect } from 'react-redux';
import { signin , signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  };
};

const mdp = (dispatch, ownProps) => {
  const formType =
    ownProps.location.pathname === '/signin' ?
    'Sign In' : 'Sign Up';
  return {
    processForm: (user) => (
      dispatch(
        formType==='Sign In' ? signin(user) : signup(user)
      )
    ),
    formType
  };
};

export default connect(msp, mdp)(SessionForm);
