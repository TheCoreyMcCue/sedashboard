import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
// import {
//   DownloadOutlined,
//   Email,
//   PointOfSale,
//   PersonAdd,
//   Traffic,
// } from "@mui/icons-material";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
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
          My open Tickets
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
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.okta.com/home/atlassian/0oab9jr9ogkAamAJN357/aln1aqcs055ZRoizW0g8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Jira
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.okta.com/home/atlassian/0oab9jr9ogkAamAJN357/aln1aqcs055ZRoizW0g8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Jira
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.okta.com/home/atlassian/0oab9jr9ogkAamAJN357/aln1aqcs055ZRoizW0g8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Jira
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.okta.com/home/atlassian/0oab9jr9ogkAamAJN357/aln1aqcs055ZRoizW0g8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Jira
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.okta.com/home/atlassian/0oab9jr9ogkAamAJN357/aln1aqcs055ZRoizW0g8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Jira
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.okta.com/home/atlassian/0oab9jr9ogkAamAJN357/aln1aqcs055ZRoizW0g8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Jira
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          component="a"
          target="_blank"
          href="https://ekata.okta.com/home/atlassian/0oab9jr9ogkAamAJN357/aln1aqcs055ZRoizW0g8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Jira
        </Box>
      </Box>
      {/* <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": {
            gridColumn: isNonMediumScreens ? undefined : "span 12",
            margin: "0.5rem",
            marginBottom: "20px",
          },
        }}
      >
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Quick Link
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          style={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Quick Link
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          style={{ cursor: "pointer" }}
        >
          box 2
        </Box>
      </Box> */}
    </Box>
  );
};

export default Dashboard;
