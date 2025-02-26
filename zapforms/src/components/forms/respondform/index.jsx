"use client";

import React from "react";

const Respondformcomponenet = (props) => {
  const { data } = props;
  const { title, description  , fields =[]} = data;
  function getformAsperTypes(data){
   const {type   ,label , placeholder} = data
    const ui ={
        text:<Wrapper>
          <h1>{label}</h1>
        </Wrapper>,
        textarea:<Wrapper><h1>{label}</h1> </Wrapper>,
        email:<Wrapper><h1>{label}</h1> </Wrapper>,
        password:<Wrapper><h1>{label}</h1> </Wrapper>,
        date:<Wrapper><h1>{label}</h1> </Wrapper>,
        number:<Wrapper><h1>{label}</h1> </Wrapper>,
        tel:<Wrapper><h1>{label}</h1> </Wrapper>,
        select:<Wrapper><h1>{label}</h1> </Wrapper>,
        checkbox:<Wrapper><h1>{label}</h1> </Wrapper>,
        radio:<Wrapper><h1>{label}</h1> </Wrapper>,
        range:<Wrapper><h1>{label}</h1> </Wrapper>,
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

function Wrapper({children}){
  return <div className="w-[100%] flex flex-col justify-between px-6 py-3 md:w-[80%] h-[25vh] rounded-xl xl:w-[60%] 2xl:w-[60%] mt-4 cursor-pointer"
  style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
{children}
  </div>
}