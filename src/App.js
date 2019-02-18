import React, { Component } from "react";
import "./App.css";
import NoteApp from "./components/NoteApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteApp />
      </div>
    );
  }
}

export default App;
