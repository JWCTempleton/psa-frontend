import { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Users from "./components/Users";
import LoginForm from "./components/LoginForm";
import cardService from "./services/cards";
import Footer from "./components/Footer";
import { CssBaseline, Box, Container, Button, Stack } from "@mui/material";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  const [allCards, setAllCards] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    cardService.getAll().then((response) => {
      setAllCards(response.data);
    });
    user && console.log("Hello data", user);
  }, [user]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedCardappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      cardService.setToken(user.token);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedCardappUser");
  };

  setTimeout(() => handleLogout(), 600000 * 18);

  const padding = {
    padding: 10,
    fontWeight: 700,
    textTransform: "uppercase",
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "white", height: "100vh" }}>
          <Router>
            <div>
              <Link style={padding} color="primary" variant="body2" to="/">
                home
              </Link>
              {user && (
                <Link
                  style={padding}
                  color="primary"
                  variant="body2"
                  to="/cards  "
                >
                  cards
                </Link>
              )}
              {user && (
                <Link
                  style={padding}
                  color="primary"
                  variant="body2"
                  to="/users"
                >
                  users
                </Link>
              )}
              {user ? (
                <Stack
                  sx={{ height: 30, mt: 2 }}
                  alignItems="center"
                  spacing={2}
                  direction="row"
                >
                  <p>{user.username} logged in</p>{" "}
                  <Button
                    variant="contained"
                    size="small"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Stack>
              ) : (
                <Link style={padding} to="/login">
                  login
                </Link>
              )}
              {!user && (
                <Link style={padding} to="/signup">
                  sign up
                </Link>
              )}
            </div>

            <Routes>
              {user ? (
                <Route path="/cards" element={<Cards allCards={allCards} />} />
              ) : (
                <Route path="/cards" element={<div>Hello</div>} />
              )}
              <Route path="/users" element={<Users />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  <LoginForm
                    setUsername={setUsername}
                    setPassword={setPassword}
                    username={username}
                    password={password}
                    user={user}
                    setUser={setUser}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <RegisterPage
                    setUsername={setUsername}
                    setPassword={setPassword}
                    username={username}
                    password={password}
                    setName={setName}
                    name={name}
                    user={user}
                    setUser={setUser}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
          </Router>
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
