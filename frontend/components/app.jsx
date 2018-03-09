import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Demo from './demo';
import BookShowContainer from './books/book_show_container';
import BookIndexContainer from './books/book_index_container';

import Header from './header';

const App = () => (
  <div>

    <Header />

    <div className='content-outer'>
      <div className='content-left'></div>
      <div className='content-middle'>

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
      <div className='content-right'></div>
    </div>


    <Route path='/books' exact component={BookIndexContainer} />
    <Route path='/books/:bookId' component={BookShowContainer} />
  </div>
);

export default App;
