import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import "./login.css";

import Auth from "../../utils/auth";

export default function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <section className="">
      <h1 className="">Login</h1>
      <div className="login-wrapper">
        {error && <div className="failed-login">Login Failed</div>}

        <form className="" onSubmit={handleFormSubmit}>
          <div className="">
            <input
              className="email-input"
              placeholder="Email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <input
              className="password-input"
              placeholder="Password"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button className="login-button" type="submit">
              Log In
            </button>
          </div>
          <button className="go-to-signup-button">
            <Link
              className="go-to-singup-text"
              to="sign up">
              ← Go to Sign Up
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
}
