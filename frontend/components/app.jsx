import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
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

        <div className='content-left'>
          <ProtectedRoute
            path='/users/:userId/bookshelves'
            component={BookshelfIndexContainer}
          />
        </div>

        <div className='content-middle'>

          <Route path='/' render={() => <div>Home</div>} />
          <Switch>
            <AuthRoute path='/signup' exact component={SessionFormContainer} />
            <AuthRoute path='/signin' exact component={SessionFormContainer} />
          </Switch>

          <ProtectedRoute path='/' exact component={GreetingContainer} />
          <ProtectedRoute path='/users/:userId/bookshelves' exact component={GreetingContainer} />
          <ProtectedRoute path='/books' exact component={BookIndexContainer} />
          <ProtectedRoute path='/books/:bookId' component={BookShowContainer} />

          <ProtectedRoute
            path='/users/:userId/bookshelves/:bookshelfId'
            component={BookshelfShowContainer}
          />

        </div>
        <div className='content-right'></div>
      </div>
    </div>

  </div>
);

export default App;
// <ProtectedRoute
//   path='/users/:userId/bookshelves' exact
//   component={BookshelfShowContainer}
//   />
//
