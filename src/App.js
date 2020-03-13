import React from 'react';
import StartScreen from './start';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WebView from './pages/web/web';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App"> 
       <Switch>
          <Route exact path="/">
            <StartScreen />
          </Route>
          <Route path="/web">
            <WebView />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
