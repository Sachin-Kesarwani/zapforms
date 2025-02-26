"use client";

import React from "react";

const Respondformcomponenet = (props) => {
  const { data } = props;
  const { title, description  , fields =[]} = data;
  function getformAsperTypes(data){
   const {type   ,label , placeholder} = data
    const ui ={
        text:<div className=""><h1>{label}</h1></div>,
        textarea:<div><h1>{label}</h1></div>,
        email:<div><h1>{label}</h1></div>,
        password:<div><h1>{label}</h1></div>,
        date:<div><h1>{label}</h1></div>,
        number:<div><h1>{label}</h1></div>,
        tel:<div><h1>{label}</h1></div>,
        select:<div><h1>{label}</h1></div>,
        checkbox:<div><h1>{label}</h1></div>,
        radio:<div><h1>{label}</h1></div>,
        range:<div><h1>{label}</h1></div>,
    }
   return  ui[type]
  }
  return (
    <div
      key={"respondform"}
      className="flex flex-col justify-center items-center my-6"
    >
      {" "}
      <div className="w-[100%] px-6 py-3 md:w-[80%] bg-blue-300 h-[25vh] rounded-tl-xl rounded-tr-xl xl:w-[60%] 2xl:w-[60%]">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl ">{description}</p>
      </div>
      {
         fields?.map((item)=>{
           return getformAsperTypes(item)
         })
      }
    </div>
  );
};

export default Respondformcomponenet;
