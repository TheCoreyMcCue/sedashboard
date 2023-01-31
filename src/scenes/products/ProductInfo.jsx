import { Box, Typography } from "@mui/material";
import { client } from "client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "utils/data";

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    client.fetch(fetchProduct(productId)).then((data) => {
      setProduct(data[0]);
    });
  }, [productId]);
  return (
    <Box>
      <Typography variant="h2">{product?.title}</Typography>
      <Typography variant="h6">{product?.description}</Typography>
    </Box>
  );
};

export default ProductInfo;
