import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "../../../../App.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import ImageIcon from "@material-ui/icons/Image";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import {
  fade,
  //ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {
  InputBase,
  RadioGroup,
  Radio,
  Checkbox,
  Link,
  FormControlLabel,
  Select,
} from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import Drawer from "@material-ui/core/Drawer";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Block } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      width: "100%",
    },
    width: "100%",
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    width: "100vh",
    height: "55vh",
    padding: theme.spacing(2, 4, 3),
  },
  list: {
    width: 250,
  },
  lists: {
    width: 300,
  },
  fullList: {
    width: "auto",
    height: "10vh",
  },
  fullLists: {
    Width: "40%",
  },
  listItemText: {
    fontSize: "14px", //Insert your required size
    textAlign: "left",
  },
  listItemText1: {
    fontSize: "14px", //Insert your required size
    textAlign: "center",
    border: "2px solid black",
    background: "black",
    color: "white",
  },
  indicator: {
    background: "black",
  },
}));
function getSteps() {
  return ["Order Placed", "Processing", "Shipping", "Delivered"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `November 14`;
    case 1:
      return "November 15";
    case 2:
      return "Est November 15";
    case 3:
      return "Est November 16";
    default:
      return "November 16";
  }
}

const Settings = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { className, ...rest } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const orderDisplay = () => {
    document.getElementById("profile").style.display = "none";
    document.getElementById("orders").style.display = "block";
  };

  const [open1, setOpen1] = React.useState(false);
  const [activeStep1, setActiveStep1] = React.useState(0);
  const steps1 = getSteps();

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const profileDisplay = () => {
    document.getElementById("orders").style.display = "none";
    document.getElementById("profile").style.display = "block";
  };
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      
      <Grid container xs={12}>
        <Grid item xs={12} style={{ marginTop: "4vh", marginLeft: "8vh" }}>
          <h2>Account Settings</h2>
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Tabs
            classes={{
              indicator: classes.indicator,
            }}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            left
          >
            <Tab
              label="Profile"
              style={{ color: "black" }}
              onClick={profileDisplay}
            />
            <Tab
              label="Orders"
              style={{ color: "black" }}
              onClick={orderDisplay}
            />
          </Tabs>
          <hr style={{ marginTop: "-.3vh" }} />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        align="center"
        style={{ marginLeft: "5vh" }}
        id="profile"
      >
        <Grid
          item
          xs={12}
          align="left"
          style={{ marginLeft: "3vh", marginTop: "6vh" }}
        >
          <Typography style={{ color: "black", fontWeight: "600" }}>
            Profile Information
          </Typography>
        </Grid>
        <form className={classes.root} noValidate>
          <Grid
            container
            xs={12}
            spacing={2}
            align="left"
            style={{ marginTop: "6vh", marginLeft: "2vh" }}
          >
            <Grid container xs={6} lg={6}>
              <Grid item xs={6} lg={6}>
                <FormControl>
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginLeft: "1vh",
                    }}
                  >
                    First Name
                  </InputLabel>
                  <BootstrapInput
                    id="bootstrap-input"
                    style={{ border: "3px solid grey" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} lg={6}>
                <FormControl className={classes.margin}>
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginLeft: "1vh",
                    }}
                  >
                    Last Name
                  </InputLabel>
                  <BootstrapInput
                    id="bootstrap-input"
                    style={{ border: "3px solid grey" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container xs={6} lg={6} />
            <Grid container xs={6} lg={6} style={{ marginTop: "6vh" }}>
              <Grid item xs={6} lg={6}>
                <FormControl>
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginLeft: "1vh",
                    }}
                  >
                    Email Address
                  </InputLabel>
                  <BootstrapInput
                    id="bootstrap-input"
                    style={{ border: "3px solid grey" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} lg={6}>
                <FormControl className={classes.margin}>
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginLeft: "1vh",
                    }}
                  >
                    PhoneNumber
                  </InputLabel>
                  <BootstrapInput
                    id="bootstrap-input"
                    style={{ border: "3px solid grey" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container xs={6} lg={6} />
            <Grid
              container
              xs={6}
              lg={6}
              style={{ marginTop: "6vh", marginLeft: "0vh" }}
            >
              <Grid item xs={6} lg={6}>
                <FormControl>
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      marginLeft: "1vh",
                    }}
                  >
                    Password
                  </InputLabel>
                  <BootstrapInput
                    type="password"
                    id="bootstrap-input"
                    style={{ border: "3px solid grey" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} lg={6} />
            </Grid>
            <Grid container xs={6} lg={6} />
          </Grid>
        </form>
      </Grid>
      <Grid container xs={12} id="orders" style={{ display: "none" }}>
        <Grid container xs={12} align="center" style={{ marginLeft: "5vh" }}>
          <Grid item xs={1} style={{ marginTop: "4vh" }}>
            <img src={require("../../../../assets/download.png")} width="100" />
          </Grid>

          <Grid
            item
            xs={2}
            style={{ marginTop: "5vh", marginLeft: "2vh" }}
            align="left"
          >
          <h5>[Product Name | Title]</h5>
          <h6>[Subcategory]</h6>
          <h6>[Price]</h6>
          </Grid>
          <Grid item xs={6} />
          <Grid
            container
            xs={2}
            spacing={1}
            align="center"
            style={{ marginTop: "5vh" }}
          >
            <Grid item xs={10}>
              <h6
                style={{
                  fontWeight: "800",
                  border: "3px solid grey",
                  borderRadius: "15px",
                  paddingTop: ".5vh",
                  paddingBottom: ".5vh",
                }}
              >
                <Typography style={{ fontWeight: "600" }}>
                  <a onClick={handleOpen} style={{ color: "grey" }}>
                    Track Order
                  </a>
                </Typography>
              </h6>
            </Grid>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <Grid container xs={12}>
                    <Grid item xs={3}>
                      <div className={classes.root}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                          {steps.map((label, index) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                              <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                              </StepContent>
                            </Step>
                          ))}
                        </Stepper>
                        {activeStep === steps.length && (
                          <Paper
                            square
                            elevation={0}
                            className={classes.resetContainer}
                          >
                            <Typography>
                              All steps completed - you&apos;re finished
                            </Typography>
                          </Paper>
                        )}
                      </div>
                    </Grid>
                    <Grid item xs={1}>
                      <div
                        style={{
                          border: "1px solid grey",
                          height: "50vh",
                          width: ".1vh",
                          background: "grey",
                        }}
                      />
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: "2vh" }}>
                      <Typography>Purchased item 1</Typography>
                      <Typography style={{ marginTop: "4vh" }}>
                        $120.00
                      </Typography>
                      <ImageIcon
                        style={{ fontSize: "20vh", marginLeft: "-3vh" }}
                      />
                    </Grid>

                    <Grid item xs={2} />
                    <Grid item xs={3} align="right">
                      <Typography style={{ fontSize: "11px" }}>
                        Order #521458256
                      </Typography>
                      <Typography style={{ fontSize: "11px" }}>
                        Ships to Daniel Russmussans
                      </Typography>
                      <Typography style={{ color: "blue", fontSize: "14px" }}>
                        <Button
                          size="small"
                          style={{ color: "blue", fontSize: "11px" }}
                          className={classes.margin}
                        >
                          Details
                        </Button>
                      </Typography>
                    </Grid>
                    <Grid container xs={12} align="left">
                      <Grid item xs={4} />
                      <Grid
                        container
                        xs={8}
                        justify="space-even"
                        style={{ marginTop: "-14vh" }}
                      >
                        <Grid container xs={4} align="center">
                          <Grid container align="center" xs={10}>
                            <Button
                              onClick={handleOpen}
                              variant="contained"
                              color="secondary"
                              style={{
                                fontSize: "10px",
                                background: "white",
                                color: "black",
                                maxHeight: "40px",
                              }}
                              className={classes.button}
                              startIcon={
                                <StarBorderIcon style={{ color: "blue" }} />
                              }
                            >
                              Write A Review
                            </Button>
                          </Grid>
                        </Grid>
                        <Grid container xs={4} align="center">
                          <Grid container align="center" xs={10}>
                            <Button
                              onClick={handleOpen}
                              variant="contained"
                              color="secondary"
                              style={{
                                fontSize: "10px",
                                background: "white",
                                color: "black",
                                maxHeight: "40px",
                              }}
                              className={classes.button}
                              startIcon={
                                <ReplayIcon style={{ color: "blue" }} />
                              }
                            >
                              Buy Again
                            </Button>
                          </Grid>
                        </Grid>
                        <Grid container xs={4} align="center">
                          <Grid container align="center" xs={10} style={{}}>
                            <Button
                              onClick={handleOpen}
                              variant="contained"
                              color="secondary"
                              style={{
                                fontSize: "10px",
                                background: "white",
                                color: "black",
                                maxHeight: "40px",
                              }}
                              className={classes.button}
                              startIcon={<CloseIcon style={{ color: "red" }} />}
                            >
                              Cancel Order
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Fade>
            </Modal>
            <Grid item xs={10}>
              <h6
                style={{
                  fontWeight: "800",
                  border: "3px solid grey",
                  borderRadius: "15px",
                  paddingTop: ".5vh",
                  paddingBottom: ".5vh",
                  background: "grey",
                }}
              >
                <Typography style={{ fontWeight: "600", color: "white" }}>
                  <a onClick={handleOpen1} style={{ color: "white" }}>
                    Write A Review
                  </a>
                </Typography>
              </h6>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          xs={12}
          align="center"
          style={{ marginLeft: "5vh", marginTop: "6vh" }}
        >
          <Grid item xs={1} style={{ marginTop: "4vh" }}>
           
          <img src={require("../../../../assets/download.png")} width="100" />
          </Grid>

          <Grid
            item
            xs={2}
            style={{ marginTop: "5vh", marginLeft: "2vh" }}
            align="left"
          >
          <h5>[Product Name | Title]</h5>
          <h6>[Subcategory]</h6>
          <h6>[Price]</h6>
          </Grid>
          <Grid item xs={6} />
          <Grid
            container
            xs={2}
            spacing={1}
            align="center"
            style={{ marginTop: "5vh" }}
          >
            <Grid item xs={10}>
              <h6
                style={{
                  border: "2.5px solid grey",
                  borderRadius: "15px",
                  paddingTop: ".5vh",
                  paddingBottom: ".5vh",
                }}
              >
                <Typography style={{ fontWeight: "600" }}>
                  <a onClick={handleOpen} style={{ color: "grey" }}>
                    Track Order
                  </a>
                </Typography>
              </h6>
            </Grid>
            <Grid item xs={10}>
              <h6
                style={{
                  color: "grey",
                  fontWeight: "800",
                  border: "3px solid grey",
                  borderRadius: "15px",
                  paddingTop: ".5vh",
                  paddingBottom: ".5vh",
                  background: "grey",
                }}
              >
                <Typography style={{ fontWeight: "600", color: "white" }}>
                  <a onClick={handleOpen1} style={{ color: "white" }}>
                    Write A Review
                  </a>
                </Typography>
              </h6>
            </Grid>
          </Grid>

          <Grid container xs={12} align="center" style={{ marginTop: "6vh" }}>
            <Grid item xs={1} style={{ marginTop: "4vh" }}>
            
            <img src={require("../../../../assets/download.png")} width="100" />
            </Grid>

            <Grid
              item
              xs={2}
              style={{ marginTop: "5vh", marginLeft: "2vh" }}
              align="left"
            >
            <h5>[Product Name | Title]</h5>
            <h6>[Subcategory]</h6>
            <h6>[Price]</h6>
            </Grid>
            <Grid item xs={6} />
            <Grid
              container
              xs={2}
              spacing={1}
              align="center"
              style={{ marginTop: "5vh" }}
            >
              <Grid item xs={10}>
                <h6
                  style={{
                    fontWeight: "800",
                    border: "3px solid grey",
                    borderRadius: "15px",
                    paddingTop: ".5vh",
                    paddingBottom: ".5vh",
                  }}
                >
                  <Typography style={{ fontWeight: "600" }}>
                    <a onClick={handleOpen} style={{ color: "grey" }}>
                      Track Order
                    </a>
                  </Typography>
                </h6>
              </Grid>
              <Grid item xs={10}>
                <h6
                  style={{
                    fontWeight: "800",
                    border: "3px solid grey",
                    borderRadius: "15px",
                    paddingTop: ".5vh",
                    paddingBottom: ".5vh",
                    background: "grey",
                  }}
                >
                  <Typography style={{ fontWeight: "600", color: "white" }}>
                    <a onClick={handleOpen1} style={{ color: "white" }}>
                      Write A Review
                    </a>
                  </Typography>
                </h6>
              </Grid>
            </Grid>
          </Grid>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open1}
            onClose={handleClose1}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open1}>
              <div className={classes.paper}>
                <Grid container xs={12}>
                  <Grid item xs={1} />

                  <Grid item xs={4} style={{ marginTop: "2vh" }}>
                    <Typography style={{ fontSize: "25px", fontWeight: "600" }}>
                      Write a Review
                    </Typography>
                  </Grid>
                  <Grid item xs={7} />
                  <Grid container xs={12}>
                    <Grid item xs={1} />
                    <Grid item xs={10} style={{ marginTop: "4vh" }}>
                      <div
                        style={{
                          backgroundColor: "lightGrey",
                          border: "1px solid lightGrey",
                          height: "30vh",
                        }}
                      />
                    </Grid>
                    <Grid item xs={1} />
                  </Grid>
                  <Grid
                    container
                    xs={12}
                    align="center"
                    style={{ marginTop: "4vh" }}
                  >
                    <Grid item xs={5} />
                    <Grid
                      item
                      xs={2}
                      style={{
                        border: "2px solid black",
                        paddingTop: ".5vh",
                        paddingBottom: ".5vh",
                        borderRadius: "25px",
                      }}
                    >
                      <Typography style={{ fontWeight: "550" }}>
                        SUBMIT
                      </Typography>
                    </Grid>
                    <Grid item xs={5} />
                  </Grid>
                </Grid>
              </div>
            </Fade>
          </Modal>

          <Grid container xs={12} align="center" style={{ marginTop: "6vh" }}>
            <Grid item xs={1} style={{ marginTop: "4vh" }}>
            
            <img src={require("../../../../assets/download.png")} width="100" />
            </Grid>

            <Grid
              item
              xs={2}
              style={{ marginTop: "5vh", marginLeft: "2vh" }}
              align="left"
            >
            <h5>[Product Name | Title]</h5>
            <h6>[Subcategory]</h6>
            <h6>[Price]</h6>
            </Grid>
            <Grid item xs={6} />
            <Grid
              container
              xs={2}
              spacing={1}
              align="center"
              style={{ marginTop: "5vh" }}
            >
              <Grid item xs={10}>
                <h6
                  style={{
                    border: "2.5px solid grey",
                    borderRadius: "15px",
                    paddingTop: ".5vh",
                    paddingBottom: ".5vh",
                  }}
                >
                  <Typography style={{ fontWeight: "600" }}>
                    <a onClick={handleOpen} style={{ color: "grey" }}>
                      Track Order
                    </a>
                  </Typography>
                </h6>
              </Grid>
              <Grid item xs={10}>
                <h6
                  style={{
                    color: "grey",
                    fontWeight: "800",
                    border: "3px solid grey",
                    borderRadius: "15px",
                    paddingTop: ".5vh",
                    paddingBottom: ".5vh",
                    background: "grey",
                  }}
                >
                  <Typography style={{ fontWeight: "600", color: "white" }}>
                    Write A Review
                  </Typography>
                </h6>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Settings.propTypes = {
    className: PropTypes.string
  };

export default Settings;
