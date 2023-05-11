import * as React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";

const Footer = () => {
  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        elevation={4}
      >
        {/* <BottomNavigation> */}
        <Typography variant="subtitle2">
          PSA FullStack App, JWCTDesigns
        </Typography>
        {/* </BottomNavigation> */}
      </Paper>
    </>
  );
};

export default Footer;
