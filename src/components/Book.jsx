import React from 'react';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';

export default function Book(props) {
  let { slug } = useParams();
  let match = useRouteMatch('/books');

  const books = props.books;
  const book = books.find((book) => book.slug === slug);
  return (
    <div className="mdl-tabs">
      <div className="mdl-tabs__tab-bar">
        <NavLink to={`${match.url}/javascript`} className="mdl-tabs__tab">
          JavaScript
        </NavLink>
        <NavLink to={`${match.url}/react`} className="mdl-tabs__tab">
          React
        </NavLink>
        <NavLink to={`${match.url}/vue`} className="mdl-tabs__tab">
          Vue
        </NavLink>
        <NavLink to={`${match.url}/angular`} className="mdl-tabs__tab">
          Angular
        </NavLink>
      </div>

      <div className="mdl-tabs__panel">
        <section className="content book">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
              <div className="mdl-grid mdl-grid--no-spacing">
                <div className="mdl-cell mdl-cell--3-col">
                  <img
                    src={`/img/books/${book.cover}`}
                    className="book-cover"
                  />
                </div>

                <div className="mdl-cell mdl-cell--9-col">
                  <div className="mdl-card__title">
                    <h1 className="mdl-card__title-text">{book.title}</h1>
                  </div>

                  <div className="mdl-card__supporting-text">
                    <div>
                      <strong>Автор: </strong>
                      {book.author}
                    </div>
                    <div>
                      <strong>Издательство: </strong>
                      {book.publisher}
                    </div>
                    <div>
                      <strong>Страниц: </strong>
                      {book.pages}
                    </div>
                    <div>
                      <strong>Год: </strong>
                      {book.year} г.
                    </div>
                  </div>

                  <div className="mdl-card__supporting-tex">
                    {book.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
