import { CreateformContext } from "@/src/context";
import { IconButton, InputBase, TextField } from "@mui/material";
import React, { useContext } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CustomInput from "../../inputs/customInput";
import Pill from "../../pill";
const OptionalUi = (props) => {
  const { item, index: fieldIndex } = props;
  const { type, options = [] } = item;
  let { updateFormdata } = useContext(CreateformContext);
  const rquiredItemsAccordingToType = {
    text: (
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <TextField
          id="outlined-multiline-static"
          label="Placeholder"
          defaultValue=""
          onChange={(e) =>
            updateFormdata({
              index: fieldIndex,
              data: { placeholder: e.target.value },
            })
          }
        />
      </div>
    ),
    textarea: (
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <TextField
          id="outlined-multiline-static"
          label="Placeholder"
          defaultValue=""
          onChange={(e) =>
            updateFormdata({
              index: fieldIndex,
              data: { placeholder: e.target.value },
            })
          }
        />
      </div>
    ),
    email: (
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <TextField
          id="outlined-multiline-static"
          label="Placeholder"
          defaultValue=""
          type="email"
          onChange={(e) =>
            updateFormdata({
              index: fieldIndex,
              data: { placeholder: e.target.value },
            })
          }
        />
      </div>
    ),

    password: (
      <div className="ml-2  ">
        <p className="my-1">Field Type : {type}</p>
        <TextField
          id="outlined-multiline-static"
          label="Placeholder"
          defaultValue=""
          onChange={(e) =>
            updateFormdata({
              index: fieldIndex,
              data: { placeholder: e.target.value },
            })
          }
        />
      </div>
    ),
    date: (
      <div className="ml-2  ">
        <p className="my-1">Field Type : {type}</p>
        <p className="my-1">Add select options</p>
        <div>
          <TextField
            id="outlined-multiline-static"
            defaultValue="Option"
            type="text"
            disabled
            onChange={(e) =>
              updateFormdata({
                index: fieldIndex,
                data: { placeholder: e.target.value },
              })
            }
          />
        </div>
      </div>
    ),
    select: (
      <div className="ml-2  ">
        <p className="my-1">Field Type : {type}</p>
        {
          options?.map(({label})=>{
            return <Pill label={label}/>
          })
        }
        <CustomInput showRightIcon={true} updateFormdata={({value})=>updateFormdata({
                index: fieldIndex,
                data: {options:[...options, {label:value.toUpperCase(),value}] },
              })}/>
      </div>
    ),
  };
  return rquiredItemsAccordingToType[type];
};

export default OptionalUi;
