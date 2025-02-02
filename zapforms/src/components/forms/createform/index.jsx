import React, { useState } from "react";
import FormTypeMenu from "../../menus/formtype.menu";
import CustomizedInputBase from "../../inputs/inputBase";
import Sigleform from "./sigleform";
import { CreateformContext } from "@/src/context";

const Createform = () => {
  let [formList, setformLists] = useState([
    {
      // label:"Enter Name" , required:true , type:"text" , placeholder:"Please Eneter name" ,options:[], validation:{}
    }
  ]);
  function updateFormdata({index , data}){
    console.log(index, data)
     setformLists((prev)=>prev.map((item , itemIndex)=>itemIndex==index?{...item,...data}:item))
  }
  console.log(formList)
  return (
    <>
    <CreateformContext.Provider value={{updateFormdata }}>
      <div
        key={"createform"}
        className="flex flex-col justify-center items-center my-6"
      >
        {formList.map((item, index) => {
          return (
            <div
              key={index.toString()}
              className="w-[100%] md:w-[80%] xl:w-[60%] 2xl:w-[60%]"
            >
              <Sigleform index={index} item={item}/>
              {index == formList.length - 1 && (
                <button
                  onClick={() =>
                    setformLists((prev) => [...prev, new Date().getTime()])
                  }
                  className="bg-transparent border mt-3 text-black hover:opacity-80 focus:outline-none py-2 px-4 rounded-sm"
                >
                  Add +
                </button>
              )}
            </div>
          );
        })}
      </div>
      </CreateformContext.Provider>
    </>
  
  );
};

export default Createform;
