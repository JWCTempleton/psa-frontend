import registerService from "../services/register";
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
import { useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

const RegisterPage = ({
  setUser,
  setUsername,
  setPassword,
  username,
  password,
  user,
  name,
  setName,
}) => {
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const newUser = await registerService.create({
        name,
        username,
        password,
      });
      //   const user = await loginService.login({ username, password });

      //   window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      //   noteService.setToken(user.token);
      //   setUser(user);
      //   setUsername("");
      //   setPassword("");
      //   setName("");
      navigate("/login");
    } catch {
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
      <form onSubmit={handleSignUp}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircle />
            </Avatar>
            <h2>Register</h2>
          </Grid>
          <TextField
            label="Name"
            placeholder="Enter name"
            variant="outlined"
            style={textField}
            fullWidth
            required
            onChange={({ target }) => setName(target.value)}
          />
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
            Register
          </Button>
          {/* <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography> */}
          <Typography>
            {" "}
            Do you have an account ?
            <Link sx={{ m: 2 }} href="/login">
              Sign In
            </Link>
          </Typography>
        </Paper>
      </form>
    </Grid>
  );
};

export default RegisterPage;
