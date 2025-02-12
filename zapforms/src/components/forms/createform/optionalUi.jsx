import { CreateformContext } from "@/src/context";
import { Slider, TextField } from "@mui/material";
import React, { memo, useContext } from "react";
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
        <div>
          <TextField
            id="outlined-multiline-static"
            defaultValue="Option"
            type="date"
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
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <p className="my-1">Add select options</p>
        <div className="overflow-x-auto whitespace-nowrap">
          {options?.map(({ value }) => {
            return (
              <Pill
                label={value}
                onClickIcon={(val) => {
                  console.log(val);
                  updateFormdata({
                    index: fieldIndex,
                    data: {
                      options: options.filter((item) => item.value !== val),
                    },
                  });
                }}
                color={"#5e65e0"}
                showIcon={true}
              />
            );
          })}
        </div>

        <CustomInput
          showRightIcon={true}
          updateFormdata={({ value }) => {
            if (value) {
              updateFormdata({
                index: fieldIndex,
                data: {
                  options: [...options, { value }],
                },
              });
            }
          }}
        />
      </div>
    ),
    checkbox: (
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <p className="my-1">Add Checkbox (☑️) options</p>
        <div className="overflow-x-auto whitespace-nowrap">
          {options?.map(({ value }) => {
            return (
              <Pill
                label={value}
                onClickIcon={(val) => {
                  console.log(val);
                  updateFormdata({
                    index: fieldIndex,
                    data: {
                      options: options.filter((item) => item.value !== val),
                    },
                  });
                }}
                color={"#5e65e0"}
                showIcon={true}
              />
            );
          })}
        </div>

        <CustomInput
          showRightIcon={true}
          updateFormdata={({ value }) => {
            if (value) {
              updateFormdata({
                index: fieldIndex,
                data: {
                  options: [...options, { value }],
                },
              });
            }
          }}
        />
      </div>
    ),
    radio: (
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <p className="my-1">Add Radio (🔘) options</p>
        <div className="overflow-x-auto whitespace-nowrap">
          {options?.map(({ value }) => {
            return (
              <Pill
                label={value}
                onClickIcon={(val) => {
                  console.log(val);
                  updateFormdata({
                    index: fieldIndex,
                    data: {
                      options: options.filter((item) => item.value !== val),
                    },
                  });
                }}
                color={"#5e65e0"}
                showIcon={true}
              />
            );
          })}
        </div>

        <CustomInput
          showRightIcon={true}
          updateFormdata={({ value }) => {
            if (value) {
              updateFormdata({
                index: fieldIndex,
                data: {
                  options: [...options, { value }],
                },
              });
            }
          }}
        />
      </div>
    ),
    range: (
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <div className={`flex flex-col lg:flex-row  justify-evenly`}>
        <div className={`w-[95%] lg:w-[48%] `}>
        <p className="my-1">Add Initial range</p>
        <Slider
          size="small"
          defaultValue={0}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        </div>
        <div className={`w-[95%] lg:w-[48%] `}>
        <p className="my-1">Add Final range</p>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        </div>
        </div>
      </div>
    ),
  };
  return rquiredItemsAccordingToType[type];
};

export default memo(OptionalUi);
