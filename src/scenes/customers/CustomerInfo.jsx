import { Box, Typography } from "@mui/material";
import { client } from "client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCustomer } from "utils/data";

const CustomerInfo = () => {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();
  useEffect(() => {
    client.fetch(fetchCustomer(customerId)).then((data) => {
      console.log(data);
      setCustomer(data[0]);
    });
  }, [customerId]);
  console.log("customer fields", customer);
  return (
    <Box>
      <Typography variant="h2">{customer?.company}</Typography>
      <Typography variant="h6">{customer?.contactName}</Typography>
    </Box>
  );
};

export default CustomerInfo;
