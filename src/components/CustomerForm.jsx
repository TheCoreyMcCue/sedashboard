import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function CustomerForm({
  setCompany,
  setContactName,
  setContactEmail,
  setAbout,
  setApi,
  setQueries,
  setVertical,
  setQualified,
}) {
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
          required
          sx={{ margin: "5px" }}
          onChange={(event) => {
            setCompany(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Contact Name"
          variant="outlined"
          sx={{ margin: "5px" }}
          onChange={(event) => {
            setContactName(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Contact Email"
          variant="outlined"
          type="email"
          pattern=".+@globex\.com"
          sx={{ margin: "5px" }}
          onChange={(event) => {
            setContactEmail(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="About"
          variant="outlined"
          pattern=".+@globex\.com"
          sx={{ margin: "5px" }}
          onChange={(event) => {
            setAbout(event.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="API"
          variant="outlined"
          sx={{ margin: "5px" }}
          onChange={(event) => {
            setApi(event.target.value);
          }}
        />

        <TextField
          sx={{ margin: "5px" }}
          id="outlined-basic"
          label="Queries p/m"
          variant="outlined"
          onChange={(event) => {
            setQueries(event.target.value);
          }}
        />
        <TextField
          sx={{ margin: "5px" }}
          id="outlined-basic"
          label="Vertical"
          variant="outlined"
          onChange={(event) => {
            setVertical(event.target.value);
          }}
        />
        {/* <TextField
          sx={{ margin: "5px" }}
          id="outlined-basic"
          label="Vertical"
          variant="outlined"
          onChange={(event) => {
            setVertical(event.target.value);
          }}
        /> */}

        <FormControlLabel
          control={<Switch onChange={(e) => setQualified(e.target.checked)} />}
          label="Technical call conducted?"
          sx={{ margin: "3px" }}
        />
      </FormGroup>
    </Box>
  );
}
