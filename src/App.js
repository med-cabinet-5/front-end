import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

//Private Route
import PrivateRoute from "./utils/PrivateRoute";

//images
import logo from "./images/logo.png"
import desktopImage from "./images/infodesktop.jpg";
import mobileImage from "./images/infomobile.jpg";
import { useWindowWidth } from "./utils/useWindowWidth"

//Components
import FormikLoginForm from "./components/LoginForm";
import FormikSignupForm from "./components/SignupForm";
import MarketingLanding from "./components/MarketingLanding";
import UserDashboard from "./components/UserDashboard";
import UserInfoForm from "./components/UserInfoForm";
import StrainSelector from "./components/StrainSelector";
import StrainSearch from "./components/StrainSearch";

//styling
import 'antd/dist/antd.css'
import './App.css'
import styled from "styled-components"

const NavLogo = styled.img`
display: flex;
justify-content: center;
max-height: 200px;
padding: 5% 0 0;
margin-bottom:8%;
`

function App() {

  const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

  return (
    <Router>

    <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
      <header className="App-header">
        <Link to="/">
            <NavLogo src={logo} alt="Logo" />
        </Link>
      </header>

      <Switch>
          <Route exact path ="/" component={MarketingLanding} />
          <Route path="/login" component={FormikLoginForm} />
          <Route path="/signup" component={FormikSignupForm} />

          <PrivateRoute path="/dashboard/:id" component={UserDashboard} />
          <PrivateRoute path="/infoform" component={UserInfoForm} />
          <PrivateRoute path="/strains" component={StrainSelector} />
          <PrivateRoute path="/search" component={StrainSearch} />
        </Switch>
    </div>
    </Router> 

  );
}

export default App;
