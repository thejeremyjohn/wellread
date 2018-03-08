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
    if (this.props.formType === '/signin') return (
        <div>
          Not a member?
          <Link
            style={{textDecoration: 'none'}}
            to="/signup"> Sign up
          </Link>
        </div>
      );
    if (this.props.formType === '/signup') return (
        <div>
          Already a member?
          <Link
            style={{textDecoration: 'none'}}
            to="/signin"> Sign in
          </Link>
        </div>
      );
  }

  sessionFormHeader() {
    if (this.props.formType === '/signin') {
      return <h2>Sign in to wellread</h2>;
    } else {
      return <h2>Sign up for wellread</h2>;
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
        <form onSubmit={this.handleSubmit}>
          <label>Username
      <br/>
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              />
          </label>
      <br/>
          <label>Password
      <br/>
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              />
      <br/>
            <input type='submit' value='submit'/>
          </label>
      <br/>
        </form>
        {this.renderErrors()}
        {this.navLink()}
      </div>
     );
   }
}

export default withRouter(SessionForm);
