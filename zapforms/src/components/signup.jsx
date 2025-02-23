"use client";

import React, { useEffect, useState, useTransition } from "react";
import OTPInput from "./otp";
import { validateRequiredFields } from "../utils";
import { createUser, loginUser, verifyOtp } from "../actions/auth.action";
import { SUCCES_STATUS } from "../constants/status";
import { useSnackbar } from "../providers/snackbarProvide";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import Icon from "../shared/icon";
import { localStorageUtil } from "../storage/localstorage";
import { USER_TOKEN } from "../constants";
import CookieManager from "../storage/cookiesstorage";

const AuthenticationComp = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const emailfromSearchParams = searchParams.get("email") || "";
  const otpfromSearchParams = searchParams.get("otp") || "";

  const [isSignedUp, setIsSignedUp] = useState(false);
  const [showOtp, setShowOtp] = useState(
    otpfromSearchParams?.length == 6 ? true : false
  );
  const [isotploading, setIsotploading] = useState(false);
  const [formdata, setformData] = useState({
    username: "",
    email: emailfromSearchParams,
  });
  const [error, setError] = useState({});
  const [otp, setOtp] = useState(Array(6).fill(""));
  const { showSnackbar } = useSnackbar();

  const [isPending, startTransition] = useTransition();

  const handleSignup = async () => {
    const validationArray = ["email"];
    if (isSignedUp) {
      validationArray.push("username");
    }
    const { isValid, error = {} } = validateRequiredFields(
      formdata,
      validationArray
    );
    if (!isValid) {
      setError(error);
      return;
    }
    if (isSignedUp) {
      const res = await createUser({
        body: { ...formdata, redirectTo: redirectTo },
      });
      const { status } = res;
      if (status == 409) {
        startTransition(() => {
          setIsSignedUp(false);
        });
      } else {
        startTransition(() => {
          setShowOtp(true);
        });
      }
    } else {
      const res = await loginUser({
        body: { ...formdata, redirectTo: redirectTo },
      });
      const { status, message } = res;
      if (status == SUCCES_STATUS) {
        startTransition(() => {
          setShowOtp(true);
        });
      } else {
        startTransition(() => {
          setError((prev) => ({ ...prev, email: message }));
        });
      }
    }
  };

  const handleOtpChange = (val) => {
    setOtp(val);
  };

  const handleFormInputChange = (e) => {
    e.preventDefault();
    setformData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError((prev) => ({ ...prev, [e.target.name]: undefined }));
  };
  const handleSubmitOtp = async (incomingotp = "") => {
    if (incomingotp.length < 6) {
      showSnackbar({ message: "Please enter 6 digit otp", severity: "error" });
      return;
    }
    setIsotploading(true);
    const res = await verifyOtp({
      body: { email: formdata?.email, otp: incomingotp },
    });
    const { status, message, token } = res || {};
    if (status === SUCCES_STATUS) {
      showSnackbar({ message: message, severity: "success" });
      CookieManager.set(USER_TOKEN, token);
      // localStorageUtil.set(USER_TOKEN , token)
      redirect(redirectTo);
    } else {
      showSnackbar({ message: message, severity: "error" });
    }
    setIsotploading(false);
  };
  useEffect(() => {
    if (emailfromSearchParams && otpfromSearchParams) {
      handleSubmitOtp(otpfromSearchParams);
    }
  }, [otpfromSearchParams]);
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
            <button onClick={() => test()}>test</button>
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
                        value={formdata?.username || ""}
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
                      value={formdata?.email || ""}
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
                    disabled={isPending}
                    type="button"
                    onClick={handleSignup}
                    className="text-white   animate-bounce w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    {isPending ? "Loading..." : isSignedUp ? "Signup" : "Login"}
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
                        onClick={() => {
                          setIsSignedUp(true);
                          setError({});
                        }}
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
              <div>
                <button onClick={() => setShowOtp(false)}>
                  <Icon type={"left_arrow"} color={"white"} size={30} />
                </button>
                <h2 className="text-3xl font-semibold text-center text-white">
                  Enter OTP
                </h2>
              </div>

              <OTPInput
                onOTPChange={handleOtpChange}
                onOTPComplete={handleSubmitOtp}
                existOtp={
                  otpfromSearchParams
                    ? otpfromSearchParams.split("")
                    : ["", "", "", "", "", ""]
                }
              />
              <button
                disabled={isotploading}
                type="button"
                onClick={() => handleSubmitOtp()}
                className="text-white w-full   animate-bounce bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                {isotploading ? "Verifying OTP" : "Verify OTP"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationComp;
