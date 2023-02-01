import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import NestedModal from "components/Modal";
// import { useDemoData } from "@mui/x-data-grid-generator";

import { client } from "../../client";
import { customerQuery } from "utils/data";
import { useNavigate } from "react-router-dom";

export default function CheckboxSelectionGrid({ user }) {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  console.log(
    "🚀 ~ file: index.jsx:13 ~ CheckboxSelectionGrid ~ customers",
    customers
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const productFields = customers.map((customer) => ({
    id: customer._id,
    company: customer.company,
    contactName: customer.contactName,
    contactEmail: customer.contactEmail,
    queries: customer.queries,
    api: customer.api,
    vertical: customer.vertical,
    technicalQual: customer.technicalQual,
  }));

  // {
  //   id: 1,
  //   company: "Riskify",
  //   contactName: "John Snow",
  //   contactEmail: "testemail@testcompany.gov",
  //   api: "TRapi",
  //   technicalQual: true,
  //   queries: 3600,
  // }

  useEffect(() => {
    client.fetch(customerQuery()).then((data) => {
      setCustomers(data);
    });
  }, []);

  const data = {
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

    rows: productFields,
  };

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
        user={user}
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
          {...data}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // checkboxSelection={checkboxSelection}
          onChange={(event) => console.log(event.target.checked)}
          onRowClick={(id) => navigate(`/customers/${id.id}`)}
          // onRowClick={(id) => console.log(id)}
        />
      </div>
    </div>
  );
}
