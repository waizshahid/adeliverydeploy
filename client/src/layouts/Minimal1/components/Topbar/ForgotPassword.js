import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  DialogContent,
  Dialog,
  Grid,
  TextField,
  Typography,
  Button
} from "@material-ui/core";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ffffff",
      borderWidth: "5vh"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffffff",
      borderWidth: ".5vh"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ffffff",
        borderWidth: ".5vh"
      },
      "&:hover fieldset": {
        borderColor: "#ffffff",
        borderWidth: ".5vh"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffffff",
        borderWidth: ".5vh"
      }
    }
  }
})(TextField);

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  label: {
      color:'white'
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },

  checkedIcon: {
    backgroundColor: "#000000",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#000000"
    }
  }
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="white"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function CustomizedRadios() {
  const [open, setOpen] = React.useState(false);
  const [email, setValue1] = React.useState('');
  const [phoneNumber, setValue2] = React.useState('');
  const handleEmail = (event) => {
    setValue1(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setValue2(event.target.value);
  };


  const classes = makeStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [view, setView] = React.useState(0);
  const openSecondView = () => {
    setView(1);
  };
  const openFirstView = () => {
    setView(0);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return view === 1 ? (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Forgot Password?
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ backgroundColor: "blue" }}>
          <Grid container spacing={2} xs={12} md={12}>
            <Grid
              item
              xs={12}
              align="center"
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "sans-serif"
              }}
            >
              Reset your Password
            </Grid>
            <Grid item xs={12} align="center">
              <RadioGroup>
                {" "}
                <span>
                  {" "}
                  <FormControlLabel
                   classes={{
                    label: classes.label
                }}
                    onClick={openSecondView}
                    style={{ color: "#ffffff" }}
                    value="Email"
                    control={<StyledRadio />}
                  
                  />
                  <span style={{color:"white",marginLeft:"-3vh",marginRight:"3vh"}}>Email</span>
                  <FormControlLabel
                    style={{ color:"white"}}
                    classes={{
                        label: classes.label
                    }}
                    onClick={openFirstView}
                    value="Phone"
                    control={<StyledRadio />}
               
                  />
                    <span style={{color:"white",marginLeft:"-3vh",marginRight:"3vh"}}>Phone</span>
                </span>
              </RadioGroup>
            </Grid>
            <Grid item xs={12} align="center">
              <Typography style={{ color: "white", fontFamily: "sans-serif" }}>
                Enter the email address or mobile phone number associated with
                your greenRush account.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                InputLabelProps={{
                  style: {
                    color: "white"
                  }
                }}
                fullWidth={true}
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={handleEmail}
              />
            </Grid>

            <Grid item xs={12} align="center">
              <Button
                fullWidth={true}
                variant="contained"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5vh",
                  marginBottom: "2vh"
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  ) : (
    <div>
      <a href='#' style={{color:'white',fontWeight:'400',outline:'none'}} onClick={handleClickOpen}>
        Forgot Password
      </a>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ backgroundColor: "blue" }}>
          <Grid container spacing={2} xs={12} md={12}>
            <Grid
              item
              xs={12}
              align="center"
              style={{
                color: "white",
                fontWeight: "bold",
                fontFamily: "sans-serif"
              }}
            >
              Reset your Password
            </Grid>
            <Grid item xs={12} align="center">
              <RadioGroup>
                {" "}
                <span>
                  {" "}
                  <FormControlLabel
                    onClick={openSecondView}
                    className='email'
                    value="Email"
                    control={<StyledRadio />}
                   
                    
                  />
                    <span style={{color:"white",marginLeft:"-3vh",marginRight:"3vh"}}>Email</span>
                  <FormControlLabel
                    style={{ color: "white" }}
                    onClick={openFirstView}
                    value="Phone"
                    control={<StyledRadio />}
           
                  />
                    <span style={{color:"white",marginLeft:"-3vh",marginRight:"3vh"}}>Phone</span>
                </span>
              </RadioGroup>
            </Grid>
            <Grid item xs={12} align="center">
              <Typography style={{ color: "white", fontFamily: "sans-serif" }}>
                Enter the email address or mobile phone number associated with
                your greenRush account.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                InputLabelProps={{
                  style: {
                    color: "white"
                  }
                }}
                fullWidth={true}
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
            </Grid>

            <Grid item xs={12} align="center">
              <Button
                fullWidth={true}
                variant="contained"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5vh",
                  marginBottom: "2vh"
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}