import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import app from "../Firebase/Firebase.config";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
  const [error, setErr] = useState("");
  const [succes, setSucces] = useState("");
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();

    setErr("");
    setSucces("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        if (user.emailVerified) {
          alert(" varified");
        }
        setSucces("User Login Succes");
        setErr("");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
      });

    if (!/(?=.*[A-Z])/.test(password)) {
      setErr("Please add at least one uppercase");
      return;
    }
    // else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
    //   setErr("Please add at least two numbers");
    //   return;
    // } else if (password.length < 6) {
    //   setErr("Please add at least 6 characters in your password");
    //   return;
    // }
  };

  const handleResetePassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please add your Email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("please Check Your Email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className=" mx-auto">
      <h2>Please Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            ref={emailRef}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p>
        <small>
          Forget Password? Please{" "}
          <button onClick={handleResetePassword} className="btn btn-link">
            Reset Password
          </button>
        </small>
      </p>
      <p>
        <small>
          New to this website? Please <Link to="/register">Register</Link>
        </small>
      </p>
      <p className="text-danger">{error} </p>
      <p className="text-success">{succes} </p>
    </div>
  );
};

export default Login;
