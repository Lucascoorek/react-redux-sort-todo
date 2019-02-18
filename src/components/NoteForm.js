import React, { Component } from "react";

export default class NoteForm extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  maxDate = new Date().toISOString().slice(0, 4) * 1 + 2 + "-12-31";
  state = {
    text: "",
    date: this.minDate,
    priority: false
  };
  handleState = e => {
    if (e.target.type === "checkbox") {
      this.setState({
        priority: e.target.checked
      });
    } else {
      this.setState({
        [e.target.type]: e.target.value
      });
    }
  };
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSubmit(
              this.state.text,
              this.state.date,
              this.state.priority
            );
          }}
        >
          <input
            type="text"
            placeholder="Dodaj zadanie"
            onChange={this.handleState}
          />
          <input
            id="priority"
            type="checkbox"
            checked={this.state.priority}
            onChange={this.handleState}
          />
          <label htmlFor="priority"> Priorytet</label>
          <br />
          <label htmlFor="date">Do kiedy zrobić: </label>
          <input
            onChange={this.handleState}
            id="date"
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={this.maxDate}
          />
          <button>Dodaj zadanie</button>
        </form>
      </div>
    );
  }
}
