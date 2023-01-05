import * as React from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import NestedModal from "components/Modal";
// import { useDemoData } from "@mui/x-data-grid-generator";

export default function CheckboxSelectionGrid() {
  // const [checkboxSelection] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dayta = {
    columns: [
      {
        field: "company",
        headerName: "Company",
        flex: 0.9,
      },
      {
        field: "contactName",
        headerName: "Contact Name",
        flex: 0.8,
      },
      {
        field: "contactEmail",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "api",
        headerName: "API",
        flex: 0.4,
      },
      {
        field: "vertical",
        headerName: "Vertical",
        flex: 0.5,
      },
      {
        field: "technicalQual",
        headerName: "Technical Qualification",
        type: "boolean",
        flex: 1,
      },
      {
        field: "queries",
        headerName: "Queries p/m",
        type: "number",
        width: 90,
      },
    ],

    rows: [
      {
        id: 1,
        company: "Riskify",
        contactName: "John Snow",
        contactEmail: "testemail@testcompany.gov",
        api: "TRapi",
        technicalQual: true,
        queries: 3600,
      },
      {
        id: 2,
        company: "Quatar Airways",
        contactName: "Cersei",
        contactEmail: "testemail@testcompany.gov",
        api: "AO",
        technicalQual: true,
        queries: 3600,
      },
      {
        id: 3,
        company: "Rebike",
        contactName: "Jaime",
        contactEmail: "testemail@testcompany.gov",
        api: "AOE",
        technicalQual: false,
        queries: 3600,
      },
      {
        id: 4,
        company: "Gucci",
        contactName: "Arya",
        contactEmail: "testemail@testcompany.gov",
        technicalQual: false,
        api: "TRapi",
        queries: 54600,
      },
      {
        id: 5,
        company: "Sun Finance",
        contactName: "Daenerys",
        contactEmail: "testemail@testcompany.gov",
        technicalQual: true,
        api: "IDC",
        queries: 2400,
      },
      {
        id: 6,
        company: "Riskify",
        contactName: "Jerry",
        contactEmail: "testemail@testcompany.gov",
        api: "TRapi",
        queries: 36000,
        technicalQual: false,
      },
      {
        id: 7,
        company: "Riskify",
        contactName: "Ferrara",
        contactEmail: "testemail@testcompany.gov",
        technicalQual: false,
        api: "TBD",
        queries: 3800,
      },
      {
        id: 8,
        company: "Riskify",
        contactName: "Rossini",
        contactEmail: "testemail@testcompany.gov",
        technicalQual: true,
        api: "IDC",
        queries: 96000,
      },
      {
        id: 9,
        company: "Riskify",
        contactName: "Harvey",
        contactEmail: "testemail@testcompany.gov",
        technicalQual: false,
        api: "IDC",
        queries: 40000,
      },
    ],
  };

  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 10,
  //   maxColumns: 5,
  // });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{ marginTop: "5rem" }}
          onClick={() => setOpen(!open)}
        >
          Add
        </Button>
      </div>
      <NestedModal
        handleOpen={handleOpen}
        open={open}
        handleClose={handleClose}
      />
      <div
        style={{
          height: "70vh",
          width: "95%",
          marginTop: "5vh",
          marginLeft: "5vh",
        }}
      >
        <DataGrid
          {...dayta}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection={checkboxSelection}
          onChange={(event) => console.log(event.target.checked)}
          onRowClick={(ids) => {
            console.log(ids);
          }}
        />
      </div>
    </div>
  );
}
