import { useState } from "react";
import { Button, Box } from "@mui/material";

const Toggleable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div style={hideWhenVisible}>
        <Button color="primary" variant="contained" onClick={toggleVisibility}>
          {props.buttonLabel}
        </Button>
      </div>

      <div style={showWhenVisible}>
        <Button color="error" variant="contained" onClick={toggleVisibility}>
          cancel
        </Button>
        {props.children}
      </div>
    </Box>
  );
};

export default Toggleable;
