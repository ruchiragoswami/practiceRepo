// link:
// https://codesandbox.io/s/mini-12april-forked-2-forked-yq6kfl

import "./styles.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    content: "",
    date: ""
  });

  const [listOfNotes, setListOfNotes] = useState({
    notes: []
  });

  return (
    <div className="App">
      <h1> To Do App </h1>

      <div className="container_task_inputs">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setListOfNotes((prev) => {
              return {
                ...prev,
                notes: prev.notes.concat({
                  id: uuid(),
                  title: noteDetails.title,
                  content: noteDetails.content,
                  date: noteDetails.date,
                  time: noteDetails.time,
                  createdTime: new Date().getTime(),
                  backgroundColor: "red",
                  isPinned: false
                })
              };
            });
            setNoteDetails({ title: "", content: "" });
          }}
        >
          <div className="wrapper_input">
            <input
              value={noteDetails.title}
              type="text"
              placeholder="Task Title"
              onChange={(event) =>
                setNoteDetails((prev) => ({
                  ...prev,
                  title: event.target.value
                }))
              }
            />
          </div>

          <div className="wrapper_textarea">
            <section className="sec-for-input">
              <div className="input-group">
                <textarea
                value={noteDetails.content}
                  className="txt-input txt-area"
                  cols="30"
                  rows="10"
                  placeholder="Add task here... "
                  onChange={(event) =>
                    setNoteDetails((prev) => ({
                      ...prev,
                      content: event.target.value
                    }))
                  }
                ></textarea>
              </div>
            </section>
          </div>

          <section className="sec-for-input">
            <div className="input-group">
              {/* <label>Date</label> */}
              <input
                className="txt-input txt-validate"
                type="date"
                // placeholder="Date"
                onChange={(event) => {
                  setNoteDetails((prev) => ({
                    ...prev,
                    date: event.target.value
                  }));
                }}
              />
            </div>
          </section>

          <section className="sec-for-input">
            <div className="input-group">
              {/* <label>Enter a number between 0 and 110:</label> */}
              <input
                className="txt-input txt-validate"
                type="time"
                // placeholder="Time"
                onChange={(event) => {
                  setNoteDetails((prev) => ({
                    ...prev,
                    time: event.target.value
                  }));
                }}
              />
            </div>
          </section>

          <button className="btn btn-accent-outlined"> Add Task </button>
        </form>
      </div>

      {listOfNotes.notes.map(
        ({
          title,
          content,
          date,
          backgroundColor,
          time,
          createdTime,
          isPinned
        }) => {
          return (
            <section className="cards text-only card-shadow">
              {isPinned && <div className="pin"> pinned </div>}

              <h2
                className="heading-text-only"
                style={{ backgroundColor: backgroundColor }}
              >
                {" "}
                {title}{" "}
              </h2>
              <p className="card-text">{content} </p>
              <p className="card-text">
                {date}, {time}{" "}
              </p>
              <p className="card-text meta">
                {" "}
                created on: {`${new Date(createdTime).toLocaleString()}`}{" "}
              </p>
            </section>
          );
        }
      )}
    </div>
  );
}
