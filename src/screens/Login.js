import React from "react";
import { Button } from "@material-ui/core";
import { auth, providerGoogle } from "../fbManager";
import Loading from "./Loading";

function Login() {
  return (
    <>
      <Loading />

      <div className="login">
        <div className="login__logo">
          <h1>JustinTime</h1>
          <h5>made by Justin</h5>
        </div>
        <Button
          className="login__btn"
          onClick={() => {
            auth
              .signInWithPopup(providerGoogle)
              .catch((error) => alert(error.message));
          }}
        >
          Login with Google
        </Button>
      </div>
    </>
  );
}

export default Login;
