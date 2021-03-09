import React from "react";
import "./App.css";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique"
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography className={classes.helloThereStyle} variant="h1" color="primary">
        Hello there
      </Typography>
      <Button className={classes.buttonStyles} color="secondary" variant="outlined">
        This is our first button
      </Button>
    </div>
  );
}

export default App;
