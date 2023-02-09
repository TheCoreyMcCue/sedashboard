import {
  Box,
  Grid,
  List,
  ListItem,
  //   ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
// import FolderIcon from "@mui/icons-material/Folder";
import { client } from "client";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { customerDetailQuery, fetchCustomer } from "utils/data";

const CustomerInfo = ({ user }) => {
  const [customer, setCustomer] = useState(null);
  console.log(
    "🚀 ~ file: CustomerInfo.jsx:20 ~ CustomerInfo ~ customer",
    customer
  );
  const [comment, setComment] = useState("");
  const [addingComment, setAddingComment] = useState(false);
  const navigate = useNavigate();
  const { customerId } = useParams();
  useEffect(() => {
    client.fetch(customerDetailQuery(customerId)).then((data) => {
      console.log("data", data);
      setCustomer(data[0]);
    });
  }, [customerId]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const today = new Date();

  const date = `${today.getDate()} ${
    months[today.getMonth()]
  }, ${today.getFullYear()}`;

  const time = `${today.getHours()}:${today.getMinutes()}`;

  const postedAt = `${time} on ${date}`;

  console.log(postedAt);

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
            time: postedAt,
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

      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Notes About This Opp
        </Typography>

        <List>
          {customer?.comments.map((comment) => {
            return (
              <ListItem key={comment._key}>
                {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                <ListItemText>{comment.time}</ListItemText>
                <ListItemText
                  primary={comment.comment}
                  //   secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Box>
  );
};

export default CustomerInfo;
