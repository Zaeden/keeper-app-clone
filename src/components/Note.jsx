import React from "react";

function Note(noteDetail) {
    return (
        <div className="note">
            <h1>{noteDetail.title}</h1>
            <p>{noteDetail.content}</p>
        </div>
    )
}

export default Note;
 