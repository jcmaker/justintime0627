import React, { useEffect } from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OpenTime from "./components/OpenTime";
import PostTime from "./screens/PostTime";
import { useDispatch, useSelector } from "react-redux";
import { seletUser, login, logout } from "./features/userSlice";
import { auth } from "./fbManager";
import Login from "./screens/Login";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(seletUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //loggedIn
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //loggedOut
        dispatch(logout);
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Header />
            <div className="app_body">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/time">
                  <OpenTime />
                </Route>
                <Route exact path="/postTime">
                  <PostTime />
                </Route>
              </Switch>
            </div>
            <Footer />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
