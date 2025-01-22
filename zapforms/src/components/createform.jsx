"use client";
import React, { useState } from "react";

const Createform = () => {
  let [formList, setformLists] = useState([1, 2, 3]);
  return (
    <>
      <div className="flex flex-col justify-center items-center my-6">
        {formList.map((item, index) => {
          return (
            <div className="w-[100%] md:w-[80%] xl:w-[60%] 2xl:w-[60%]">
              <div className=" h-48 w-full rounded-xl border border-gray-500 mt-6">

              </div>
              {(index==formList.length-1) && <button onClick={()=>setformLists((prev)=>([...prev,new Date().getTime()]))} className="bg-transparent border mt-3 text-black hover:opacity-80 focus:outline-none py-2 px-4 rounded-sm">
                Add +
              </button>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Createform;
