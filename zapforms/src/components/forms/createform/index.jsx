import React, { useCallback, useState, useTransition } from "react";
import FormTypeMenu from "../../menus/formtype.menu";
import CustomizedInputBase from "../../inputs/inputBase";
import Sigleform from "./sigleform";
import { CreateformContext } from "@/src/context";
import { validateFormArray } from "@/src/utils";
import { CircularProgress, TextField } from "@mui/material";
import { createform } from "@/src/actions/form.action";
import { SUCCES_STATUS } from "@/src/constants/status";
import Icon from "@/src/shared/icon";
import { unstable_batchedUpdates } from "react-dom";

const Createform = () => {
  const [formsInfo, setFormsInfo] = useState({});
  const [errors, setErrors] = useState({});
  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIssubmitted] = useState(false);
  let [formList, setformLists] = useState([{ type: "text" }]);
  function updateFormdata({ index, data }) {
    setformLists((prev) =>
      prev.map((item, itemIndex) =>
        itemIndex == index ? { ...item, ...data } : item
      )
    );
  }
  function craeteformClick() {
    const { data, isFullFormValid } = validateFormArray(formList);
    setformLists(data);
    if (isFullFormValid) {
      if (formsInfo?.title && formsInfo?.description) {
        startTransition(async () => {
          let { status, message } = await createform({
            body: { ...formsInfo, fields: formList },
          });
          if (status === SUCCES_STATUS) {
            setIssubmitted(true);
          } else {
            showSnackbar({ message: message, severity: "error" });
          }
        });
      }
    }
  }

  const recreteformInitialize = useCallback(() => {
    unstable_batchedUpdates(() => {
      setFormsInfo({});
      setErrors({});
      setIssubmitted(false);
      setformLists([{ type: "text" }]);
    });
  }, []);

  const shareForm = () => {
    if (navigator.share) {
      navigator
      .share({
        url: process.env.NEXT_PUBLIC_FRONTEND_URL,
      })
        .then(() => console.log("Shared successfully!"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };
  return (
    <>
      <CreateformContext.Provider value={{ updateFormdata }}>
        <div
          key={"createform"}
          className="flex flex-col justify-center items-center my-6"
        >
          <div className="w-[100%] px-6 py-3 md:w-[80%] bg-orange-500 h-[25vh] rounded-tl-xl rounded-tr-xl xl:w-[60%] 2xl:w-[60%]">
            {isSubmitted ? (
              <div>
                <h2 className="text-2xl text-white font-bold">
                  {formsInfo.title}
                </h2>
                <p className="text-white ">{formsInfo.description}</p>
              </div>
            ) : (
              <div>
                <TextField
                  id="custom-textfield"
                  label="Title"
                  variant="standard"
                  onChange={(e) =>
                    setFormsInfo((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // Default border color
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white", // Border color when focused
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // Default label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "white", // Label color when focused
                    },
                    "& input": {
                      color: "white", // Text color inside the input
                    },
                  }}
                />
                <TextField
                  id="custom-textfield"
                  label="Description"
                  variant="standard"
                  className="w-full"
                  onChange={(e) =>
                    setFormsInfo((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white", // Default border color
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white", // Border color when focused
                    },
                    "& .MuiInputLabel-root": {
                      color: "white", // Default label color
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "white", // Label color when focused
                    },
                    "& input": {
                      color: "white", // Text color inside the input
                    },
                  }}
                />
              </div>
            )}
          </div>
          {formList.map((item, index) => {
            return (
              <div
                key={index.toString()}
                className="w-[100%] md:w-[80%] xl:w-[60%] 2xl:w-[60%]"
              >
                <div
                  className={
                    isSubmitted ? "pointer-events-none opacity-50" : ""
                  }
                >
                  <Sigleform index={index} item={item} />
                </div>{" "}
                {index == formList.length - 1 && (
                  <>
                    {!isSubmitted && (
                      <button
                        onClick={() =>
                          setformLists((prev) => [...prev, { type: "text" }])
                        }
                        className="bg-transparent border mt-3 text-black hover:opacity-80 focus:outline-none py-2 px-4 rounded-sm"
                      >
                        Add +
                      </button>
                    )}
                    {!isSubmitted ? (
                      <button
                        disabled={isPending || isSubmitted}
                        onClick={craeteformClick}
                        className="bg-blue-800 rounded-full text-white text-bold w-full border mt-3 hover:opacity-80 focus:outline-none py-2 px-4 "
                      >
                        {isPending ? (
                          <CircularProgress size="15px" color={"white"} />
                        ) : (
                          "Create form"
                        )}
                      </button>
                    ) : (
                      <div className="flex flex-row justify-center gap-2">
                          <button onClick={shareForm} className="bg-blue-800 flex flex-row justify-center items-center rounded-full text-white text-bold w-full border mt-3 hover:opacity-80 focus:outline-none py-2 px-4">
                        <Icon type={"share"} color={"white"} />
                        <span className="ml-3">Share</span>
                      </button>
                      <button onClick={recreteformInitialize} className="bg-blue-800 flex flex-row justify-center items-center rounded-full text-white text-bold w-full border mt-3 hover:opacity-80 focus:outline-none py-2 px-4">
                        <Icon type={"refresh"} color={"white"}/>
                        <span className="ml-3">Recreate</span>
                      </button>
                      </div>
                    
                    )}
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
