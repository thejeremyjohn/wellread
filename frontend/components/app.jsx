import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Demo from './demo';

// demoSignin({ store }) {
//   const demoUser = { username: 'guest', password: 'password'};
//   this.props.processForm(demoUser);
// }
// <button onClick={this.demoSignin()} />


const App = () => (
  <div>

    <header>
      <h1>wellread</h1>
    </header>
    <Demo />

    <Switch>

      <AuthRoute
        path="/signin"
        component={SessionFormContainer}
        />

      <AuthRoute
        path="/signup"
        component={SessionFormContainer}
        />

      <GreetingContainer />

    </Switch>

  </div>
);

export default App;
