import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

//Private Route
import PrivateRoute from "./utils/PrivateRoute";

//Components
import FormikLoginForm from "./components/LoginForm";
import FormikSignupForm from "./components/SignupForm";
import MarketingLanding from "./components/MarketingLanding";
import UserDashboard from "./components/UserDashboard";
import UserInfoForm from "./components/UserInfoForm";
import StrainSelector from "./components/StrainSelector";

//styling
import './App.css';

function App() {
  return (
    <Router>


    <div className="App">
      <header className="App-header">
        <h1>
          Med Cabinet 5
        </h1>
      </header>

      <Switch>
          <Route exact path ="/"/>
          <Route path="/home" component={MarketingLanding} />
          <Route path="/login" component={FormikLoginForm} />
          <Route path="/signup" component={FormikSignupForm} />

          <PrivateRoute path="/dashboard/:id" component={UserDashboard} />
          <PrivateRoute path="/userinfo/:id" component={UserInfoForm} />
          <PrivateRoute path="/strains/:id" component={StrainSelector} />
        </Switch>
    </div>
    </Router> 

  );
}

export default App;
