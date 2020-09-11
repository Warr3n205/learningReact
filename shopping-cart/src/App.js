import React, { Component } from "react";
import Navbar from "./components/navbarComponent.jsx";
import Counters from "./components/countersComponent.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
