const Result = ({userAnswers, correctAnswers}) => {
  console.log("userAn", userAnswers);
  return (
    <div>
      <h1>Results</h1>
      {
        correctAnswers?.map((item, index) => (
          <li key={index} className={`${userAnswers[index]}`} data-correct={userAnswers[index]}>
            <p>{item?.question}</p>
            {/* <p className="answer">{item?.answerOptions[userAnswers[index]]}</p> */}
          </li>
        ))
      }
    </div>
  )
}

export default Result;