import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);

const Register = () => {
  const [err, setErr] = useState("");
  const [succes, setSuccess] = useState("");

  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr("");
    setSuccess("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    console.log(email, password);

    if (!/(?=.*[A-Z])/.test(password)) {
      setErr("Please add at least one uppercase");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErr("");

        event.target.reset();
        setSuccess("user has benn created");
        sendVerificationEmail(result.user);
        setUpdateUser(result.user, name);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
        // ..
      });
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then((result) => {
        console.log(result);
        alert("please varify Email");
      })
      .catch((err) => console.log(err));
  };

  const setUpdateUser = (name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setErr(error);
      });
  };

  return (
    <div>
      <h3> Please Registter</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="w-50 mb-4 rounded ps-2"
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          required
        />
        <br />
        <input
          onChange={handleEmailChange}
          className="w-50 mb-4 rounded ps-2"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          onBlur={handlePassword}
          className="w-50 mb-4 rounded ps-2"
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          required
        />
        <p className="text-danger">{err} </p>
        <p className="text-danger">{succes} </p>

        <br />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
