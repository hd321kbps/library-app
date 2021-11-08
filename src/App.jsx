import React from 'react';
import { Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Books from './components/Books.jsx';

import Book from './components/Book.jsx';
import NotFound from './components/NotFound.jsx';
import books from './data/books';

function App(props) {
  return (
    <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">LibraryJS</span>
          <span className="mdl-layout-spacer"></span>

          <nav className="mdl-navigation">
            {/* <NavLink
              exact
              to="/"
              activeClassName="active"
              className="mdl-navigation__link"
            >
              Главная
            </NavLink> */}
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: 'orange',
                fontWeight: 'bold'
              }}
              className="mdl-navigation__link"
            >
              Главная
            </NavLink>
            <NavLink to="/about" className="mdl-navigation__link">
              О проекте
            </NavLink>
            <NavLink to="/books" className="mdl-navigation__link">
              Книги
            </NavLink>
            {/* <NavLink2 to="/books" className="mdl-navigation__link">
              Книги
            </NavLink2> */}
          </nav>

          {/* <nav className="mdl-navigation">
            <Link to="/" className="mdl-navigation__link">
              Главная
            </Link>
            <Link to="/about" className="mdl-navigation__link">
              О проекте
            </Link>
            <Link to="/books" className="mdl-navigation__link">
              Книги
            </Link>
          </nav> */}

          {/* <nav className="mdl-navigation">
            <a href="/" className="mdl-navigation__link">
              Главная
            </a>
            <a href="/about" className="mdl-navigation__link">
              О проекте
            </a>
            <a href="/books" className="mdl-navigation__link">
              Книги
            </a>
          </nav> */}
        </div>
      </header>

      <main className="mdl-layout__content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/books">
            <Books books={books} />
          </Route>
          <Route exact path="/books/:topic">
            <Books books={books} />
          </Route>
          <Route path="/books/:topic/:slug">
            <Book books={books} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
