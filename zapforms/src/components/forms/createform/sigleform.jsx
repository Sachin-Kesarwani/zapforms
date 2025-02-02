import React, { useContext, useState } from "react";
import CustomizedInputBase from "../../inputs/inputBase";
import { FormControlLabel, Switch } from "@mui/material";
import OptionalUi from "./optionalUi";
import { CreateformContext } from "@/src/context";

const Sigleform = (props) => {
  const { index  , item={}} = props;
  const {type} = item;
  let {updateFormdata} = useContext(CreateformContext);


  return (
    <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}} className="flex flex-col justify-between h-48 w-full rounded-xl  mt-6">
      <div className="w-full ">
        <CustomizedInputBase index={index} />
      </div>
      <div>
        {
            <OptionalUi type={type} fieldIndex={index} />
        }
      </div>
      <div className="flex flex-row justify-end">
        <FormControlLabel control={<Switch />} onChange={(e)=>updateFormdata({index , data:{required:e.target.checked}})} label="Required" />
      </div>
    </div>
  );
};

export default Sigleform;
