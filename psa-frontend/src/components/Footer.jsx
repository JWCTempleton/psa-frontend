import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function GuestFooter() {
  return (
    <Paper
      sx={{ marginTop: "calc(10% + 60px)", bottom: 0 }}
      component="footer"
      square
      variant="outlined"
      elevation={3}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            2023 JWCTempleton Designs
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
