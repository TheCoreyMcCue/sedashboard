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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();

  const date = `${today.getDate()} ${
    months[today.getMonth()]
  }, ${today.getFullYear()}`;

  const time = `${today.getHours()}:${today.getMinutes()}`;

  const postedAt = `${date} at ${time}`;

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

      <Grid item xs={12} md={6}>
        <Typography
          sx={{ mt: 4, mb: 2 }}
          variant="h3"
          component="div"
          style={{ textAlign: "center" }}
        >
          Notes About This Opp
        </Typography>

        <List>
          <ListItemText>Posted on:</ListItemText>
          {customer?.comments
            .slice(0)
            .reverse()
            .map((comment) => {
              return (
                <ListItem key={comment._key}>
                  {/* <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon> */}
                  <ListItemText>{comment.time}</ListItemText>
                  <ListItemText
                    style={{ maxWidth: "40%" }}
                    primary={comment.comment}
                    //   secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              );
            })}
        </List>
        <Box className="mt-6">
          <TextField
            id="outlined-multiline-flexible"
            label="Post a new note"
            multiline
            maxRows={10}
            style={{ width: "25rem", marginLeft: "8rem", marginRight: "2rem" }}
            onChange={(e) => setComment(e.target.value)}
          />
          {comment && (
            <button
              type="button"
              className="bg-green-500 text-white rounded-full px-6 py-3 font-semibold text-base outline-none"
              onClick={addComment}
            >
              {addingComment ? "Posting" : "Post"}
            </button>
          )}
        </Box>
      </Grid>
    </Box>
  );
};

export default CustomerInfo;
