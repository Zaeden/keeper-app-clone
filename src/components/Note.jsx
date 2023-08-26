import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(noteDetail) {
  function clickHandler(event) {
    return noteDetail.deleteNote(noteDetail.id);
  }

  return (
    <div className="note">
      <h1>{noteDetail.title}</h1>
      <p>{noteDetail.content}</p>
      <button onClick={clickHandler}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
