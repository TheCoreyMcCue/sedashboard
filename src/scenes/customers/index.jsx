import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "state/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { customerQuery } from "utils/data";
import { client } from "../../client";

const Customers = ({ user }) => {
  const theme = useTheme();
  const [customers, setCustomers] = useState([]);
  const { data, isLoading } = useGetCustomersQuery();

  useEffect(() => {
    client.fetch(customerQuery()).then((data) => {
      setCustomers(data);
    });
  }, []);

  console.log("🚀 ~ file: index.jsx:10 ~ customers ~ customers", customers);
  const columns = [
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
    // {
    //   field: "phoneNumber",
    //   headerName: "Phone Number",
    //   flex: 0.5,
    //   renderCell: (params) => {
    //     return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
    //   },
    // },
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
  ];
  // const columns = [
  //   {
  //     field: "_id",
  //     headerName: "ID",
  //     flex: 1,
  //   },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     flex: 0.5,
  //   },
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     flex: 1,
  //   },
  //   {
  //     field: "phoneNumber",
  //     headerName: "Phone Number",
  //     flex: 0.5,
  //     renderCell: (params) => {
  //       return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
  //     },
  //   },
  //   {
  //     field: "country",
  //     headerName: "Country",
  //     flex: 0.4,
  //   },
  //   {
  //     field: "occupation",
  //     headerName: "Occupation",
  //     flex: 1,
  //   },
  //   {
  //     field: "role",
  //     headerName: "Role",
  //     flex: 0.5,
  //   },
  // ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={customers || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
