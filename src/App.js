import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link, Switch } from "react-router-dom";
import Home from './Home';
import Expense from './Expense';
import Events from './Events';


class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route exact path="/Expense" component={ Expense }></Route>
          <Route exact path="/Events" component={ Events }></Route>
        </Switch>
      </Router>
    );
  }
}

export default App