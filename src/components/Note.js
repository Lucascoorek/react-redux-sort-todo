import React from "react";
import "./Note.css";

export default function Note({
  content,
  date,
  active,
  deleteNote,
  id,
  finishDate,
  changeActive,
  priority
}) {
  const time = new Date().getTime();
  const date1 = new Date(time).toLocaleString();
  return (
    <div>
      {active ? (
        <div>
          Do:
          <span className="date"> {date}</span>{" "}
          <span style={priority ? { color: "red", fontWeight: "bold" } : null}>
            {" "}
            {content}
          </span>
          <button onClick={() => changeActive(id, date1)}>Wykonane</button>
          <button onClick={() => deleteNote(id)}>X</button>{" "}
        </div>
      ) : (
        <div>
          W dniu:
          <span className="date"> {finishDate}</span> <span> {content}</span>
          <button onClick={() => deleteNote(id)}>X</button>
        </div>
      )}
    </div>
  );
}
