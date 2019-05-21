import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import ExportToCsv from '../components/exportToCsv';
import ExportToXlxs from '../components/exportToxlxs';


class App extends React.Component {
  
  render() {
   return (
    <Router>
      <Switch>
            <Redirect exact path="/" to="/ExportToCsv" />
            <Route  path='/ExportToCsv' component={ExportToCsv} />
            <Route  path='/ExportToXlxs' component={ExportToXlxs} />
          
            
      </Switch>  
    </Router>
  );
  }
}

export default App;

