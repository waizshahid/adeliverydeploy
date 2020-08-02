import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import StepForm from "./StepForm";
import Dialog from "@material-ui/core/Dialog";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  appBar: {
    position: "relative",
    paddingRight: 10,
    paddingLeft: 10
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(3.05)
    }
  }
});

const App = ({ classes }) => {
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen2(false);
  };

  return (
    <div className="App">
        <Button onClick={handleClickOpen} variant="contained" size="medium" color="primary" style={{backgroundColor:"white",color:"blue",borderRadius:"4vh",marginTop:"2vh"}} fullWidth={true}>
      Create An Account
      </Button>
      <CssBaseline />

      <main className={classes.layout}>
        <Dialog open={open2} onClose={handleClose}> 
          <Paper className={classes.paper} style={{ backgroundColor: "blue" }}>
            <StepForm style={{ height: "1vh" }} />
          </Paper>
        </Dialog>
      </main>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);