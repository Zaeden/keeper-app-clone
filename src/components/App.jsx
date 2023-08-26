import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";

// console.log(notes);

function App() {

  const [notes, setNotes] = useState([{
    title: "Title",
    content: "Content"
  }]);

  

  function addNewNote(newNote) {
    // console.log(newNote);
    setNotes(function(prev) {
      return [...prev, newNote]
    });
  }

  function deleteNote(id) {
    console.log(id);
    setNotes(function(prev) {
      return prev.filter(function(note, index) {
        return index !== id;
      })
    })
  }

  return (
    <>
      <Header />
      <CreateArea addNote={addNewNote} />
      {notes.map((note, index) => {
        return (
          <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
