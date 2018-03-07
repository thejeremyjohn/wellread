import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    // debugger
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
        <ul>
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
    // debugger
    return (
      <div>
        {this.sessionFormHeader()}
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              />
          </label>
          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              />
            <input type='submit' value='submit'/>
          </label>
        </form>
        <ul>
          {this.renderErrors()}
        </ul>
        {this.navLink()}
      </div>
     );
   }
}

export default withRouter(SessionForm);
