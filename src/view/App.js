import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Profile from './Profile';
import ViewProfile from './ViewProfile';
import AddUserProfile from './AddUserProfile';


class App extends React.Component {
  
  render() {
   return (
    <Router>
      <Switch>
            <Redirect exact path="/" to="/UserProfile" />
            <Route  path='/UserProfile' component={Profile} />
            <Route path='/ViewProfile' component={ViewProfile}/>
            <Route path='/AddUserProfile' component={AddUserProfile}/>
            
      </Switch>  
    </Router>
  );
  }
}

export default App;

