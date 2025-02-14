"use client";

import React, { useState } from "react";
import OTPInput from "./otp";
import { validateRequiredFields } from "../utils";
import { createUser, loginUser, verifyOtp } from "../actions/auth.action";
import { SUCCES_STATUS } from "../constants/status";
import { Alert } from "@mui/material";
import ToastComponent from "../shared/toast";
import { useToast } from "../hooks/useToast";

const AuthenticationComp = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [formdata, setformData] = useState({ username: "", email: "" });
  const [error, setError] = useState({});
  const [otp, setOtp] = useState(Array(6).fill(""));
  const { showToast } = useToast();

  const handleSignup = async () => {
    const validationArray = ["email"]
    if(isSignedUp){
      validationArray.push("username")
    }
    const { isValid, error = {} } = validateRequiredFields(formdata,validationArray);
    if (!isValid) {
      setError(error);
      return;
    }
    if(isSignedUp){
     const res= await createUser({body:formdata})
     const {status} = res;
     if(status == 409){
      setIsSignedUp(false)
     }else{
      setShowOtp(true)
     }

    }else{
      const res= await loginUser({body:formdata});
      const {status} = res;
      if(status == SUCCES_STATUS){
        setShowOtp(true)
      }
     
    }
    // setShowOtp(true);
  };

  const handleOtpChange = (val) => {
    setOtp(val);
  };

  const handleFormInputChange = (e) => {
    e.preventDefault();
    setformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError((prev) => ({ ...prev, [e.target.name]: undefined }));
  };
  const handleSubmitOtp = async () => {
    const res= await verifyOtp({body:{email:formdata?.email , otp:otp}});
    console.log(res)
    showToast('Hello! This is a toast')
  };

  console.log(error, formdata);
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/colorful-abstract-background_23-2148461177.jpg?t=st=1737710135~exp=1737713735~hmac=3549a81139e667c5f52e91e07739cd999541629060c2cef0474052c7f7dc4f99&w=900)",
      }}
    >
     

      {/* Dark overlay over the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content above the image */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-white space-y-6 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-semibold animate__animated animate__fadeIn animate__delay-1s">
            Welcome to Our Service
          </h1>
          <p className="text-xl animate__animated animate__fadeIn animate__delay-2s">
            Create your account to get started.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md bg-white/20 backdrop-blur-base   rounded-xl p-8 shadow-2xl space-y-6">
          {!showOtp ? (
            <>
              <h2 className="text-3xl font-semibold text-center text-white">
                {isSignedUp ? "Sign Up" : "Log in"}
              </h2>
              <form>
                <div className="space-y-8">
                  {isSignedUp && (
                    <div>
                      <input
                        onChange={handleFormInputChange}
                        name="username"
                        className={`appearance-none  bg-transparent border-b ${
                          error["username"] ? "border-red-600" : ""
                        } w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none`}
                        type="text"
                        required={true}
                        placeholder="Jane Doe"
                        aria-label="Full name"
                      />
                      {error["username"] && (
                        <p className="text-[10px] text-red-800  ">
                          {error["username"]}
                        </p>
                      )}
                    </div>
                  )}
                  <div>
                    <input
                      onChange={handleFormInputChange}
                      type="email"
                      name="email"
                      placeholder="Email"
                      required={true}
                      className={`appearance-none  bg-transparent border-b w-full text-white ${
                        error["email"] ? "border-red-600" : ""
                      }  mr-3 py-1 px-2 leading-tight focus:outline-none`}
                    />
                    {error["email"] && (
                      <p className="text-[10px] text-red-700  ">
                        {error["email"]}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleSignup}
                    className="text-white   animate-bounce w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    {isSignedUp ? "Signup" : "Login"}
                  </button>
                </div>
                <span className="text-white mt-2 text-sm">
                  {isSignedUp ? (
                    <>
                      Already have an account?{" "}
                      <span
                        onClick={() => setIsSignedUp(false)}
                        className="text-blue-500 hover:underline cursor-pointer"
                      >
                        Log in
                      </span>
                    </>
                  ) : (
                    <>
                      Don't have an account?{" "}
                      <span
                        onClick={() => setIsSignedUp(true)}
                        className="text-blue-500 hover:underline cursor-pointer"
                      >
                        Create one
                      </span>
                    </>
                  )}
                </span>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-center text-white">
                Enter OTP
              </h2>

              <OTPInput
                onOTPChange={handleOtpChange}
                onOTPComplete={handleSubmitOtp}
              />
              <button
                type="button"
                onClick={handleSubmitOtp}
                className="text-white w-full   animate-bounce bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Verify OTP
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationComp;
