import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../src/pages/SigninPage";
import CreateBell from "../src/pages/CreateBell";
import RegularBell from "../src/pages/RegularBell";


function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/create-bell" component={CreateBell} />
        <Route path="/set-regular-bell" component={RegularBell} />
        
      </Switch>
      
    </Router>
  );
}

export default App;