import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setNote(function (prev) {
      return { ...prev, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    return props.addNote(note);
  }

  return (
    <div>
      <form>
        {isExpanded ? (
          <input
            onChange={changeHandler}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          onClick={expand}
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={note.content}
        />
        {isExpanded ? (
          <Zoom in={isExpanded}>
            <Fab onClick={submitHandler} className="button">
              <AddIcon className="add-note" />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
