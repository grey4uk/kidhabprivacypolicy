import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage/PrivacyPolicyPage.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <PrivacyPolicyPage />
          </Route>
          <Route path={`/:language`}>
            <PrivacyPolicyPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
