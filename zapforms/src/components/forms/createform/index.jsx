import React, { useState } from "react";
import FormTypeMenu from "../../menus/formtype.menu";
import CustomizedInputBase from "../../inputs/inputBase";
import Sigleform from "./sigleform";
import { CreateformContext } from "@/src/context";
import { validateFormArray } from "@/src/utils";

const Createform = () => {
  let [formList, setformLists] = useState([
    {type:"text"
    }
  ]);
  function updateFormdata({index , data}){
     setformLists((prev)=>prev.map((item , itemIndex)=>itemIndex==index?{...item,...data}:item))
  }
  function craeteformClick(){
    const {data ,isFullFormValid }=validateFormArray(formList)
    setformLists(data)
    if(isFullFormValid){
      console.log("going to save form data")
    }
  }
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
                <>
                <button
                  onClick={() =>
                    setformLists((prev) => [...prev, {type:"text"}])
                  }
                  className="bg-transparent border mt-3 text-black hover:opacity-80 focus:outline-none py-2 px-4 rounded-sm"
                >
                  Add +
                </button>
                <button
                  onClick={craeteformClick}
                  className="bg-blue-800 rounded-full text-white text-bold w-full border mt-3 hover:opacity-80 focus:outline-none py-2 px-4 "
                >
                 Create form
                </button>
                </>
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
