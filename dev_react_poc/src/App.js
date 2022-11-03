// --------------------- Imports ---------------------
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/bootstrap.css';
import './styles/custom.css';

import CompanyList from './components/company/CompanyList';


// --------------------- App ---------------------
class App extends Component {
  render() {
    document.title = 'POC React App';
    
    return (
      <div>
        <Router>
          <Switch>
          
            <Route exact path='/' component={CompanyList} />
            
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;