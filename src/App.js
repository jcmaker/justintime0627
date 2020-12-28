import React from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <div className="app_body">
            <Home />
            {/* <Switch>
              <Route>

              </Route>
            </Switch> */}
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
