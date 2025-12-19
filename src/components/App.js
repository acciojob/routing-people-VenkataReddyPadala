import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserList}></Route>
        <Route path="/users/:id" exact component={UserDetails}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
