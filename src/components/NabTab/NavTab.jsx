import React from "react";
import { Box, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./navtab.css";
export default function NavTab() {
  return (
    <>
      <Box
        flex={0.5}
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div className="tab-btn">
          <Button>
            <AccountCircleIcon sx={{ fontSize: "25px", color: "white" }} />
          </Button>
        </div>
        <div className="tab-btn">
          <Button>
            <AccountCircleIcon sx={{ fontSize: "25px", color: "white" }} />
          </Button>
        </div>
        <div className="tab-btn">
          <Button>
            <AccountCircleIcon sx={{ fontSize: "25px", color: "white" }} />
          </Button>
        </div>
        <div className="tab-btn">
          <Button>
            <AccountCircleIcon sx={{ fontSize: "25px", color: "white" }} />
          </Button>
        </div>
        <div className="tab-btn">
          <Button>
            <AccountCircleIcon sx={{ fontSize: "25px", color: "white" }} />
          </Button>
        </div>
      </Box>
    </>
  );
}
