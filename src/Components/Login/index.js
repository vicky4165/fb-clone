/* eslint-disable no-unused-vars */
import React from "react";
import "./Login.css";
import Logo from "../../Assets/images/logo.webp";
import LogoText from "../../Assets/images/Facebook-Logo.wine.svg";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        console.log("ERR: ", err.message);
        alert("Cannot reach google at the moment.");
      });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={Logo} alt="" />
        <img src={LogoText} alt="" />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
