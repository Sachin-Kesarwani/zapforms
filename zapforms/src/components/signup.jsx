"use client";
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import styled from 'styled-components';
// import Image from 'next/image';

// const Container = styled.div`
//   display: flex;
// `;

// const LeftSection = styled.div`
//   width: 50%;
//   background-color: #f0f4f8;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
// `;

// const RightSection = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
// `;

// const FormWrapper = styled.div`
//   width: 100%;
//   max-width: 400px;
//   background-color: white;
//   border-radius: 8px;
//   padding: 40px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #007bff;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const OTPForm = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const OTPInput = styled.input`
//   width: 50px;
//   padding: 10px;
//   text-align: center;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const SignupPage = () => {
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [otp, setOtp] = useState(Array(6).fill(''));

//   const handleSignup = () => {
//     setIsSignedUp(true);
//   };

//   const handleOtpChange = (e, index) => {
//     const newOtp = [...otp];
//     newOtp[index] = e.target.value;
//     setOtp(newOtp);
//   };

//   const handleSubmitOtp = () => {
//     alert('OTP submitted: ' + otp.join(''));
//   };

//   return (
//     <Container>
//       {/* Left Section with Animation */}
//       <LeftSection>
//         <motion.div
//           initial={{ opacity: 0, x: -100 }} // Start with an opacity of 0 and slide in from the left
//           animate={{ opacity: 1, x: 0 }} // Animate to full opacity and position
//           transition={{ duration: 1 }} // Duration of the animation
//         >
//           <Image src={require("../../assets/zapformslogo.png")} alt="Signup" style={{ width: '100%', height: '100%' }} />
//         </motion.div>
//       </LeftSection>

//       {/* Right Section with Form */}
//       <RightSection>
//         <FormWrapper>
//           {!isSignedUp ? (
//             <>
//               <h2>Signup</h2>
//               <form>
//                 <Input type="text" placeholder="Username" />
//                 <Input type="email" placeholder="Email" />
//                 <Button type="button" onClick={handleSignup}>Sign Up</Button>
//               </form>
//             </>
//           ) : (
//             <>
//               <h2>Enter OTP</h2>
//               <OTPForm>
//                 {otp.map((digit, index) => (
//                   <OTPInput
//                     key={index}
//                     type="text"
//                     maxLength="1"
//                     value={digit}
//                     onChange={(e) => handleOtpChange(e, index)}
//                   />
//                 ))}
//               </OTPForm>
//               <Button type="button" onClick={handleSubmitOtp}>Verify OTP</Button>
//             </>
//           )}
//         </FormWrapper>
//       </RightSection>
//     </Container>
//   );
// };

// export default SignupPage;

import React, { useState } from 'react';

const SignupPage = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(''));

  const handleSignup = () => {
    setIsSignedUp(true);
  };

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const handleSubmitOtp = () => {
    alert('OTP submitted: ' + otp.join(''));
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/colorful-abstract-background_23-2148461177.jpg?t=st=1737710135~exp=1737713735~hmac=3549a81139e667c5f52e91e07739cd999541629060c2cef0474052c7f7dc4f99&w=900)' }}>
      {/* Dark overlay over the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content above the image */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-white space-y-6 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-semibold animate__animated animate__fadeIn animate__delay-1s">Welcome to Our Service</h1>
          <p className="text-xl animate__animated animate__fadeIn animate__delay-2s">Create your account to get started.</p>
        </div>

        {/* Form Section */}
  <div className="w-full max-w-md backdrop-blur bg-white/20  rounded-xl p-8 shadow-2xl space-y-6">
          {!isSignedUp ? (
            <>
              <h2 className="text-3xl font-semibold text-center text-gray-800">Sign Up</h2>
              <form>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <button
                    type="button"
                    onClick={handleSignup}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-center text-gray-800">Enter OTP</h2>
              <div className="flex justify-between mt-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    className="w-16 h-16 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleSubmitOtp}
                className="w-full py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out mt-6"
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

export default SignupPage;
