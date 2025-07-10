import { useEffect, useState } from "react";
import './style.css';
const ProgressBar = () => {
  const [value, setValue] = useState(0);

  const [percent, setPercent] = useState(value);
  useEffect(() => {
    let timer = setInterval(()=>{
      setValue(prev=>prev+1);
    },100)
    setPercent(Math.min(100, Math.max(0, value)));
    return () => clearInterval(timer)
  },[value])

  return (
    <div className="wrapper">
      <div className="progress-bar">
        <div className="tracker" style={{backgroundColor: 'green',height:'100%', width: `${percent}%`}}></div>
        <span className="value" style={{color : `${percent > 50 ? 'white' : '#000'}`}}>{percent.toFixed() + '%'}</span>
      </div>
    </div>
  )
}

export default ProgressBar;