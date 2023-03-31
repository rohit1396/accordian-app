import React, { useState } from "react";
import "./Question.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <section className="container-lg border py-3 my-3 bg-white">
      <header className="row justify-content-between align-items-center bg-white">
        <span className="col-8 fs-5 bg-white">{title}</span>
        <div className="col-2 bg-white">
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              onClick={() => setShow(!show)}
              className="bi bi-dash-circle-fill bg-white button-icon"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              onClick={() => setShow(!show)}
              className="bi bi-plus-circle-fill bg-white button-icon"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          )}
        </div>
      </header>
      {show && <p className="bg-white">{info}</p>}
    </section>
  );
};

export default Question;
