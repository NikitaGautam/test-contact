import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "./context";

// import Test from "./components/test/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="My Contacts" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route
                exact
                path="/contact/edit/:id"
                component={EditContact}
              ></Route>
              <Route exact path="/about" component={About}></Route>

              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
