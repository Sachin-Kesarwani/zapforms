import { CreateformContext } from "@/src/context";
import { Slider, TextField } from "@mui/material";
import React, { memo, useContext } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CustomInput from "../../inputs/customInput";
import Pill from "../../pill";
import { capitalizeFirstChar } from "@/src/utils";
import ErrorMessage from "@/src/shared/errorMessage";
const OptionalUi = (props) => {
  const { item, index: fieldIndex } = props;
  const { type, options = [], errors } = item;
  const {
    options: errorInoptions,
    minrange: errorInminrange,
    maxrange: errorInmaxrange,
  } = errors || {};
  let { updateFormdata } = useContext(CreateformContext);
  const rquiredItemsAccordingToType = {
    text: (
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <TextField
          variant="standard"
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
          variant="standard"
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
          variant="standard"
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
    number: (
      <div className="ml-2">
        <p className="my-1">Field Type : {type}</p>
        <TextField
          variant="standard"
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
    password: (
      <div className="ml-2  ">
        <p className="my-1">Field Type : {type}</p>
        <TextField
          variant="standard"
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
    tel: (
      <div className="ml-2  ">
        <p className="my-1">Field Type : {type}</p>
        {/* <TextField
          variant="standard"
          label="Placeholder"
          defaultValue=""
          type={"tel"}
          onChange={(e) =>
            updateFormdata({
              index: fieldIndex,
              data: { placeholder: e.target.value },
            })
          }
        /> */}
      </div>
    ),
    date: (
      <div className="ml-2  ">
        <p className="my-1">Field Type : {type}</p>
        <div>
          <TextField
            variant="standard"
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
        <ErrorMessage message={errorInoptions} />
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
        <ErrorMessage message={errorInoptions} />
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
        <ErrorMessage message={errorInoptions} />
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
              onChange={(e) => {
                updateFormdata({
                  index: fieldIndex,
                  data: {
                    validation: { ...item.validation , minrange: e.target.value },
                    errors:{...errors , minrange:undefined}
                  },
                });
              }}
              valueLabelDisplay="auto"
            />
            <ErrorMessage message={errorInminrange} />
          </div>
          <div className={`w-[95%] lg:w-[48%] `}>
            <p className="my-1">Add Final range</p>
            <Slider
              size="small"
              defaultValue={0}
              aria-label="Small"
              onChange={(e) => {
                updateFormdata({
                  index: fieldIndex,
                  data: {
                    validation: {...item.validation ,  maxrange: e.target.value },
                    errors:{...errors , maxrange:undefined}
                  },
                });
              }}
              valueLabelDisplay="auto"
            />
            <ErrorMessage message={errorInmaxrange} />
          </div>
        </div>
      </div>
    ),
  };
  return rquiredItemsAccordingToType[type];
};

export default memo(OptionalUi);
