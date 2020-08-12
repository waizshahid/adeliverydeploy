import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ReplayIcon from "@material-ui/icons/Replay";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import Paper from "@material-ui/core/Paper";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import isEmpty from "../../../../common/isEmpty";
import {
  InputBase,
  RadioGroup,
  Radio,
  Checkbox,
  Link,
  FormControlLabel,
  Select,
} from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import {
  fade,
  //ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import ImageIcon from "@material-ui/icons/Image";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "bootstrap/dist/css/bootstrap.min.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import "../../../../App.css";

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
  lists: {
    width: 300,
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
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    height: "10vh",
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
  CircleIcon: {
    fontSize: "70px",
    color: "red",
    cursor: "pointer",
  },
  FilledCircle: {
    fontSize: "85px",
    color: "red",
    marginTop: "-1vh",
    marginLeft: "-.8vh",
    display: "none",
  },
  PopoverBtn: {
    background: "white",
    color: "red",
    borderRadius: "15px",
    width: "18vh",
    margin: "1vh",
    border: "1px solid red",

    "&:focus": {
      outline: 0,
      background: "red",
      color: "white",
    },
  },
  HeaderBtn: {
    background: "red",
    color: "white",
    borderRadius: "15px",
    "&:focus": {
      outline: "0",
    },
  },
}));

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

