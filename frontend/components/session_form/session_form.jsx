import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { errors, location, clearErrors, history } = this.props;

    if (
      errors.length !== 0 &&
      location.pathname !== nextProps.location.pathname
    ) { clearErrors(); }

    if (nextProps.loggedIn) {
      history.push('/');
      // if (location.pathname === '/signup') {
      //   // create read, currently reading, and want to read
      // }
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

  altAuth() {
    const { altPath, altStr, altTitle }
      = this.props.authProps;

    return (
      <div className='alt-auth'>{altStr}
        <Link
          className='alt-auth-link'
          to={altPath}>{altTitle}
        </Link>
      </div>
    );
  }

  renderErrors() {
    return(
      <ul className='errors-list'>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h2 className='auth-message'>
          {this.props.authProps.headerText}
        </h2>
        {this.renderErrors()}
        <form className='auth-form' onSubmit={this.handleSubmit}>
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
          </label>
      <br/>
            <div className='auth-bottom'>
              <input
                className='button'
                type='submit'
                value={this.props.authProps.buttonText}
              />
            {this.altAuth()}
            </div>
      <br/>
        </form>
      </div>
     );
   }

}

export default withRouter(SessionForm);
