import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import "./signUp.css";

import Auth from "../../utils/auth";

export default function SignUp(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <section className="">
      <h1>SignUp</h1>
      <div className="signup-wrapper">
        {error && <div className="failed-signup">Signup Failed</div>}
        <form className="" id="" onSubmit={handleFormSubmit}>
          <div className="">
            <input
              className="create-username-input"
              placeholder="Create Username"
              name="username"
              type="text"
              id="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <input
              className="create-email-input"
              placeholder="Create Email"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <input
              className="create-password-input"
              placeholder="Create Password"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button className="create-account-button" type="submit">
              Create Account
            </button>
          </div>
          <button className="go-to-login-button">
            <Link className="go-to-login-text" to="log in">
              ← Go to Login
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
}
