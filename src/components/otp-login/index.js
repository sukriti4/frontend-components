import { useState } from "react";
import PhoneOTPScreen from "./phone-otp-screen";

const OTPLogin = () => {

  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section>
      <h2>Enter Phone Number</h2>
      <PhoneOTPScreen setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
    </section>
  )
}


export default OTPLogin;