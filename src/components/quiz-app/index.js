import Question from "./questions";
import Result from "./result";
import initialData from "./data"
import { useState } from "react";
import "./style.css";
const QuizApp = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState([]);
  const data = initialData;
  const onClickHandler = (isCorrect) => {
    setCurrentQuestion(currentQuestion +1);
    setResult([...result, isCorrect])
  }

  console.log("length", data.length);
  return (
    <section>
      <h1>Quiz App</h1>

      {
        currentQuestion < data.length ?
          <Question data={data[currentQuestion]} onClick={onClickHandler}/> : 
          <Result userAnswers={result} correctAnswers={data} />
      }

    </section>
  )
}

export default QuizApp;