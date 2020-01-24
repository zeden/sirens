import React from "react";/*zet*/
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  Icon
} from "react-router-dom";
import AmenagementList from "./components/amenagement/AmenagementList.js";

import "./app.css";
const link = () => <Link to="/">retour</Link>;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: []
    };
  }
  /* DemandeList = (
   
  );*/
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/amenagement/new"
            render={() => <Link to="/">retour</Link>}
          />
          <Route
            path="/amenagement/preview"
            render={() => <Link to="/">preview</Link>}
          />
          <Route path="/" component={AmenagementList} />
        </Switch>
      </Router>
    );
  }
}
