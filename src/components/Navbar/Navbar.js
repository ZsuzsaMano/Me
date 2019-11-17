import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <Link to='/Cv'>
            <li className="nav-item nav-link">
              Resume
            </li>
            </Link>
            <Link to='/Cover'>
            <li className="nav-item nav-link">
            Cover Letter
            </li>
            </Link>
            <li className="nav-item download">
              <a className="nav-link" href="./ZsuzsaLukacsCV.pdf">DOWNLOAD in PDF</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
