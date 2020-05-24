//import packages
import React from 'react';
import './App.css';
//router imports
import {
	HashRouter as Router,
	Route
} from 'react-router-dom';

//context api imports
import { GlobalProvider } from './context/GlobalState';

//import components and pages
import Login from './pages/Login';
import Logout from './pages/Logout';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import AnswerCheck from './pages/AnswerCheck';

//main App component
const App = () => {
    return (
        <GlobalProvider>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/result" component={Result} />
                <Route exact path="/answer" component={AnswerCheck} />
            </Router>
        </GlobalProvider>
    );
}

export default App;
