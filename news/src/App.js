import "./App.css";
import NavBar from "./Components/NavBar";
import Headlines from "./Views/Headlines";
import Sports from "./Views/Sports";
import Business from "./Views/Business";
import Entertainment from "./Views/Entertainment";
import Footer from "./Components/Footer";
import React from "react";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route exact path="/">
          <Headlines />
        </Route>
        <Route exact path="/sports">
          <Sports />
        </Route>
        <Route exact path="/business">
          <Business />
        </Route>
        <Route exact path="/Entertainment">
          <Entertainment />
        </Route>
      </header>
      <Footer />
    </div>
  );
}

export default App;
