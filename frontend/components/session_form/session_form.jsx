import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  navLink() {
    if (this.props.formType === 'Sign In') return (
        <div className='signin-option'>
          Not a member?
          <Link
            style={{textDecoration: 'none'}}
            to="Sign Up"> Sign up
          </Link>
        </div>
      );
    if (this.props.formType === 'Sign Up') return (
      <div className='signin-option'>
          Already a member?
          <Link
            style={{textDecoration: 'none'}}
            to="Sign In"> Sign in
          </Link>
        </div>
      );
  }

  sessionFormHeader() {
    if (this.props.formType === 'Sign In') {
      return <h2 className='sfh'>Sign in to wellread</h2>;
    } else {
      return <h2 className='sfh'>Sign up for wellread</h2>;
    }
  }

  renderErrors() {
    let errors = this.props.errors;
    if (errors) {
      return(
        <ul className='errors-list'>
          {errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        {this.sessionFormHeader()}
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Name
      <br/>
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              placeholder='Name'
              autoFocus
              />
          </label>
      <br/>
          <label>Password
      <br/>
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='Password'
              />
      <br/>
            <div className='auth-submit'>
              <input className='button' type='submit' value='submit'/>
              {this.navLink()}
            </div>
          </label>
      <br/>
        </form>
      </div>
     );
   }
}

export default withRouter(SessionForm);
