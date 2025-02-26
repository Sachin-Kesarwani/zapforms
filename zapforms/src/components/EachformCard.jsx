"use client"
import React from "react";

import { convertMillisecondTodatemonthyear } from "../utils";
import { useRouter } from "next/navigation";

const EachformCard = (props) => {
  const { data } = props;
  console.log(data)
  const router = useRouter()
  let { title = "", description = "", createdAt  , _id
  } = data;
  return (
    <div
    onClick={()=>router.push(`/forms/formRespond/${_id}`)}
      className="w-[100%] flex flex-col justify-between px-6 py-3 md:w-[80%] h-[25vh] rounded-xl xl:w-[60%] 2xl:w-[60%] mt-4 cursor-pointer"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div>
        <h1 className="text-xl xl:text-3xl 2xl:text-4xl font-bold">{title}</h1>
        <p className="text-sm xl:text-md 2xl:text-xl ">{description}</p>
      </div>

      <p className="text-right text-gray-500">{convertMillisecondTodatemonthyear(createdAt)}</p>
    </div>
  );
};

export default EachformCard;
