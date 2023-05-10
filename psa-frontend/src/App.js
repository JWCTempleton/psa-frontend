import { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Users from "./components/Users";
import LoginForm from "./components/LoginForm";
import cardService from "./services/cards";
import Footer from "./components/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const App = () => {
  const [allCards, setAllCards] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    cardService.getAll().then((response) => {
      setAllCards(response.data);
      console.log(response.data);
    });
  }, []);

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
              <Link
                style={padding}
                color="primary"
                variant="body2"
                to="/cards  "
              >
                cards
              </Link>
              <Link style={padding} color="primary" variant="body2" to="/users">
                users
              </Link>
              {user ? (
                <div>
                  <p>User Logged in</p>
                </div>
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
              <Route path="/cards" element={<Cards />} />
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
            </Routes>

            <div>
              <Footer />
            </div>
          </Router>{" "}
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
