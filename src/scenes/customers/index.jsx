// import React, { useEffect, useState } from "react";
// import { Box, useTheme } from "@mui/material";
// import { useGetCustomersQuery } from "state/api";
// import Header from "components/Header";
// import { DataGrid } from "@mui/x-data-grid";
// import { customerQuery } from "utils/data";
// import { client } from "../../client";

// const Customers = () => {
//   const theme = useTheme();
//   const [customers, setCustomers] = useState([]);
//   const { data, isLoading } = useGetCustomersQuery();

//   useEffect(() => {
//     client.fetch(customerQuery()).then((data) => {
//       setCustomers(data);
//     });
//   }, []);

import * as React from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

export default function CheckboxSelectionGrid() {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);

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
        headerName: "Contact Email",
        flex: 1,
      },
      {
        field: "about",
        headerName: "About",
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
        flex: 1,
      },
    ],

    rows: [
      {
        id: 1,
        company: "Riskify",
        contactName: "John Snow",
        age: 35,
      },
      {
        id: 2,
        company: "Riskify",
        lastName: "Lannister",
        firstName: "Cersei",
        age: 42,
      },
      {
        id: 3,
        company: "Riskify",
        lastName: "Lannister",
        firstName: "Jaime",
        age: 45,
      },
      {
        id: 4,
        company: "Riskify",
        lastName: "Stark",
        firstName: "Arya",
        age: 16,
      },
      {
        id: 5,
        company: "Riskify",
        lastName: "Targaryen",
        firstName: "Daenerys",
        age: null,
      },
      {
        id: 6,
        company: "Riskify",
        lastName: "Melisandre",
        firstName: null,
        age: 150,
      },
      {
        id: 7,
        company: "Riskify",
        lastName: "Clifford",
        firstName: "Ferrara",
        age: 44,
      },
      {
        id: 8,
        company: "Riskify",
        lastName: "Frances",
        firstName: "Rossini",
        age: 36,
      },
      {
        id: 9,
        company: "Riskify",
        lastName: "Roxie",
        firstName: "Harvey",
        age: 65,
      },
    ],

    // initialState: {
    //   columns: {
    //     columnVisibilityModel: {
    //       id: false,
    //     },
    //   },
    // },
  };

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 5,
  });
  console.log(
    "🚀 ~ file: index.jsx:160 ~ CheckboxSelectionGrid ~ data",
    data,
    "dayta",
    dayta
  );

  return (
    <div style={{ width: "100%" }}>
      <Button
        sx={{ mb: 2 }}
        onClick={() => setCheckboxSelection(!checkboxSelection)}
      >
        Toggle checkbox selection
      </Button>
      <div style={{ height: "80vh" }}>
        <DataGrid checkboxSelection={checkboxSelection} {...dayta} />
      </div>
    </div>
  );
}
