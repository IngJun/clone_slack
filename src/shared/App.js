import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { ChannelHome, Channel, Login, signupPage } from '../pages'
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/ConfigStore";


function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Login}></Route>
        <Route path="/channel" exact component={ChannelHome} />
        <Route path="/channel/:roomid" exact component={Channel} />
        <Route path="/signuppage" exact component={signupPage}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