const Drinks = [
  "Liquor",
  "Beer",
  "Red Wine",
  "White Wine",
  "Sparkling",
  "Cider",
  "Premix",
  "Extras",
];
// const DrinkCognac = ["bottle 1", "bottle 2", "bottle 3", "bottle 4"];
// const SubCategory = {
//   SubCategoryLiquor1: [
//     {
//       id: "scl11",
//       img: "../../../../assets/beer.jpg",
//       text: "Liquor Subcategory1 Item 1",
//       price: "56.12",
//     },
//     {
//       id: "scl12",
//       img: "../../../../assets/beer.jpg",
//       text: "Liquor Subcategory1 Item 2",
//       price: "56.00",
//     },
//     {
//       id: "scl13",
//       img: "../../../../assets/beer.jpg",
//       text: "Liquor Subcategory1 Item 3",
//       price: "52.12",
//     },
//     {
//       id: "scl14",
//       img: "../../../../assets/beer.jpg",
//       text: "Liquor Subcategory1 Item 4",
//       price: "45.12",
//     },
//   ],
//   SubCategoryLiquor2: [
//     {
//       id: "scl21",
//       img: "../../../../assets/beer.jpg",
//       text: "Liquor Subcategory2 Item 1",
//       price: "66.12",
//     },
//     {
//       id: "scl22",
//       img: "../../../../assets/beer.jpg",
//       text: "Liquor Subcategory2 Item 2",
//       price: "58.12",
//     },
//     {
//       id: "scl23",
//       img: "../../../../assets/beer.jpg",
//       text: "Liquor Subcategory2 Item 3",
//       price: "56.22",
//     },
//     {
//       id: "scl24",
//       img: "../../../../assets/beer.jpg",
//       text: "Liquor Subcategory2 Item 4",
//       price: "56.94",
//     },
//   ],
//   SubCategoryBeer1: [
//     {
//       id: "scb11",
//       img: "../../../../assets/beer.jpg",
//       text: "Beer Subcategory1 Item 1",
//       price: "56.12",
//     },
//     {
//       id: "scb12",
//       img: "../../../../assets/beer.jpg",
//       text: "Beer Subcategory1 Item 2",
//       price: "56.00",
//     },
//     {
//       id: "scb13",
//       img: "../../../../assets/beer.jpg",
//       text: "Beer Subcategory1 Item 3",
//       price: "52.12",
//     },
//     {
//       id: "scb14",
//       img: "../../../../assets/beer.jpg",
//       text: "Beer Subcategory1 Item 4",
//       price: "45.12",
//     },
//   ],
//   SubCategoryBeer2: [
//     {
//       id: "scb21",
//       img: "../../../../assets/beer.jpg",
//       text: "Beer Subcategory2 Item 1",
//       price: "66.12",
//     },
//     {
//       id: "scb22",
//       img: "../../../../assets/beer.jpg",
//       text: "Beer Subcategory2 Item 2",
//       price: "58.12",
//     },
//     {
//       id: "scb23",
//       img: "../../../../assets/beer.jpg",
//       text: "Beer Subcategory2 Item 3",
//       price: "56.22",
//     },
//     {
//       id: "scb24",
//       img: "../../../../assets/beer.jpg",
//       text: "Beer Subcategory2 Item 4",
//       price: "56.94",
//     },
//   ],
//   SubCategoryRedWine1: [
//     {
//       id: "scr11",
//       img: "../../../../assets/beer.jpg",
//       text: "RedWine Subcategory1 Item 1",
//       price: "56.12",
//     },
//     {
//       id: "scr12",
//       img: "../../../../assets/beer.jpg",
//       text: "RedWine Subcategory1 Item 2",
//       price: "56.00",
//     },
//     {
//       id: "scr13",
//       img: "../../../../assets/beer.jpg",
//       text: "RedWine Subcategory1 Item 3",
//       price: "52.12",
//     },
//     {
//       id: "scr14",
//       img: "../../../../assets/beer.jpg",
//       text: "RedWine Subcategory1 Item 4",
//       price: "45.12",
//     },
//   ],
//   SubCategoryRedWine2: [
//     {
//       id: "scr21",
//       img: "../../../../assets/beer.jpg",
//       text: "RedWine Subcategory2 Item 1",
//       price: "66.12",
//     },
//     {
//       id: "scr22",
//       img: "../../../../assets/beer.jpg",
//       text: "RedWine Subcategory2 Item 2",
//       price: "58.12",
//     },
//     {
//       id: "scr23",
//       img: "../../../../assets/beer.jpg",
//       text: "RedWine Subcategory2 Item 3",
//       price: "56.22",
//     },
//     {
//       id: "scr24",
//       img: "../../../../assets/beer.jpg",
//       text: "RedWine Subcategory2 Item 4",
//       price: "56.94",
//     },
//   ],
//   SubCategoryCider1: [
//     {
//       id: "scc11",
//       img: "../../../../assets/beer.jpg",
//       text: "Cider Subcategory1 Item 1",
//       price: "56.12",
//     },
//     {
//       id: "scc12",
//       img: "../../../../assets/beer.jpg",
//       text: "Cider Subcategory1 Item 2",
//       price: "56.00",
//     },
//     {
//       id: "scc13",
//       img: "../../../../assets/beer.jpg",
//       text: "Cider Subcategory1 Item 3",
//       price: "52.12",
//     },
//     {
//       id: "scc14",
//       img: "../../../../assets/beer.jpg",
//       text: "Cider Subcategory1 Item 4",
//       price: "45.12",
//     },
//   ],
//   SubCategoryCider2: [
//     {
//       id: "scc21",
//       img: "../../../../assets/beer.jpg",
//       text: "Cider Subcategory2 Item 1",
//       price: "66.12",
//     },
//     {
//       id: "scc22",
//       img: "../../../../assets/beer.jpg",
//       text: "Cider Subcategory2 Item 2",
//       price: "58.12",
//     },
//     {
//       id: "scc23",
//       img: "../../../../assets/beer.jpg",
//       text: "Cider Subcategory2 Item 3",
//       price: "56.22",
//     },
//     {
//       id: "scc24",
//       img: "../../../../assets/beer.jpg",
//       text: "Cider Subcategory2 Item 4",
//       price: "56.94",
//     },
//   ],
//   SubCategoryWhiteWine1: [
//     {
//       id: "scw11",
//       img: "../../../../assets/beer.jpg",
//       text: "Wine Subcategory1 Item 1",
//       price: "56.12",
//     },
//     {
//       id: "scw12",
//       img: "../../../../assets/beer.jpg",
//       text: "Wine Subcategory1 Item 2",
//       price: "56.00",
//     },
//     {
//       id: "scw13",
//       img: "../../../../assets/beer.jpg",
//       text: "Wine Subcategory1 Item 3",
//       price: "52.12",
//     },
//     {
//       id: "scw14",
//       img: "../../../../assets/beer.jpg",
//       text: "Wine Subcategory1 Item 4",
//       price: "45.12",
//     },
//   ],
//   SubCategoryWhiteWine2: [
//     {
//       id: "scw21",
//       img: "../../../../assets/beer.jpg",
//       text: "Wine Subcategory2 Item 1",
//       price: "66.12",
//     },
//     {
//       id: "scw22",
//       img: "../../../../assets/beer.jpg",
//       text: "Wine Subcategory2 Item 2",
//       price: "58.12",
//     },
//     {
//       id: "scw23",
//       img: "../../../../assets/beer.jpg",
//       text: "Wine Subcategory2 Item 3",
//       price: "56.22",
//     },
//     {
//       id: "scw24",
//       img: "../../../../assets/beer.jpg",
//       text: "Wine Subcategory2 Item 4",
//       price: "56.94",
//     },
//   ],
//   SubCategorySparkling1: [
//     {
//       id: "scs11",
//       img: "../../../../assets/beer.jpg",
//       text: "Sparkling Subcategory1 Item 1",
//       price: "56.12",
//     },
//     {
//       id: "scs12",
//       img: "../../../../assets/beer.jpg",
//       text: "Sparkling Subcategory1 Item 2",
//       price: "56.00",
//     },
//     {
//       id: "scs13",
//       img: "../../../../assets/beer.jpg",
//       text: "Sparkling Subcategory1 Item 3",
//       price: "52.12",
//     },
//     {
//       id: "scs14",
//       img: "../../../../assets/beer.jpg",
//       text: "Sparkling Subcategory1 Item 4",
//       price: "45.12",
//     },
//   ],
//   SubCategorySparkling2: [
//     {
//       id: "scs21",
//       img: "../../../../assets/beer.jpg",
//       text: "Sparkling Subcategory2 Item 1",
//       price: "66.12",
//     },
//     {
//       id: "scs22",
//       img: "../../../../assets/beer.jpg",
//       text: "Sparkling Subcategory2 Item 2",
//       price: "58.12",
//     },
//     {
//       id: "scs23",
//       img: "../../../../assets/beer.jpg",
//       text: "Sparkling Subcategory2 Item 3",
//       price: "56.22",
//     },
//     {
//       id: "scs24",
//       img: "../../../../assets/beer.jpg",
//       text: "Sparkling Subcategory2 Item 4",
//       price: "56.94",
//     },
//   ],
//   SubCategoryPremix1: [
//     {
//       id: "scp11",
//       img: "../../../../assets/beer.jpg",
//       text: "Premix Subcategory1 Item 1",
//       price: "56.12",
//     },
//     {
//       id: "scp12",
//       img: "../../../../assets/beer.jpg",
//       text: "Premix Subcategory1 Item 2",
//       price: "56.00",
//     },
//     {
//       id: "scp13",
//       img: "../../../../assets/beer.jpg",
//       text: "Premix Subcategory1 Item 3",
//       price: "52.12",
//     },
//     {
//       id: "scp14",
//       img: "../../../../assets/beer.jpg",
//       text: "Premix Subcategory1 Item 4",
//       price: "45.12",
//     },
//   ],
//   SubCategoryPremix2: [
//     {
//       id: "scp21",
//       img: "../../../../assets/beer.jpg",
//       text: "Premix Subcategory2 Item 1",
//       price: "66.12",
//     },
//     {
//       id: "scp22",
//       img: "../../../../assets/beer.jpg",
//       text: "Premix Subcategory2 Item 2",
//       price: "58.12",
//     },
//     {
//       id: "scp23",
//       img: "../../../../assets/beer.jpg",
//       text: "Premix Subcategory2 Item 3",
//       price: "56.22",
//     },
//     {
//       id: "scp24",
//       img: "../../../../assets/beer.jpg",
//       text: "Premix Subcategory2 Item 4",
//       price: "56.94",
//     },
//   ],
//   SubCategoryExtras1: [
//     {
//       id: "sce11",
//       img: "../../../../assets/beer.jpg",
//       text: "Extra Subcategory1 Item 1",
//       price: "56.12",
//     },
//     {
//       id: "sce12",
//       img: "../../../../assets/beer.jpg",
//       text: "Extra Subcategory1 Item 2",
//       price: "56.00",
//     },
//     {
//       id: "sce13",
//       img: "../../../../assets/beer.jpg",
//       text: "Extra Subcategory1 Item 3",
//       price: "52.12",
//     },
//     {
//       id: "sce14",
//       img: "../../../../assets/beer.jpg",
//       text: "Extra Subcategory1 Item 4",
//       price: "45.12",
//     },
//   ],
//   SubCategoryExtras2: [
//     {
//       id: "sce21",
//       img: "../../../../assets/beer.jpg",
//       text: "Extra Subcategory2 Item 1",
//       price: "66.12",
//     },
//     {
//       id: "sce22",
//       img: "../../../../assets/beer.jpg",
//       text: "Extra Subcategory2 Item 2",
//       price: "58.12",
//     },
//     {
//       id: "sce23",
//       img: "../../../../assets/beer.jpg",
//       text: "Extra Subcategory2 Item 3",
//       price: "56.22",
//     },
//     {
//       id: "sce24",
//       img: "../../../../assets/beer.jpg",
//       text: "Extra Subcategory2 Item 4",
//       price: "56.94",
//     },
//   ],
// };
const DrinkBourbon = ["bottle 1", "bottle 2", "bottle 3", "bottle 4"];

