import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Demo from './demo';
import BookShowContainer from './books/book_show_container';
import BookIndexContainer from './books/book_index_container';

import BookshelfShowContainer from './bookshelves/bookshelf_show_container';
import BookshelfIndexContainer from './bookshelves/bookshelf_index_container';

import Header from './header';

const App = () => (
  <div>

    <Header />

    <div className='content-outer'>
      <div className='content-inner'>
        <div className='content-left'></div>
        <div className='content-middle'>

          <section className='auth'>
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
            </Switch>
          </section>

          <ProtectedRoute path='/' exact component={GreetingContainer} />
          <ProtectedRoute path='/books' exact component={BookIndexContainer} />
          <ProtectedRoute path='/books/:bookId' component={BookShowContainer} />

          <ProtectedRoute path='/users/:userId/bookshelves' exact component={BookshelfIndexContainer} />
          <ProtectedRoute path='/users/:userId/bookshelves/:bookshelfId' component={BookshelfShowContainer} />

        </div>
        <div className='content-right'></div>
      </div>
    </div>

  </div>
);

export default App;
