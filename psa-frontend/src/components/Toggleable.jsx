import { useState } from "react";
import { Button } from "@mui/material";

const Toggleable = (props) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button color="primary" variant="contained" onClick={toggleVisibility}>
          {props.buttonLabel}
        </Button>
      </div>
      <div style={showWhenVisible} className="toggleableContent">
        <Button color="primary" variant="contained" onClick={toggleVisibility}>
          cancel
        </Button>
        {props.children}
      </div>
    </div>
  );
};

export default Toggleable;
