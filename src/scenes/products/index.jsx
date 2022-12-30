import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  // Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Header from "components/Header";
import { client } from "../../client";

import { productQuery } from "utils/data";

const Product = ({ title, documentation, description }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  // const [user, setUser] = useState();

  const onButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  // const User =
  //   localStorage.getItem("user") !== "undefined"
  //     ? JSON.parse(localStorage.getItem("user"))
  //     : localStorage.clear();

  // useEffect(() => {
  //   const query = userQuery(User.googleId);
  //   client.fetch(query).then((data) => {
  //     setUser(data[0]);
  //   });
  // }, []);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {documentation}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography> */}
        {/* <Rating value={rating} readOnly /> */}

        <Button target="_blank" href={documentation}>
          <Typography variant="body2">documentation</Typography>
        </Button>
      </CardContent>
      <CardActions>
        <Button variant="primary" size="small" onClick={() => onButtonClick()}>
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>{description}</Typography>
          {/* <Typography>Supply Left: {supply}</Typography>
          <Typography>
            Yearly Sales This Year: {stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    client.fetch(productQuery()).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products." />
      {products ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {products?.map(({ _id, title, documentation, description }) => (
            <Product
              key={_id}
              _id={_id}
              title={title}
              documentation={documentation}
              description={description}
            />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
