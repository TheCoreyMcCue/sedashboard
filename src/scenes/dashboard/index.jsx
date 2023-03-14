import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="100px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
            margin: "0.5rem",
          },
        }}
      >
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.atlassian.net/jira/software/c/projects/SA/issues/?filter=myopenissues"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          My Open Jira Tickets
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://docs.google.com/document/d/1uO6hV-pI13LbGisGtxpn9l4jq_wC9-ekjB4bM0kS_a8/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Technical Qualification Questions
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://docs.google.com/presentation/d/1qUqeLX2nhjh0XSdShAxyj3OEyE0OFaK5/edit#slide=id.p1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          POC Presentation
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/11dX0piuStRtCW2RHk4LlvVLlB8uhWZ5FxBXMRkeOplc/edit#gid=0"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          FDS Handbook
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://app.getguru.com/dashboard"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Guru Cards
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://docs.google.com/document/d/1Yb172orEGLV4XeC-L9fdf1V6l0AfZ7D4u20QCT4_S2k/edit#heading=h.fq95awko1elp"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          JTP Template
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://docs.google.com/document/d/1fEHXFHnkrrTY4mQlLAxVPa82tIPSvHEpdSX2nVVaNII/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          SFTP Instructions (for customers)
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://mastercard.sharepoint.com.mcas.ms/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          The Hub (MasterCard)
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.cloud.databricks.com/?o=3894293756420120#"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          DataBricks
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
