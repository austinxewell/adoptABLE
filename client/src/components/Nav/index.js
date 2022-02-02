import React from "react";
import Auth from "../../utils/auth";
import { BrowserRouter as Router, Link } from "react-router-dom";


import "./nav.css";

export default function Nav(props) {
  const tabsOut = ["adoptABLE", "About", "Contact"];
  const tabsIn = [
    "adoptABLE",
    "About",
    "Contact",
    "Adopt",
    "Messenger",
    "Profile",
  ];
  const registerOut = ["Log In", "Sign Up"];
  const registerIn = ["Log Out"];

  function logout(event) {
    console.log("logging out");
    event.preventDefault();
    Auth.logout();
  }

  return (
    <header className="nav-options">
      {/* left nav options */}
      <nav className="nav-left-options">
        {Auth.loggedIn() ? (
          <>
            <div className="">
              {registerIn.map((register) => (
                <Link
                  className=""
                  to={register.toLowerCase()}
                  onClick={logout}
                  key={register}
                >
                  {register}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="">
            {registerOut.map((register) => (
              <Link
                className="nav-button"
                to={register.toLowerCase()}
                key={register}
              >
                {register}
              </Link>
            ))}
          </div>
        )}
      </nav>
      
      {/* right nav options */}
      <nav className="nav-right-options">
        {Auth.loggedIn() ? (
          <>
            <div className="">
              {tabsIn.map((tab) => (
                <Link
                  className="nav-button"
                  to={tab.toLowerCase()}
                  key={tab}
                >
                  {tab}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <div className="">
            {tabsOut.map((tab) => (
              <Link
                className="nav-button"
                to={tab.toLowerCase()}
                key={tab}
              >
                {tab}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
