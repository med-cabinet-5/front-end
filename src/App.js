import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//Private Route
import PrivateRoute from "./utils/PrivateRoute";

//Components
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
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
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/login"> Log-in</Link>
          <Link to="/signup"> Sign-Up</Link>
        </nav>
        <p>
          Med Cabinet 5
        </p>
      </header>
      <Switch>
        <Route exact path="/" component={MarketingLanding} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <PrivateRoute path="/dashboard/:id" component={UserDashboard} />
        <PrivateRoute path="/userinfo/:id" component={UserInfoForm} />
        <PrivateRoute path="/strains/:id" component={StrainSelector} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
