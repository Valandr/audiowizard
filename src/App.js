import React from 'react';
import MainApp from './components/MainApp'
import './App.css';
import Error from './components/Error';
import FormSex from './components/form/FormSex';
import FormFullname from './components/form/FormFullname';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return ([
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={MainApp}></Route>
          <Route path='/identity' component={FormSex} ></Route>
          <Route path='/fullname' component={FormFullname}></Route>
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  ]);

}

export default App;
