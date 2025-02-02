import { CreateformContext } from "@/src/context";
import { InputBase, TextField } from "@mui/material";
import React, { useContext } from "react";

const OptionalUi = ({ type , fieldIndex}) => {
      let {updateFormdata} = useContext(CreateformContext);
  const rquiredItemsAccordingToType = {
    text: (
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Placeholder"
          defaultValue=""
          onChange={(e)=>updateFormdata({index:fieldIndex , data:{placeholder:e.target.value}})}
        />
      </div>
    ),
  };
  return rquiredItemsAccordingToType[type];
};

export default OptionalUi;
