import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "./Note";
import "./NoteList.css";
import NoteForm from "./NoteForm";

class NoteList extends Component {
  render() {
    const { tasks } = this.props;
    const active = tasks.filter(task => task.active === true);
    const done = tasks.filter(task => task.active !== true);

    active.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) return 1;
      if (a.finishDate > b.finishDate) return -1;
      return 0;
    });

    const activeNote = active.map(task => (
      <li key={task.id}>
        <Note
          {...task}
          deleteNote={this.props.deleteNote}
          changeActive={this.props.changeActive}
        />{" "}
      </li>
    ));
    const doneNote = done.map(task => (
      <li key={task.id}>
        <Note
          {...task}
          deleteNote={this.props.deleteNote}
          changeActive={this.props.changeActive}
        />{" "}
      </li>
    ));
    return (
      <div>
        <NoteForm />
        <h3>Zadania do zrobienia:</h3>
        <ul>{activeNote}</ul>
        <hr />
        <h3>Zadania zrobione:</h3>
        <ul>{doneNote}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: id => {
      dispatch({ type: "DELETE_NOTE", id: id });
    },
    changeActive: (id, date) => {
      dispatch({ type: "CHANGE_ACTIVE", id: id, date: date });
    }
  };
};
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
