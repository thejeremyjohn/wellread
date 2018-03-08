import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Demo from './demo';

import Header from './header/header';

const App = () => (
  <div>

    <Header />

    <div className='auth-outer'>
      <div className='auth-inner'>
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
    </div>

  </div>
);

export default App;
