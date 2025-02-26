"use client";
import React from "react";
import zapformsLogo from "../../assets/createformImage.jpg"; // Static import for the image
import Image from "next/image";
import { useRouter } from "next/navigation";

const Createformcomp = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col xl:flex-row mt-6 md:flex-row items-center justify-evenly px-6 py-10">
      {/* Image Section (Left side) */}
      <div
        onClick={() => router.push("/create")}
        className="w-full cursor-pointer md:w-1/2  flex flex-row justify-center "
      >
        <Image
          alt="Zapforms Logo"
          src={zapformsLogo}
          width={200}
          height={200}
          className="rounded-lg shadow-xl"
        />
      </div>

      {/* Text Section (Right side) */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 p-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-lg shadow-xl">
        {/* Main Heading with Animation */}
        <p className="text-4xl md:text-5xl font-extrabold text-white hover:text-yellow-200 transform transition duration-500 ease-in-out hover:scale-105">
          Revolutionize Your Form Creation
        </p>

        {/* Subheading with Fade-in Animation */}
        <p className="text-lg md:text-xl text-blue-100 font-medium transition-opacity duration-700 opacity-0 animate-fadeIn">
          Create and manage forms effortlessly—no hassle, just results.
        </p>

        {/* Call to Action with Bounce Animation */}
        <p className="text-xl md:text-2xl text-orange-100 font-semibold hover:text-orange-200 transition-all duration-300 transform hover:scale-105 animate-bounce">
          Fast. Simple. Powerful. Streamline your workflow today.
        </p>

        {/* Button with Hover Animation */}
        <button onClick={() => router.push("/create")} className="mt-6 py-3 px-8 bg-red-600 text-white rounded-xl shadow-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-110 animate-pulse">
          Start Building Your Forms
        </button>
      </div>
    </div>
  );
};

export default Createformcomp;