function handleLiquor() {
  document.getElementById("LiquorCircle").style.display = "none";
  document.getElementById("BeerCircle").style.display = "inline-block";
  document.getElementById("RedWineCircle").style.display = "inline-block";
  document.getElementById("WhiteWineCircle").style.display = "inline-block";
  document.getElementById("SparklingCircle").style.display = "inline-block";
  document.getElementById("CiderCircle").style.display = "inline-block";
  document.getElementById("PremixCircle").style.display = "inline-block";
  document.getElementById("ExtrasCircle").style.display = "inline-block";

  document.getElementById("LiquorFilledCircle").style.display = "block";
  document.getElementById("BeerFilledCircle").style.display = "none";
  document.getElementById("RedWineFilledCircle").style.display = "none";
  document.getElementById("WhiteWineFilledCircle").style.display = "none";
  document.getElementById("SparklingFilledCircle").style.display = "none";
  document.getElementById("CiderFilledCircle").style.display = "none";
  document.getElementById("PremixFilledCircle").style.display = "none";
  document.getElementById("ExtrasFilledCircle").style.display = "none";
}
function handleBeer() {
  document.getElementById("LiquorCircle").style.display = "inline-block";
  document.getElementById("BeerCircle").style.display = "none";
  document.getElementById("RedWineCircle").style.display = "inline-block";
  document.getElementById("WhiteWineCircle").style.display = "inline-block";
  document.getElementById("SparklingCircle").style.display = "inline-block";
  document.getElementById("CiderCircle").style.display = "inline-block";
  document.getElementById("PremixCircle").style.display = "inline-block";
  document.getElementById("ExtrasCircle").style.display = "inline-block";

  document.getElementById("LiquorFilledCircle").style.display = "none";
  document.getElementById("BeerFilledCircle").style.display = "inline-block";
  document.getElementById("RedWineFilledCircle").style.display = "none";
  document.getElementById("WhiteWineFilledCircle").style.display = "none";
  document.getElementById("SparklingFilledCircle").style.display = "none";
  document.getElementById("CiderFilledCircle").style.display = "none";
  document.getElementById("PremixFilledCircle").style.display = "none";
  document.getElementById("ExtrasFilledCircle").style.display = "none";
}
function handleRedWine() {
  document.getElementById("LiquorCircle").style.display = "inline-block";
  document.getElementById("BeerCircle").style.display = "inline-block";
  document.getElementById("RedWineCircle").style.display = "none";
  document.getElementById("WhiteWineCircle").style.display = "inline-block";
  document.getElementById("SparklingCircle").style.display = "inline-block";
  document.getElementById("CiderCircle").style.display = "inline-block";
  document.getElementById("PremixCircle").style.display = "inline-block";
  document.getElementById("ExtrasCircle").style.display = "inline-block";

  document.getElementById("LiquorFilledCircle").style.display = "none";
  document.getElementById("BeerFilledCircle").style.display = "none";
  document.getElementById("RedWineFilledCircle").style.display = "inline-block";
  document.getElementById("WhiteWineFilledCircle").style.display = "none";
  document.getElementById("SparklingFilledCircle").style.display = "none";
  document.getElementById("CiderFilledCircle").style.display = "none";
  document.getElementById("PremixFilledCircle").style.display = "none";
  document.getElementById("ExtrasFilledCircle").style.display = "none";
}
function handleWhiteWine() {
  document.getElementById("LiquorCircle").style.display = "inline-block";
  document.getElementById("BeerCircle").style.display = "inline-block";
  document.getElementById("RedWineCircle").style.display = "inline-block";
  document.getElementById("WhiteWineCircle").style.display = "none";
  document.getElementById("SparklingCircle").style.display = "inline-block";
  document.getElementById("CiderCircle").style.display = "inline-block";
  document.getElementById("PremixCircle").style.display = "inline-block";
  document.getElementById("ExtrasCircle").style.display = "inline-block";

  document.getElementById("LiquorFilledCircle").style.display = "none";
  document.getElementById("BeerFilledCircle").style.display = "none";
  document.getElementById("RedWineFilledCircle").style.display = "none";
  document.getElementById("WhiteWineFilledCircle").style.display =
    "inline-block";
  document.getElementById("SparklingFilledCircle").style.display = "none";
  document.getElementById("CiderFilledCircle").style.display = "none";
  document.getElementById("PremixFilledCircle").style.display = "none";
  document.getElementById("ExtrasFilledCircle").style.display = "none";
}
function handleSparkling() {
  document.getElementById("LiquorCircle").style.display = "inline-block";
  document.getElementById("BeerCircle").style.display = "inline-block";
  document.getElementById("RedWineCircle").style.display = "inline-block";
  document.getElementById("WhiteWineCircle").style.display = "inline-block";
  document.getElementById("SparklingCircle").style.display = "none";
  document.getElementById("CiderCircle").style.display = "inline-block";
  document.getElementById("PremixCircle").style.display = "inline-block";
  document.getElementById("ExtrasCircle").style.display = "inline-block";

  document.getElementById("LiquorFilledCircle").style.display = "none";
  document.getElementById("BeerFilledCircle").style.display = "none";
  document.getElementById("RedWineFilledCircle").style.display = "none";
  document.getElementById("WhiteWineFilledCircle").style.display = "none";
  document.getElementById("SparklingFilledCircle").style.display =
    "inline-block";
  document.getElementById("CiderFilledCircle").style.display = "none";
  document.getElementById("PremixFilledCircle").style.display = "none";
  document.getElementById("ExtrasFilledCircle").style.display = "none";
}
function handleCider() {
  document.getElementById("LiquorCircle").style.display = "inline-block";
  document.getElementById("BeerCircle").style.display = "inline-block";
  document.getElementById("RedWineCircle").style.display = "inline-block";
  document.getElementById("WhiteWineCircle").style.display = "inline-block";
  document.getElementById("SparklingCircle").style.display = "inline-block";
  document.getElementById("CiderCircle").style.display = "none";
  document.getElementById("PremixCircle").style.display = "inline-block";
  document.getElementById("ExtrasCircle").style.display = "inline-block";

  document.getElementById("LiquorFilledCircle").style.display = "none";
  document.getElementById("BeerFilledCircle").style.display = "none";
  document.getElementById("RedWineFilledCircle").style.display = "none";
  document.getElementById("WhiteWineFilledCircle").style.display = "none";
  document.getElementById("SparklingFilledCircle").style.display = "none";
  document.getElementById("CiderFilledCircle").style.display = "inline-block";
  document.getElementById("PremixFilledCircle").style.display = "none";
  document.getElementById("ExtrasFilledCircle").style.display = "none";
}
function handlePremix() {
  document.getElementById("LiquorCircle").style.display = "inline-block";
  document.getElementById("BeerCircle").style.display = "inline-block";
  document.getElementById("RedWineCircle").style.display = "inline-block";
  document.getElementById("WhiteWineCircle").style.display = "inline-block";
  document.getElementById("SparklingCircle").style.display = "inline-block";
  document.getElementById("CiderCircle").style.display = "inline-block";
  document.getElementById("PremixCircle").style.display = "none";
  document.getElementById("ExtrasCircle").style.display = "inline-block";

  document.getElementById("LiquorFilledCircle").style.display = "none";
  document.getElementById("BeerFilledCircle").style.display = "none";
  document.getElementById("RedWineFilledCircle").style.display = "none";
  document.getElementById("WhiteWineFilledCircle").style.display = "none";
  document.getElementById("SparklingFilledCircle").style.display = "none";
  document.getElementById("CiderFilledCircle").style.display = "none";
  document.getElementById("PremixFilledCircle").style.display = "inline-block";
  document.getElementById("ExtrasFilledCircle").style.display = "none";
}
function handleExtras() {
  document.getElementById("LiquorCircle").style.display = "inline-block";
  document.getElementById("BeerCircle").style.display = "inline-block";
  document.getElementById("RedWineCircle").style.display = "inline-block";
  document.getElementById("WhiteWineCircle").style.display = "inline-block";
  document.getElementById("SparklingCircle").style.display = "inline-block";
  document.getElementById("CiderCircle").style.display = "inline-block";
  document.getElementById("PremixCircle").style.display = "inline-block";
  document.getElementById("ExtrasCircle").style.display = "none";

  document.getElementById("LiquorFilledCircle").style.display = "none";
  document.getElementById("BeerFilledCircle").style.display = "none";
  document.getElementById("RedWineFilledCircle").style.display = "none";
  document.getElementById("WhiteWineFilledCircle").style.display = "none";
  document.getElementById("SparklingFilledCircle").style.display = "none";
  document.getElementById("CiderFilledCircle").style.display = "none";
  document.getElementById("PremixFilledCircle").style.display = "none";
  document.getElementById("ExtrasFilledCircle").style.display = "inline-block";
}
// function handleLiquorPopover() {
//   document.getElementById("LiquorPopover").style.cssText =
//     "background:red;color:white";
// }
function handleBeerPopover() {
  document.getElementById("BeerPopover").style.cssText =
    "background:red;color:white";
}
function handleRedWinePopover() {
  document.getElementById("RedWinePopover").style.cssText =
    "background:red;color:white";
}
function handleWhiteWinePopover() {
  document.getElementById("WhiteWinePopover").style.cssText =
    "background:red;color:white";
}
function handleSparklingPopover() {
  document.getElementById("SparklingPopover").style.cssText =
    "background:red;color:white";
}
function handleCiderPopover() {
  document.getElementById("CiderPopover").style.cssText =
    "background:red;color:white";
}
function handlePremixPopover() {
  document.getElementById("PremixPopover").style.cssText =
    "background:red;color:white";
}
function handleExtrasPopover() {
  document.getElementById("ExtrasPopover").style.cssText =
    "background:red;color:white";
}

