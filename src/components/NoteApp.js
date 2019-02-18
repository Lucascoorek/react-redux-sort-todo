import React, { Component } from "react";
import NoteList from "./NoteList";

export default class NoteApp extends Component {
  render() {
    return (
      <div>
        <h1>Note App</h1>
        <NoteList />
      </div>
    );
  }
}
