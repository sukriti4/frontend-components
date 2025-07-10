import { useState } from "react";
import OTPScreen from "./otp-screen";

const PhoneOTPScreen = ( {setPhoneNumber, phoneNumber}) => {

  const [otpScreen, setOtpScreen] = useState(false);
   const handleInputChange =(e) => {
    setPhoneNumber(e.target.value);
  }

  const onPhoneSubmit = (e) => {
    e.preventDefault();
    // API Call to BE
    setOtpScreen(true);
  }
  return (
    <>
    {
      !otpScreen ? <form onSubmit={(e) => {onPhoneSubmit(e)} }>
      <input
        type="number"

        placeholder="Enter Phone NUmber"
        onChange={(e) => handleInputChange(e)}
        value={phoneNumber}
        maxLength={10}
      />
    </form> : <div className="otp-screen">
      <OTPScreen length={4} />
    </div>
    }
    </>
  )
    
}

export default PhoneOTPScreen;