import React from "react";
import Toggleable from "./Toggleable";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

const Cards = () => {
  const paperStyle = {
    padding: 20,
    paddingBottom: 50,
    width: 400,
    margin: "50px auto",
    marginBottom: 120,
  };
  const avatarStyle = { backgroundColor: "#42a5f5" };
  const btnstyle = { margin: "8px 0 16px 0" };
  const textField = { marginBottom: "10px" };
  return (
    <Grid>
      <Typography variant="h3" sx={{ mt: 3 }}>
        Cards
      </Typography>
      <Toggleable buttonLabel="Submit New Card">
        <form style={{ height: "auto" }}>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <h2>Submit New Card</h2>
            </Grid>
            <TextField
              label="Company"
              placeholder="Enter company"
              variant="outlined"
              style={textField}
              fullWidth
              required
              // onChange={({ target }) => setName(target.value)}
            />
            <TextField
              label="Description"
              placeholder="Enter description"
              variant="outlined"
              style={textField}
              fullWidth
              required
              // onChange={({ target }) => setUsername(target.value)}
            />
            <TextField
              label="Notes"
              placeholder="Enter notes"
              type="password"
              variant="outlined"
              fullWidth
              required
              // onChange={({ target }) => setPassword(target.value)}
            />
            {/* <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        /> */}
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Submit
            </Button>
          </Paper>
        </form>
      </Toggleable>
    </Grid>
  );
};

export default Cards;
