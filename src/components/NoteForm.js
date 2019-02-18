import React, { Component } from "react";
import { connect } from "react-redux";

class NoteForm extends Component {
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

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text.length > 2) {
      this.props.addNote(this.state.text, this.state.date, this.state.priority);
      this.setState({ text: "", priority: false, date: this.minDate });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Dodaj zadanie"
            value={this.state.text}
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

const mapDispatchToProps = dispatch => {
  return {
    addNote: (text, date, priority) => {
      dispatch({
        type: "HANDLE_SUBMIT",
        text: text,
        date: date,
        priority: priority
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NoteForm);
