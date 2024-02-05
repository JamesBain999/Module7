import React from "react";
import { useState } from "react";
import { useUserContext } from "./UserContext";
import { TextField, Button, Typography, Paper, Container } from "@mui/material";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const { currentUser, handleUpdateUser } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail, name: userName });
    }
  };

  if (currentUser.email)
    return (
      <Container component="main" maxWidth="xs">
        <Paper elevation={3}>
          <Typography component="div" align="center">
            <p>Welcome {currentUser.email}!</p>
            <Button onClick={() => handleUpdateUser({})} variant="contained">
              Log Out
            </Button>
          </Typography>
        </Paper>
      </Container>
    );

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Typography component="div" align="center">
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              type="password"
              label="Password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="secondary">
              Login
            </Button>
          </form>
        </Typography>
      </Paper>
    </Container>
  );
}

export default LoginForm;
