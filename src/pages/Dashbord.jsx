import { Box, Stack } from "@mui/material";
import React from "react";
import ChatBoard from "../components/Chat/ChatBoard";
import NavTab from "../components/NabTab/NavTab";
import Sidebar from "../components/Sidebar/Sidebar";
export default function Dashbord() {
  return (
    <>
      <Box>
        <Stack direction="row">
          <NavTab />
          <Sidebar />
          <ChatBoard />
        </Stack>
      </Box>

      {/* <Grid container>
        <Box
          flex={2}
          style={{
            backgroundColor: "#1E2952",
            hight: "100%",
            left: "0",
            position: "fixed",
          }}
        >
          <h2>Hello</h2>
        </Box>
        <Box flex={3}>
          <h2>Hello</h2>
        </Box>
        <Box flex={7}>
          <h2>Hello</h2>
        </Box>
        <Grid
          flex={2}
          style={{
            backgroundColor: "#1E2952",
            color: "#ffff",
            left: "0",
            position: "fixed",
            height: "100%",
          }}
          item
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: "#A6ACAF",
          }}
        >
          <h3>HEllo cxxjblkxcbjcxlkbbxlblzhsdhgdf</h3>
        </Grid>
        <Grid item>
          <h3>HEllo</h3>
        </Grid>
      </Grid> */}
    </>
  );
}
