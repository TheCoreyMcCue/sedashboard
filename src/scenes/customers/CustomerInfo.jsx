import { Box, TextField, Typography } from "@mui/material";
import { client } from "client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { customerDetailQuery, fetchCustomer } from "utils/data";

const CustomerInfo = ({ user }) => {
  const [customer, setCustomer] = useState(null);
  const [comment, setComment] = useState("");
  const [addingComment, setAddingComment] = useState(false);
  const navigate = useNavigate();
  const { customerId } = useParams();
  useEffect(() => {
    client.fetch(customerDetailQuery(customerId)).then((data) => {
      //   console.log("data", data);
      setCustomer(data[0]);
    });
  }, [customerId]);

  const deleteCustomer = async () => {
    await client
      .delete({
        query: `*[_type == "customer" && _id == '${customerId}']`,
      })
      .then(navigate("/customers"));
  };

  const addComment = () => {
    if (comment) {
      setAddingComment(true);

      client
        .patch(customerId)
        .setIfMissing({ comments: [] })
        .insert("after", "comments[-1]", [
          {
            comment,
            _key: uuidv4(),
            postedBy: { _type: "postedBy", _ref: user._id },
          },
        ])
        .commit()
        .then(() => {
          fetchCustomer();
          setComment("");
          setAddingComment(false);
          window.location.reload();
        });
    }
  };
  //   console.log("customer fields", customer);
  return (
    <Box>
      <button
        type="button"
        className="bg-red-500 text-white rounded-full px-6 py-2 mb-10 font-semibold text-base outline-none"
        onClick={deleteCustomer}
      >
        Delete Opp
      </button>
      <Typography variant="h2">{customer?.company}</Typography>
      <Typography variant="h6">{customer?.contactName}</Typography>
      <TextField
        id="outlined-multiline-flexible"
        label="Notes"
        multiline
        maxRows={10}
        onChange={(e) => setComment(e.target.value)}
      />
      {comment && (
        <button
          type="button"
          className="bg-red-500 text-white rounded-full px-6 py-2 font-semibold text-base outline-none"
          onClick={addComment}
        >
          {addingComment ? "Doing..." : "Done"}
        </button>
      )}
    </Box>
  );
};

export default CustomerInfo;
