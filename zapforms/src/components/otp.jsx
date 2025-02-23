import React, { useState, useRef } from "react";

const OTPInput = ({ onOTPChange, onOTPComplete , existOtp =["", "", "", "", "", ""]}) => {
  const [otp, setOtp] = useState(existOtp);
  const inputs = Array(6).fill(null).map(() => useRef(null));

  const handleChange = (value, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value.slice(-1); // Only allow the last digit
    setOtp(updatedOtp);
    onOTPChange(updatedOtp.join(""));

    // Move to next input
    if (value && index < 5) {
      inputs[index + 1].current.focus();
    }

    // If the last input is filled, trigger OTP complete callback
    if (index === 5 && value) {
      onOTPComplete(updatedOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs[index - 1].current.focus();
    }
  };
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      onOTPChange(newOtp.join(""));
      onOTPComplete(newOtp.join(""));

      // Move focus to the last input
      inputs.current[5].focus();
    }
    e.preventDefault();
  };

  return (
    <div className="">
      <div className="flex gap-2 justify-evenly">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={inputs[index]}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            placeholder="o"
            onPaste={index === 0 ? handlePaste : null} 
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-13 md:h-13  text-center text-blue-900 border-[1px] border-gray-300 rounded-md text-lg focus:outline-none focus:ring-[1px] focus:ring-green-500"
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
