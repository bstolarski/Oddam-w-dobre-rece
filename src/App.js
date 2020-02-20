import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

// import './App.css';

function App() {
    return (
        <HashRouter>
            <>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Login" component={() => <Login title='Zaloguj się' repeatPassword={false}/>}/>
                    <Route exact path="/Register"
                           component={() => <Login title='Załóż konto' repeatPassword={true}/>}/>
                </Switch>
            </>
        </HashRouter>
    );
}

export default App;
