import React from 'react';
import { NavLink, useParams, useRouteMatch } from 'react-router-dom';

export default function Shelf(props) {
  let { topic } = useParams();
  let match = useRouteMatch('/books');

  const filters = props.books.filter((book) => book.topic === topic);
  const books = topic ? filters : props.books;

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
        <div className="mdl-grid">
          {books.map((book) => (
            <div
              key={book.slug}
              className="book-card mdl-cell mdl-cell--6-col mdl-card mdl-shadow--2dp"
            >
              <div className="mdl-card__content">
                <img
                  src={`/img/books/${book.cover}`}
                  className="book-card__image"
                />
                <div className="book-card__details">
                  <h2 className="book-card__title">{book.title}</h2>
                  <div className="book-card__info">
                    <p>{book.author}</p>
                    <p>
                      {book.publisher}, {book.year}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mdl-card__actions mdl-card--border">
                <NavLink
                  to={`/books/${topic}/${book.slug}`}
                  className="mdl-button mdl-button--colored"
                >
                  Подробнее
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
