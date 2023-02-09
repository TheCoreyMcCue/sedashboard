import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CustomerForm from "./CustomerForm";
import { v4 as uuidv4 } from "uuid";
import { client } from "client";
// import { useNavigate } from "react-router-dom";
// import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal({
  open,
  handleClose,
  user,
  submitting,
  setSubmitting,
}) {
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState(null);
  const [contactEmail, setContactEmail] = useState(null);
  const [about, setAbout] = useState(null);
  const [api, setApi] = useState(null);
  const [vertical, setVertical] = useState(null);
  const [qulified, setQualified] = useState(false);
  const [queries, setQueries] = useState(null);

  const uuid = uuidv4();

  const handleSubmit = async () => {
    setSubmitting(true);
    const doc = {
      _id: uuid,
      _type: "customer",
      company: company,
      contactName: contactName,
      contactEmail: contactEmail,
      about: about,
      api: api,
      vertical: vertical,
      technicalQual: qulified,
      queries: parseInt(queries),
      userId: user.id,
      postedBy: {
        _type: "postedBy",
        _ref: user?.id,
      },
    };

    await client.createIfNotExists(doc).then(handleClose());
    setSubmitting(false);
    window.location.reload();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          margin="auto"
          display="flex"
          flexDirection="column"
          sx={{ ...style, width: 500 }}
        >
          <CustomerForm
            setCompany={setCompany}
            setContactName={setContactName}
            setContactEmail={setContactEmail}
            setAbout={setAbout}
            setApi={setApi}
            setQueries={setQueries}
            setVertical={setVertical}
            setQualified={setQualified}
            qulified={qulified}
          />
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            width="70%"
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
