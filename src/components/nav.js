import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
const style = {
  fontSize: "1rem",
};
const dateStyle = {
  fontSize: "10px",
};

class Nav extends React.Component {
  render() {
    return (
      <div className='App'>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top backgroundColor'>
          <div className='nav-div' id='nav-title'>
            <Link to='/home'>
              <li className='navbar-brand'>
                <span style={style} className='pr-1'>
                  The
                </span>
                Pizza Parlor
              </li>
            </Link>
          </div>
          <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
            <ul className='navbar-nav nav-div'>
              <Link to='/home'>
                <li className='nav-link'>Home</li>
              </Link>
              <Link to='/menu'>
                <li className='nav-link'>Menu</li>
              </Link>
              <Link to='/aboutUs'>
                <li className='nav-link'>About</li>
              </Link>
            </ul>
          </div>
          <span style={dateStyle}>{moment().format("LLLL")} </span>
        </nav>
      </div>
    );
  }
}

export default Nav;
