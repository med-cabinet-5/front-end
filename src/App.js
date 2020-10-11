import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//Private Route
import PrivateRoute from "./utils/PrivateRoute";

//images

import desktopImage from "./images/desktop.jpg";
import mobileImage from "./images/mobile.jpg";
import { useWindowWidth } from "./utils/useWindowWidth"

//Components
import FormikLoginForm from "./components/LoginForm";
import FormikSignupForm from "./components/SignupForm";
import MarketingLanding from "./components/MarketingLanding";
import UserDashboard from "./components/UserDashboard";
import UserInfoForm from "./components/UserInfoForm";
import StrainSelector from "./components/StrainSelector";
import SavedStrains from './components/SavedStrains'
// import StrainSearch from "./components/StrainSearch";

//contexts
import { StatsResultsContext } from "./contexts/StatsResultsContext";
import { StrainResultsContext } from "./contexts/StrainResultsContext";
import { UserContext } from "./contexts/UserContext";
// import { StoresContext } from "./contexts/StoresContext";

//styling
import 'antd/dist/antd.css'
import './App.css'
import styled from 'styled-components';

const AppContainer = styled.div`
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;

  @media(max-width: 700px){
    height: auto;
  }
`

function App() {
  
  const [strainData, setStrainData] = useState([]);
  const [statsData, setStatsData] = useState([]);

  const [user, setUser] = useState([])

  return (
    <Router>
    
    <UserContext.Provider value={[user, setUser]}>
    <StrainResultsContext.Provider value={[ strainData, setStrainData ]}>
    <StatsResultsContext.Provider value={[ statsData, setStatsData ]}>

    <AppContainer 
      className="App" 
      style={{
        backgroundImage: `url(${desktopImage})`
      }}>

      <Switch>
          <Route exact path="/" component={MarketingLanding} />
          <Route path="/login" component={FormikLoginForm} />
          <Route path="/signup" component={FormikSignupForm} />

          <PrivateRoute path="/dashboard/:id/info" component={UserInfoForm} />
          <PrivateRoute path="/dashboard/:id/favorites" component={SavedStrains} />
          <PrivateRoute path="/dashboard/:id/recommendations" component={StrainSelector} />
          <PrivateRoute path="/dashboard/:id/settings" component={UserDashboard}/>
          {/* <PrivateRoute path="/search" component={StrainSearch} /> */}
      </Switch>

    </AppContainer>
    </StatsResultsContext.Provider>
    </StrainResultsContext.Provider>
    </UserContext.Provider>

    </Router> 

  );
}

export default App;
