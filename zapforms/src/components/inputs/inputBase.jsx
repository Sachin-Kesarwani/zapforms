import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FormTypeMenu from "../menus/formtype.menu";

export default function CustomizedInputBase({ index }) {
  return (
    <Paper
      component="form"
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
        sx={{ ml: 1, flex: 1 }}
        placeholder="Enter section label..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <FormTypeMenu fieldIndex={index}/>
    </Paper>
  );
}
