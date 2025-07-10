const Question = ({data, onClick}) => {
  return (
    <div className="wrapper">
          <div className="question">
            <h2>{data?.question}</h2>
            <div className="button-list">
            {data?.answerOptions?.map((ans, index) => <button key={index} className="ans-value" onClick={() => {
              onClick(ans.isCorrect)
            }}>{ans?.text}</button>)}
            </div>
          </div>
    </div>
  )
}

export default Question;