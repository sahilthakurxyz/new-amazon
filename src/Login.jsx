import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import { auth } from "./firebase";
function Login() {
  let history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          alert("congratulaton you have seccessull login");
          history("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const onRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amozon"
        />
      </Link>
      <div className="login__container">
        <h2>Sign-up</h2>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__sinup" onClick={onSignUp}>
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Clone Conditions of Use and
            Privacy Notice.
          </p>
          <div className="new_to_amazon">
            <p className="f__dash">_________</p>
            <p> New to Amazon?</p>
            <p className="s__dash">_________</p>
          </div>

          <button
            type="submit"
            onClick={onRegister}
            className="login__Registeration"
          >
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
