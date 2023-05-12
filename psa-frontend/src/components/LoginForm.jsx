import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import loginService from "../services/login";
import cardService from "../services/cards";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";

const LoginForm = ({
  setUser,
  setUsername,
  setPassword,
  username,
  password,
  user,
}) => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      console.log("user", user);

      window.localStorage.setItem("loggedCardappUser", JSON.stringify(user));

      cardService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
      navigate("/cards");
    } catch (exception) {
      // setErrorMessage("Wrong credentials");
      // setTimeout(() => {
      //   setErrorMessage(null);
      // }, 5000);
      console.log("error");
    }
  };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 400,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#42a5f5" };
  const btnstyle = { margin: "8px 0 16px 0" };
  const textField = { marginBottom: "10px" };
  return (
    <Grid>
      <form onSubmit={handleLogin}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            variant="outlined"
            style={textField}
            fullWidth
            required
            onChange={({ target }) => setUsername(target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            required
            onChange={({ target }) => setPassword(target.value)}
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
            Sign in
          </Button>
          {/* <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography> */}
          <Typography>
            {" "}
            Don't have an account?
            <Link sx={{ m: 2 }} href="/signup">
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </form>
    </Grid>
  );
};

export default LoginForm;
