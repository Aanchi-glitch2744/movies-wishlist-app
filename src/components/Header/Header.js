import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/wishlist">Movie Wish List</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>

            <li>
              <Link to="private">Private</Link>
            </li>

            <li>
              <Link to="add" className="btn btn-main">
                Search + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
