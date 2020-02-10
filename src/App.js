import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
// import './App.css';

function App() {
  return (
      <HashRouter>
        <>
            <Switch>
              <Route exact path="/" component={Home}/>
            </Switch>
        </>
      </HashRouter>
  );
}

export default App;
