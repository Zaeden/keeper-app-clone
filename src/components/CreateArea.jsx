import React, { useState } from "react";

function CreateArea(props) {
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
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
