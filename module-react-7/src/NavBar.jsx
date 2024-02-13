import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { MyThemeContext } from "./MyThemeContext";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <Toolbar>
        <Typography variant="h6" component="div">
          My App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/dash">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Login Form
        </Button>
      </Toolbar>
    </AppBar>
  );
}
