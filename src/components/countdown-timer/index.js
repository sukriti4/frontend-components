import { useEffect, useRef, useState } from "react";
import "./style.css";

const CountDownTimer = () =>{
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);


  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    // setElapsedTime(Date.now() - elapsedTime);

    console.log("time", elapsedTime);

  }

  const stop = () => {
    setIsRunning(false);
  }

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  }
  const formatTimer = () => {
    const hours= Math.floor(elapsedTime/(1000*60*60));
    const minutes= Math.floor(elapsedTime/(1000*60)%60);
    const seconds= Math.floor(elapsedTime/(1000)%60);
    return `${hours} : ${minutes} : ${seconds}`;
  }

  useEffect(() => {
    if(isRunning){
      intervalIdRef.current =  setInterval(()=>{
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10)
    }

    return () => {
      clearInterval(intervalIdRef.current);
    }
  },[isRunning])
  return (
    <section>
      <div className="timer">
        {formatTimer()}
      </div>
      <div className="controls">
        <button className="start-timer" onClick={start}>Start</button>
        <button className="stop-timer" onClick={stop}>Stop</button>
        <button className="reset-timer" onClick={reset}>Reset</button>
      </div>
    </section>
  )
}

export default CountDownTimer;