import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  useTheme,
  // useMediaQuery,
  Grid,
} from "@mui/material";
import Header from "components/Header";
import { client } from "../../client";

import { productQuery } from "utils/data";
import { useNavigate } from "react-router-dom";

const Product = ({ title, documentation, batch, guru, _id }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
        minHeight: "10rem",
      }}
      onClick={() => navigate(`/products/${_id}`)}
    >
      <CardContent>
        <Typography variant="h4" component="div" style={{ cursor: "pointer" }}>
          {title}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Button target="_blank" href={documentation}>
          <Typography color="white" variant="heading">
            Documentation
          </Typography>
        </Button>{" "}
        <Button target="_blank" href={guru}>
          <Typography color="grey" variant="body2">
            Guru Cards
          </Typography>
        </Button>
        {batch && (
          <Button target="_blank" href={batch}>
            <Typography color="grey" variant="body2">
              Batch Instructions
            </Typography>
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  // const isNonMobile = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    client.fetch(productQuery()).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="EKATA PRODUCTS" subtitle="See your list of products." />
      {products && (
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 4, md: 12 }}
        >
          {products?.map(
            ({
              _id,
              title,
              documentation,
              description,
              guru,
              batch,
              index,
            }) => (
              <Grid item xs={2} sm={4} md={4} key={_id}>
                <Product
                  key={_id}
                  _id={_id}
                  title={title}
                  documentation={documentation}
                  description={description}
                  guru={guru}
                  batch={batch}
                />
              </Grid>
            )
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
