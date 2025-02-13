import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FormTypeMenu from "../menus/formtype.menu";
import { CreateformContext } from "@/src/context";

export default function CustomizedInputBase({ index  ,type , item={}}) {
  const {errors} = item||{};
  const {label} = errors||{}
    let { updateFormdata } = React.useContext(CreateformContext);
  console.log(item)
  return (
    <Paper
      component="form"
      className={`border ${label?" border-red-400":"border-white"}`}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <p>{index + 1}</p>
      </IconButton>
      <InputBase
      error	
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter section label..."
        inputProps={{ "aria-label": "search google maps" }}
        onChange={(e) =>
          updateFormdata({
            index: index,
            data: { label: e.target.value },
          })
        }      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <FormTypeMenu fieldIndex={index}  seletedType={type}/>
    </Paper>
  );
}
