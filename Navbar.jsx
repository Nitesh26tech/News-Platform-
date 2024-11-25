import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SingIn";
import "../Pages/SingIn.css";
// import About from "./About";


const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false); // SignIn page

  const handleSignInClick = () => {
    setShowSignIn(!showSignIn); 
  };

  return (
    <div>
      <nav className="container">
        <h1 className="heading">DailyDose-News</h1>
        <div className="navbar">
          <div className="nav-links">
            <Link className="nav-item" to="/general">
              Home
            </Link>
            <Link className="nav-item" to="/health">
              Health
            </Link>
            <Link className="nav-item" to="/science">
              Science
            </Link>
            <Link className="nav-item" to="/sports">
              Sports
            </Link>
            <Link className="nav-item" to="/technology">
              Technology
            </Link>
            <Link className="nav-item" to="/business">
              Business
            </Link>
            <button className="nav-item" onClick={handleSignInClick}>
              {showSignIn ? "Close SignIn" : "SignIn"}
            </button>
            <Link className="nav-item" to="/About">
              About
            </Link>
          </div>
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* SignIn component Rendering*/}
      {showSignIn && (
        <div className="signin-popup">
          <SignIn />
        </div>
      )}
    </div>
  );
};

export default Navbar;
