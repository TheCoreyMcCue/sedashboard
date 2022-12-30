import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export default function CustomerForm() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "95%" },
      }}
      noValidate
      autoComplete="off"
    >
      <FormGroup>
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          sx={{ margin: "5px" }}
        />
        <TextField
          id="outlined-basic"
          label="Contact Email"
          variant="outlined"
          sx={{ margin: "5px" }}
        />

        <TextField
          sx={{ margin: "5px" }}
          id="outlined-basic"
          label="Queries p/m"
          variant="outlined"
        />
        <TextField
          sx={{ margin: "5px" }}
          id="outlined-basic"
          label="Vertical"
          variant="outlined"
        />

        <FormControlLabel
          control={
            <Checkbox onChange={(event) => console.log(event.target.checked)} />
          }
          label="Technical call conducted?"
          sx={{ margin: "3px" }}
        />
      </FormGroup>
    </Box>
  );
}
