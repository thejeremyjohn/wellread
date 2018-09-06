import React from 'react';
import { Link } from 'react-router-dom';
import Demo from '../demo';

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   $('.content-outer').addClass('background-transparent');
  // }
  //
  // componentWillUnmount() {
  //   console.log('yaaaaaass?');
  //   $('.content-outer').removeClass('background-transparent');
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
    this.setState({ username: '', password: '' });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return(
      <ul className='landing-page errors-list'>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { logout, currentUser } = this.props;

    if ( currentUser ) {
      // $('.content-left').addClass('width-170');
      // $('.content-outer').removeClass('background-transparent');

      return (
        <div>
          <h3>Well met, { currentUser.username }! Here's some recommended reading:</h3>
          <img
            className='howtoposelikethis'
            src='https://i.imgur.com/CPDwpXi.jpg'>
          </img>
        </div>
      );
    } else {

      return (
        <div className='landing-page-container'>
          <div className='landing-page-container-left'>
            <h1 className='slogan'>Meet your next</h1>
            <h1 className='slogan'>favorite book.</h1>

            <img
              className='books-png'
              src='https://i.imgur.com/BrClPDA.png' alt=''>
            </img>
          </div>
          <div className='landing-page-auth-inner'>
            <Demo />
            {this.renderErrors()}
            <form className='landing-page auth-form' onSubmit={this.handleSubmit}>
              <input
                className='landing-page auth-input'
                type='text'
                value={this.state.username}
                onChange={this.update('username')}
                placeholder='Name'
                autoFocus
                />
              <input
                className='landing-page auth-input'
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                placeholder='Password'
                />
              <div className='landing-page auth-bottom'>
                <input
                  className='landing-page button'
                  type='submit'
                  value='Sign up'
                  />
              </div>
              <br/>
            </form>
          </div>

        </div>
      );
      // <nav className='session-option'>
      //   <Link to='/signup'>Sign Up</Link>
      //   &nbsp;or&nbsp;
      //   <Link to='/signin'>Sign In</Link>
      // </nav>
    }
  }

}
