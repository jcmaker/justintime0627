import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../fbManager";

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        <h1>JustinTime</h1>
      </div>
      <Button
        className="login__btn"
        onClick={() => {
          auth.signInWithPopup(provider).catch((error) => alert(error.message));
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
