import { useEffect, useRef, useState } from "react";

const OTPScreen = ({length = 4}) => {
  const [otp, setOTP] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = () => {

  }

  const handleClickEvent = () => {

  }
  const handleKeyEvent = () => {

  }

  useEffect(() => {
    if(inputRefs.current[0]){
      inputRefs.current[0].focus();
    }
  },[])
  return (
    <div>
      {
        otp.map((item, index) => 
          <input 
            type="number" 
            key={index} 
            ref={(input) => inputRefs.current[index] = input}
            value={item} 
            onChange={(e) => handleChange(e)}
            onClick={(e) =>handleClickEvent(e)}
            onKeyDown={(e) => handleKeyEvent(e)}
          />)
      }
    </div>
  )
}

export default OTPScreen;