import React, { useState } from "react";
import "./App.css";
import data from "./data";
import Question from "./Question";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="container-lg my-5 App">
      <section className="row justify-content-center ">
        <div className="col-md-9 d-flex flex-column justify-content-center border rounded question-container">
          <h1 className="display-3 my-4 bg-white text-center">Questions</h1>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