let uniqueCategoryNames = [];
let uniqueSubCategoryNames = [];
const SubCategoriesFetched = {};

function Shop() {
  const [CategoryName, setCategoryName] = useState("Liquor");
  const [SubCategoryName, setSubCategoryName] = useState("SubCategoryLiquor1");
  const [SubCategoryName2, setSubCategoryName2] = useState(
    "SubCategoryLiquor2"
  );
  const [SubCategory, setSubCategory] = useState([]);
  const [iteratableCategories, setIteratableCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/getProduct")
      .then((res) => {
        uniqueCategoryNames = [
          ...new Set(res.data.map((item) => item.category)),
        ];
        uniqueSubCategoryNames = [
          ...new Set(res.data.map((item) => item.subCategory)),
        ];
        uniqueSubCategoryNames.forEach((subCategory) => {
          let array = [];
          res.data.forEach((fethcedProduct) => {
            if (fethcedProduct.subCategory === subCategory) {
              array.push(fethcedProduct);
            }
          });
          SubCategoriesFetched[subCategory] = array;
        });
        setSubCategory(SubCategoriesFetched);
        setIteratableCategories(() => {
          let array = [];
          return array;
        });
let array = [];
        uniqueCategoryNames.map((uniqueCategory) => {
          let arr = uniqueSubCategoryNames.filter((usc) => {
            return usc.toUpperCase().indexOf(uniqueCategory.toUpperCase()) > -1
          })
          array.push({
            [uniqueCategory]: arr
          })
        })
        setIteratableCategories(array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(uniqueCategoryNames);
  console.log(iteratableCategories);
  console.log(uniqueSubCategoryNames);
  console.log(SubCategory);
  //Categories
  const handleLiquorName = () => {
    setCategoryName("liquor");
  };
  const handleBeerName = () => {
    setCategoryName("Beer");
  };
  const handleRedWineName = () => {
    setCategoryName("Red Wine");
  };
  const handleCiderName = () => {
    setCategoryName("Cider");
  };
  const handleWhiteWineName = () => {
    setCategoryName("White Wine");
  };
  const handleSparklingName = () => {
    setCategoryName("Sparkling");
  };
  const handlePremixName = () => {
    setCategoryName("Premix");
  };
  const handleExtrasName = () => {
    setCategoryName("Extras");
  };
  //SubCategory1
  const handleLiquorSub = () => {
    setSubCategoryName("SubCategoryLiquor1");
  };
  const handleBeerSub = () => {
    setSubCategoryName("SubCategoryBeer1");
  };
  const handleRedWineSub = () => {
    setSubCategoryName("SubCategoryRedWine1");
  };
  const handleCiderSub = () => {
    setSubCategoryName("SubCategoryCider1");
  };
  const handleWhiteWineSub = () => {
    setSubCategoryName("SubCategoryWhiteWine1");
  };
  const handleSparklingSub = () => {
    setSubCategoryName("SubCategorySparkling1");
  };
  const handlePremixSub = () => {
    setSubCategoryName("SubCategoryPremix1");
  };
  const handleExtrasSub = () => {
    setSubCategoryName("SubCategoryExtras1");
  };
  //Subcategory2
  const handleLiquorSub2 = () => {
    setSubCategoryName2("SubCategoryLiquor2");
  };
  const handleBeerSub2 = () => {
    setSubCategoryName2("SubCategoryBeer2");
  };
  const handleRedWineSub2 = () => {
    setSubCategoryName2("SubCategoryRedWine2");
  };
  const handleCiderSub2 = () => {
    setSubCategoryName2("SubCategoryCider2");
  };
  const handleWhiteWineSub2 = () => {
    setSubCategoryName2("SubCategoryWhiteWine2");
  };
  const handleSparklingSub2 = () => {
    setSubCategoryName2("SubCategorySparkling2");
  };
  const handlePremixSub2 = () => {
    setSubCategoryName2("SubCategoryPremix2");
  };
  const handleExtrasSub2 = () => {
    setSubCategoryName2("SubCategoryExtras2");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? "simple-popover" : undefined;

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const hideFirstCart = () => {
    document.getElementById("firstCart").style.display = "none";
    document.getElementById("secondCart").style.display = "block";
  };
  const showOrderConfirmed = () => {
    document.getElementById("orderConfirmed").style.display = "block";
    document.getElementById("secondCart").style.display = "none";
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);

  const Subcategory = [
    {
      id: 1,
      Name: "Cognac",
      tag: "liquor",
    },
    {
      id: 2,
      Name: "Bourbon",
      tag: "liquor",
    },
    {
      id: 3,
      Name: "BeerCategory1",
      tag: "Beer",
    },
    {
      id: 4,
      Name: "BeerCategory2",
      tag: "Beer",
    },
    {
      id: 5,
      Name: "RedWineCategory1",
      tag: "RedWine",
    },
    {
      id: 6,
      Name: "RedWineCategory2",
      tag: "RedWine",
    },
    {
      id: 7,
      Name: "WhiteWineCategory1",
      tag: "WhiteWine",
    },
    {
      id: 8,
      Name: "WhiteWineCategory2",
      tag: "WhiteWine",
    },
  ];
  const Category = [
    {
      Name: "Liquor",
      id: 1,
      label: "LiquorPopover",
      // function: handleLiquorPopover, //change color in popover
      function2: handleLiquorName, //ChangeCategoryName
      function3: handleLiquorSub, //ChangeSubcagegory1Name
      function4: handleLiquorSub2, //Change SubCategory2Name
    },
    {
      Name: "Beer",
      id: 2,
      label: "BeerPopover",
      function: handleBeerPopover,
      function2: handleBeerName,
      function3: handleBeerSub, //ChangeSubcagegory1Name
      function4: handleBeerSub2, //Change SubCategory2Name
    },
    {
      Name: "Red Wine",
      id: 3,
      label: "RedWinePopover",
      function: handleRedWinePopover,
      function2: handleRedWineName,
      function3: handleRedWineSub, //ChangeSubcagegory1Name
      function4: handleRedWineSub2, //Change SubCategory2Name
    },
    {
      Name: "White Wine",
      id: 4,
      label: "WhiteWinePopover",
      function: handleWhiteWinePopover,
      function2: handleWhiteWineName,
      function3: handleWhiteWineSub, //ChangeSubcagegory1Name
      function4: handleWhiteWineSub2, //Change SubCategory2Name
    },
    {
      Name: "Sparkling",
      id: 5,
      label: "SparklingPopover",
      function: handleSparklingPopover,
      function2: handleSparklingName,
      function3: handleSparklingSub, //ChangeSubcagegory1Name
      function4: handleSparklingSub2, //Change SubCategory2Name
    },
    {
      Name: "Cider",
      id: 6,
      label: "CiderPopover",
      function: handleCiderPopover,
      function2: handleCiderName,
      function3: handleCiderSub, //ChangeSubcagegory1Name
      function4: handleCiderSub2, //Change SubCategory2Name
    },
    {
      Name: "Premix",
      id: 7,
      label: "PremixPopover",
      function: handlePremixPopover,
      function2: handlePremixName,
      function3: handlePremixSub, //ChangeSubcagegory1Name
      function4: handlePremixSub2, //Change SubCategory2Name
    },
    {
      Name: "Extras",
      id: 8,
      label: "ExtrasPopover",
      function: handleExtrasPopover,
      function2: handleExtrasName,
      function3: handleExtrasSub, //ChangeSubcagegory1Name
      function4: handleExtrasSub2, //Change SubCategory2Name
    },
  ];
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
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

  const handleClose = () => {
    setOpen(false);
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const lists = (search) => (
    <div
      className={clsx(classes.lists, {
        [classes.fullLists]: search === "top" || search === "bottom",
      })}
      role="presentation"
    >
      <List id="orderConfirmed" style={{ display: "none" }}>
        <listItem>
          <Grid
            align="center"
            container
            xs={12}
            style={{ marginTop: "8vh", fontSize: "25px" }}
          >
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <listItemText>Order Confirmed</listItemText>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid container xs={10} style={{ marginTop: "2vh" }}>
                <listItemIcon>
                  <ImageIcon style={{ fontSize: "220px", marginLeft: "3vh" }} />
                </listItemIcon>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid container xs={11} style={{ marginTop: "2vh" }}>
                <listItemText
                  style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    marginLeft: "2vh",
                  }}
                >
                  Your Order has been Confirmed
                </listItemText>
              </Grid>
              <Grid item xs={0} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={2} />
              <Grid
                item
                xs={8}
                align="center"
                style={{
                  marginTop: "32vh",
                  border: "2px solid grey",
                  borderRadius: "25px",
                  paddingBottom: ".5vh",
                  marginLeft: "0vh",
                }}
              >
                <listItemText style={{ fontSize: "20px", fontWeight: "600" }}>
                  <a
                    onClick={handleOpen}
                    style={{ color: "black" }}
                    style={{
                      textDecoration: "none",
                      outline: "none",
                      color: "black",
                    }}
                  >
                    Track Order
                  </a>
                </listItemText>
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
                          <Stepper
                            activeStep={activeStep}
                            orientation="vertical"
                          >
                            {steps.map((label, index) => (
                              <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                  <Typography>
                                    {getStepContent(index)}
                                  </Typography>
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
                                startIcon={
                                  <CloseIcon style={{ color: "red" }} />
                                }
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
              <Grid item xs={2} />
            </Grid>
          </Grid>
        </listItem>
      </List>
      <List id="secondCart" style={{ display: "none" }}>
        <listItem>
          <Grid container xs={12}>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid item xs={10} style={{ marginTop: "2vh" }}>
                <Typography style={{ fontSize: "24px" }}>Checkout</Typography>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid item xs={10} style={{ marginTop: "1vh" }}>
                <Typography style={{ fontSize: "12px", fontWeight: "600" }}>
                  Delivering To
                </Typography>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid item xs={10} style={{ marginTop: "1vh" }}>
                <BootstrapInput
                  id="bootstrap-input"
                  style={{ border: "3px solid grey" }}
                />
              </Grid>
              <Grid item xs={3} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid item xs={10} style={{ marginTop: "1vh" }}>
                <BootstrapInput
                  id="bootstrap-input"
                  placeholder="Add order instructions"
                  style={{ border: "3px solid grey", fontSize: "10px" }}
                />
              </Grid>
              <Grid item xs={3} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid item xs={10} style={{ marginTop: "4vh" }}>
                <select
                  className="form-control"
                  placeholder="Select Payment Method"
                >
                  <option>cash on Delivery</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </Grid>
              <Grid item xs={3} />
            </Grid>
          </Grid>

          <Grid container xs={12}>
            <Grid item xs={1} />
            <Grid item xs={10} style={{ marginTop: "1vh" }}>
              <Card
                className={classes.root}
                style={{ marginTop: "2vh", height: "6vh" }}
              >
                <CardContent style={{ align: "center" }}>
                  <Grid container xs={12}>
                    <Grid
                      container
                      xs={12}
                      align="center"
                      style={{ marginTop: "-4vh" }}
                    >
                      <Grid item xs={1} />
                      <Grid item xs={1}>
                        <ImageIcon style={{ marginTop: "1vh" }} />
                      </Grid>
                      <Grid item xs={1} />
                      <Grid item xs={1} style={{ marginTop: "1vh" }}>
                        <Typography style={{ fontSize: "10px" }}>
                          [Name/Title]
                        </Typography>
                        <Typography style={{ fontSize: "10px" }}>
                          [Subcategory]
                        </Typography>
                      </Grid>
                      <Grid item xs={4} />
                      <Grid item xs={1}>
                        <Typography
                          style={{ fontSize: "12px", marginTop: "1vh" }}
                        >
                          Price
                        </Typography>
                      </Grid>
                      <Grid item xs={1} />
                      <Grid item xs={1}>
                        <DeleteOutlineIcon style={{ marginTop: "1vh" }} />
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card
                className={classes.root}
                style={{ marginTop: "2vh", height: "6vh" }}
              >
                <CardContent>
                  <Grid container xs={12}>
                    <Grid
                      container
                      xs={12}
                      align="center"
                      style={{ marginTop: "-3vh" }}
                    >
                      <Grid item xs={1} />
                      <Grid item xs={1}>
                        <ImageIcon style={{ marginTop: "1vh" }} />
                      </Grid>
                      <Grid item xs={1} />
                      <Grid item xs={1} style={{ marginTop: "1vh" }}>
                        <Typography style={{ fontSize: "10px" }}>
                          [Name/Title]
                        </Typography>
                        <Typography style={{ fontSize: "10px" }}>
                          [Subcategory]
                        </Typography>
                      </Grid>
                      <Grid item xs={4} />
                      <Grid item xs={1}>
                        <Typography
                          style={{ fontSize: "12px", marginTop: "1vh" }}
                        >
                          Price
                        </Typography>
                      </Grid>
                      <Grid item xs={1} />
                      <Grid item xs={1}>
                        <DeleteOutlineIcon style={{ marginTop: "1vh" }} />
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card className={classes.root} style={{ marginTop: "2vh" }}>
                <CardContent>
                  <Grid container xs={12}>
                    <Grid container xs={12} align="center">
                      <Grid item xs={5} align="left">
                        <Typography style={{ fontSize: "13px" }}>
                          Subtotal
                        </Typography>
                        <Typography
                          style={{ fontSize: "13px", marginTop: "1vh" }}
                        >
                          Taxes and Fees
                        </Typography>
                        <Typography
                          style={{ fontSize: "13px", marginTop: "1vh" }}
                        >
                          Delivery
                        </Typography>
                      </Grid>
                      <Grid item xs={2} />
                      <Grid item xs={5} align="right">
                        <Typography style={{ fontSize: "13px" }}>
                          [Subtotal]
                        </Typography>
                        <Typography
                          style={{ fontSize: "13px", marginTop: "1vh" }}
                        >
                          [Taxes and Fees]
                        </Typography>
                        <Typography
                          style={{ fontSize: "13px", marginTop: "1vh" }}
                        >
                          [Delivery]
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
              <Card className={classes.root} style={{ marginTop: "1vh" }}>
                <CardContent>
                  <Grid container xs={12}>
                    <Grid container xs={12} align="center">
                      <Grid item xs={5} align="left">
                        <Typography style={{ fontSize: "13px" }}>
                          Order Total
                        </Typography>
                      </Grid>
                      <Grid item xs={2} />
                      <Grid item xs={5} align="right">
                        <Typography style={{ fontSize: "13px" }}>
                          [Order Total]
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} />

            <Grid
              container
              xs={12}
              align="center"
              style={{ marginTop: "3.5vh" }}
            >
              <Grid item xs={1} />
              <Grid
                item
                xs={10}
                style={{
                  border: "2px solid grey",
                  borderRadius: "15px",
                  color: "white",
                  background: "grey",
                }}
              >
                <Typography>
                  <a onClick={showOrderConfirmed} style={{ color: "white" }}>
                    PLACE ORDER
                  </a>
                </Typography>
              </Grid>
              <Grid xs={2} />
            </Grid>
          </Grid>
        </listItem>
      </List>
      <List style={{ marginTop: "2vh", display: "block" }} id="firstCart">
        <listItem>
          <listItemText
            style={{
              fontSize: "28px",
              fontWeight: "600",
              marginLeft: "4vh",
              paddingTop: "-10vh",
            }}
          >
            Your cart
            <br />
          </listItemText>
        </listItem>

        <Card className={classes.root} style={{ marginTop: "8vh" }}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <ImageIcon style={{ marginTop: "1vh" }} />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <Typography style={{ fontSize: "12px" }}>
                    [Name/Title]
                  </Typography>
                  <Typography style={{ fontSize: "12px" }}>
                    [Subcategory]
                  </Typography>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={1}>
                  <Typography style={{ fontSize: "12px", marginTop: "1vh" }}>
                    Price
                  </Typography>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <DeleteOutlineIcon style={{ marginTop: "1vh" }} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.root} style={{ marginTop: "1vh" }}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <ImageIcon style={{ marginTop: "1vh" }} />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <Typography style={{ fontSize: "12px" }}>
                    [Name/Title]
                  </Typography>
                  <Typography style={{ fontSize: "12px" }}>
                    [Subcategory]
                  </Typography>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={1}>
                  <Typography style={{ fontSize: "12px", marginTop: "1vh" }}>
                    Price
                  </Typography>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <DeleteOutlineIcon style={{ marginTop: "1vh" }} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.root} style={{ marginTop: "4vh" }}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
                <Grid item xs={5} align="left">
                  <Typography style={{ fontSize: "13px" }}>Subtotal</Typography>
                  <Typography style={{ fontSize: "13px", marginTop: "1vh" }}>
                    Taxes and Fees
                  </Typography>
                  <Typography style={{ fontSize: "13px", marginTop: "1vh" }}>
                    Delivery
                  </Typography>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={5} align="right">
                  <Typography style={{ fontSize: "13px" }}>
                    [Subtotal]
                  </Typography>
                  <Typography style={{ fontSize: "13px", marginTop: "1vh" }}>
                    [Taxes and Fees]
                  </Typography>
                  <Typography style={{ fontSize: "13px", marginTop: "1vh" }}>
                    [Delivery]
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className={classes.root} style={{ marginTop: "1vh" }}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
                <Grid item xs={5} align="left">
                  <Typography style={{ fontSize: "13px" }}>
                    Order Total
                  </Typography>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={5} align="right">
                  <Typography style={{ fontSize: "13px" }}>
                    [Order Total]
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid container xs={12} align="center" style={{ marginTop: "6vh" }}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Typography
              style={{ border: "2px solid grey", borderRadius: "15px" }}
            >
              <a style={{ color: "black" }}>APPLY PROMO</a>
            </Typography>
            <Typography
              style={{
                marginTop: "3vh",
                border: "2px solid grey",
                color: "white",
                background: "grey",
                borderRadius: "15px",
              }}
            >
              <a onClick={hideFirstCart} style={{ color: "white" }}>
                CHECKOUT
              </a>
            </Typography>
          </Grid>
          <Grid container xs={1} />
        </Grid>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Carousel autoplay>
            <div>
              <h3 style={{ height: "35vh" }}>1</h3>
            </div>
            <div>
              <h3 style={{ height: "35vh" }}>2</h3>
            </div>
            <div>
              <h3 style={{ height: "35vh" }}>3</h3>
            </div>
            <div>
              <h3 style={{ height: "35vh" }}>4</h3>
            </div>
          </Carousel>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Grid container xs={12} align="center">
            <Grid item xs={2}></Grid>
            <Grid item xs={10} />
          </Grid>
          <Grid container xs={12} align="left">
            <Grid item xs={1} />
            <Grid
              container
              xs={10}
              style={{ marginLeft: "-10vh" }}
              justify="space-around"
            >
              <Grid item xs={1} onClick={handleLiquor}>
                <RadioButtonUncheckedIcon
                  onClick={() => {
                    // list.function(); //Popover Dropdown Color change on selected
                    handleLiquorName(); //Category Name change
                    handleLiquorSub(); //Subcategory 1 Name change
                    handleLiquorSub2(); //Subcategory 2 Name change
                  }}
                  id="LiquorCircle"
                  className={classes.CircleIcon}
                />
                <FiberManualRecordIcon
                  id="LiquorFilledCircle"
                  className={classes.FilledCircle}
                />
              </Grid>
              <Grid item xs={1} onClick={handleBeer}>
                <RadioButtonUncheckedIcon
                  id="BeerCircle"
                  className={classes.CircleIcon}
                  onClick={() => {
                    // list.function(); //Popover Dropdown Color change on selected
                    handleBeerName(); //Category Name change
                    handleBeerSub(); //Subcategory 1 Name change
                    handleBeerSub2(); //Subcategory 2 Name change
                  }}
                />
                <FiberManualRecordIcon
                  id="BeerFilledCircle"
                  className={classes.FilledCircle}
                />
              </Grid>
              <Grid item xs={1} onClick={handleRedWine}>
                <RadioButtonUncheckedIcon
                  id="RedWineCircle"
                  className={classes.CircleIcon}
                  onClick={() => {
                    // list.function(); //Popover Dropdown Color change on selected
                    handleRedWineName(); //Category Name change
                    handleRedWineSub(); //Subcategory 1 Name change
                    handleRedWineSub2(); //Subcategory 2 Name change
                  }}
                />
                <FiberManualRecordIcon
                  id="RedWineFilledCircle"
                  className={classes.FilledCircle}
                />
              </Grid>
              <Grid item xs={1} onClick={handleWhiteWine}>
                <RadioButtonUncheckedIcon
                  id="WhiteWineCircle"
                  className={classes.CircleIcon}
                  onClick={() => {
                    // list.function(); //Popover Dropdown Color change on selected
                    handleWhiteWineName(); //Category Name change
                    handleWhiteWineSub(); //Subcategory 1 Name change
                    handleWhiteWineSub2(); //Subcategory 2 Name change
                  }}
                />
                <FiberManualRecordIcon
                  id="WhiteWineFilledCircle"
                  className={classes.FilledCircle}
                />
              </Grid>
              <Grid item xs={1} onClick={handleSparkling}>
                <RadioButtonUncheckedIcon
                  id="SparklingCircle"
                  className={classes.CircleIcon}
                  onClick={() => {
                    // list.function(); //Popover Dropdown Color change on selected
                    handleSparklingName(); //Category Name change
                    handleSparklingSub(); //Subcategory 1 Name change
                    handleSparklingSub2(); //Subcategory 2 Name change
                  }}
                />
                <FiberManualRecordIcon
                  id="SparklingFilledCircle"
                  className={classes.FilledCircle}
                />
              </Grid>
              <Grid item xs={1} onClick={handleCider}>
                <RadioButtonUncheckedIcon
                  id="CiderCircle"
                  className={classes.CircleIcon}
                  onClick={() => {
                    // list.function(); //Popover Dropdown Color change on selected
                    handleCiderName(); //Category Name change
                    handleCiderSub(); //Subcategory 1 Name change
                    handleCiderSub2(); //Subcategory 2 Name change
                  }}
                />
                <FiberManualRecordIcon
                  id="CiderFilledCircle"
                  className={classes.FilledCircle}
                />
              </Grid>
              <Grid item xs={1} onClick={handlePremix}>
                <RadioButtonUncheckedIcon
                  id="PremixCircle"
                  className={classes.CircleIcon}
                  onClick={() => {
                    // list.function(); //Popover Dropdown Color change on selected
                    handlePremixName(); //Category Name change
                    handlePremixSub(); //Subcategory 1 Name change
                    handlePremixSub2(); //Subcategory 2 Name change
                  }}
                />
                <FiberManualRecordIcon
                  id="PremixFilledCircle"
                  className={classes.FilledCircle}
                />
              </Grid>
              <Grid item xs={1} onClick={handleExtras}>
                <RadioButtonUncheckedIcon
                  id="ExtrasCircle"
                  className={classes.CircleIcon}
                  onClick={() => {
                    // list.function(); //Popover Dropdown Color change on selected
                    handleExtrasName(); //Category Name change
                    handleExtrasSub(); //Subcategory 1 Name change
                    handleExtrasSub2(); //Subcategory 2 Name change
                  }}
                />
                <FiberManualRecordIcon
                  id="ExtrasFilledCircle"
                  className={classes.FilledCircle}
                />
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid
                container
                xs={10}
                align="center"
                style={{ marginLeft: "-11.5vh" }}
                justify="space-around"
              >
                {Drinks.map((drink) => {
                  return (
                    <Grid item xs={1}>
                      <Typography>{drink}</Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Grid container xs={6}>
            <Grid item xs={2} />
            <Grid container xs={2} align="left" style={{ marginLeft: "-6vh" }}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={handleClick}
                  className={classes.HeaderBtn}
                >
                  Category
                </Button>
                <Popover
                  id={id}
                  style={{ textAlign: "center" }}
                  open={openPopover}
                  anchorEl={anchorEl}
                  onClose={handleClosePopover}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Grid container xs={12}>
                    {Category.map((list) => (
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          id={list.label}
                          onClick={() => {
                            // list.function(); //Popover Dropdown Color change on selected
                            list.function2(); //Category Name change
                            list.function3(); //Subcategory 1 Name change
                            list.function4(); //Subcategory 2 Name change
                          }}
                          key={list.id}
                          className={classes.PopoverBtn}
                        >
                          {list.Name}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Popover>
              </Grid>
            </Grid>
            <Grid item xs={3} style={{ paddingLeft: "2vh" }}>
              <Button variant="contained" className={classes.HeaderBtn}>
                Subcategory
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={8} />
        </CardContent>
      </Card>
      <Grid container xs={12} align="left">
        <Grid item xs={1} />
        <Grid item xs={2} style={{ marginTop: "4vh" }}>
          <Typography style={{ fontsize: "85px", fontWeight: "700" }}>
            <h2>
              <b>{CategoryName}</b>
            </h2>
          </Typography>
        </Grid>
        <Grid item xs={10} />
      </Grid>
      <Grid container xs={12} align="left">
        <Grid item xs={1} />
        <Grid item xs={2} style={{ marginTop: "4vh" }}>
          <Typography style={{ fontsize: "85px", fontWeight: "700" }}>
            <h5>
              <b>{SubCategoryName}</b>
            </h5>
          </Typography>
        </Grid>
        <Grid item xs={2} />
      </Grid>
      <Card>
        <CardContent align="center">
          <Grid container xs={12}>
            <Grid item xs={1} />
            <Grid
              container={10}
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              {/* {DrinkCognac.map((cognac) => {
                return (
                  <Card>
                    <CardContent align="center">
                      <img
                        src={require("../../../../assets/beer.jpg")}
                        width="200"
                      />{" "}
                      <Typography style={{ marginTop: "3vh" }}>
                        {cognac}
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          background: "red",
                          color: "white",
                          marginTop: "2vh",
                        }}
                      >
                        $56.12
                      </Button>
                    </CardContent>
                  </Card>
                );
              })} */}
              {!isEmpty(SubCategory) &&
                SubCategory[SubCategoryName].map((cognac) => {
                  return (
                    <Card key={cognac.id}>
                      <CardContent align="center">
                        <img src={cognac.imageID} width="200" />{" "}
                        <Typography style={{ marginTop: "3vh" }}>
                          {cognac.title}
                        </Typography>
                        <Button
                          variant="contained"
                          style={{
                            background: "red",
                            color: "white",
                            marginTop: "2vh",
                          }}
                        >
                          {`$${cognac.price}`}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
            </Grid>
            <Grid item xs={1} />
          </Grid>

          <Grid container xs={12} align="left" style={{ marginLeft: "-1vh" }}>
            <Grid item xs={1} />
            <Grid item xs={2} style={{ marginTop: "8vh" }}>
              <Typography style={{ fontsize: "85px", fontWeight: "700" }}>
                <h5>
                  <b>{SubCategoryName2}</b>
                </h5>
              </Typography>
            </Grid>
            <Grid item xs={2} />
          </Grid>

          <Grid container xs={12}>
            <div
              style={{
                width: "100%",
                opacity: ".3",
                marginBottom: "2vh",
                marginTop: "1vh",
                backgroundColor: "silver",
                height: ".7px",
              }}
            />
            <Grid item xs={1} />
            <Grid
              container={10}
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              {/* {DrinkBourbon.map((bourbon) => {
                return (
                  <Card>
                    <CardContent align="center">
                      <img
                        src={require("../../../../assets/beer.jpg")}
                        width="200"
                      />{" "}
                      <Typography style={{ marginTop: "3vh" }}>
                        {bourbon}
                      </Typography>
                      <Button
                        variant="contained"
                        style={{
                          background: "red",
                          color: "white",
                          marginTop: "2vh",
                        }}
                      >
                        $56.12
                      </Button>
                    </CardContent>
                  </Card>
                );
              })} */}
              {!isEmpty(SubCategory) &&
                SubCategory[SubCategoryName2].map((bourbon) => {
                  return (
                    <Card key={bourbon.id}>
                      <CardContent align="center">
                        <img src={bourbon.imageID} width="200" />{" "}
                        <Typography style={{ marginTop: "3vh" }}>
                          {bourbon.title}
                        </Typography>
                        <Button
                          variant="contained"
                          style={{
                            background: "red",
                            color: "white",
                            marginTop: "2vh",
                          }}
                        >
                          {`$${bourbon.price}`}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
Shop.propTypes = {
  className: PropTypes.string,
};

export default Shop;
