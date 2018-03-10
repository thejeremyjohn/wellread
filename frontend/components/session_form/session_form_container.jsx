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
  let authProps =
    ownProps.location.pathname === '/signin' ?
    {
      action: signin,
      buttonText: 'Sign In',
      headerText: 'Sign in to wellread',
      altPath: '/signup',
      altStr: 'Not a member?',
      altTitle: 'Sign Up'
    } :
    {
      action: signup,
      buttonText: 'Sign Up',
      headerText: 'Sign up for wellread',
      altPath: '/signin',
      altStr: 'Already a member?',
      altTitle: 'Sign In'
    };
  return {
    processForm: (user) => (
      dispatch(authProps.action(user))
    ),
    authProps
  };
};

// const mdp = (dispatch, ownProps) => {
//   const formType =
//     ownProps.location.pathname === '/signin' ?
//     'Sign In' : 'Sign Up';
//   return {
//     processForm: (user) => (
//       dispatch(
//         formType==='Sign In' ? signin(user) : signup(user)
//       )
//     ),
//     formType
//   };
// };

export default connect(msp, mdp)(SessionForm);
