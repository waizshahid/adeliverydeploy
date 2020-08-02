import React from "react";
import { useState } from 'react';

import ModalSignIn from "./ModalSignIn"
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";


import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

import {PersonOutline, ShoppingCartOutlined} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import '../../../../App.css';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  
    
  },
  rootModal: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
      align: "center",

      borderRadius: 4,

    }
  },
  multilineColor: {
    color: "white"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justify: "center",

    align: "center"
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  drawerPaper: {
    width: '100%',
  },
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '100%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '30vh',
    [theme.breakpoints.up('sm')]: {
      width: '30vh',
      '&:focus': {
        width: '30vh',
      },
    },
  },
  control: {
    padding: theme.spacing(2),
  },
  control2: {
    margin:theme.spacing(1),
  },
  fullList: {
    width: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    height: 40,
    fontSize: 13,
    color: "#4d44a2",
    fontSize: '12px',
    fontWeight: "800",
    marginTop: "0vh",
    paddingBottom: "0vh"
  },
  listItemText:{
    fontSize:'22px',//Insert your required size
    color: '#281e8f',
    fontWeight: '600'
  },
  
  listItemText1:{
    fontSize:'15px',//Insert your required size
    color: '#281e8f'
  },
  
  listItemText2:{
    fontSize:'24px',//Insert your required size
    border: '2px solid black',
    borderRadius: '15px',
  },
  
  listItemText3:{
    fontSize:'24px',//Insert your required size
    border: '2px solid black',
    borderRadius: '12px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  
}));

const Topbar = props => {
  
  
  const classes = useStyles();
  const { className, ...rest } = props;
  const [open1, setOpen1] = React.useState(false);

 const onOpenModal = () => {
    setOpen1({ open1: true });
  };

  const onCloseModal = () => {
    setOpen1({ open1: false });
  };

  const [state, setState] = React.useState({
    
    left: false,
    
  });
  const [state1, setState1] = React.useState({
    top: false,
    
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const toggleSearch = (search, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [search]: open });
  };
  const lists = (search) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: search === 'top' || search === 'bottom',
      })}
      role="presentation"
      
      
    >
      <List style={{marginTop: '10vh'}}>
         
          
            <ListItemText> 
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <Grid container xs={12} sm={12}>
                    <Grid item xs={1} sm={1}>
                      <SearchIcon style={{color: '#281e8f',paddingTop:'1vh'}} />
                    </Grid>

  
                  </Grid>
                </div>
                <Grid item xs={5} sm={5}>
                <InputBase
                              
                  placeholder="What are you looking for?"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
                </Grid>
              </div>
              <Grid item xs={1} sm={1}>
              <ListItemIcon>
                    <div onClick={toggleDrawer(search, false)}>     
                  <CloseIcon style={{color: '#281e8f',position: 'absolute', left:'90%',top: '20%' }}/> 
                  </div>
                  </ListItemIcon>
              </Grid>
            </ListItemText>
          
        
      </List>
    </div>
  );
 
  const list = anchor => (
    <div
    
      className={clsx(classes.lists, {
        [classes.fullList]: anchor === "left" || anchor === "right"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ textAlign: "center", marginTop: '14vh' }}>
        {["Shop Products", "Shop By Brands", "Shop Deals", "Blog"].map(Typography => (
          <ListItem button key={Typography}>
            <Grid
              container
              xs={12}
              sm={12}
              align="center"
              style={{ marginTop: "2vh" }}
            >
              <Grid item xs={3} />
              <Grid item xs={6}>
                <ListItemText primary={Typography} classes={{ primary: classes.listItemText }} />
              </Grid>
              <Grid item xs={3} />
            </Grid>
          </ListItem>
        ))}
      </List>

      <List style={{marginTop: '10vh'}}>
        {["Hey there stranger!"].map((text) => (
          <ListItem button key={text}>
            <Grid
              container
              xs={12}
              sm={12}
              align="center"
              style={{ marginTop: "0vh",marginBottom: '2vh' }}
            >
              <Grid item xs={3} />
              <Grid item xs={6}>
                <ListItemText primary={text} classes={{ primary: classes.listItemText }} />
              </Grid>
              <Grid item xs={3} />
            </Grid>
          </ListItem>
        ))}
      </List>
      <List>
        {["For the best experience, sign in or create an account"].map(
          (text, index) => (
            <ListItem button key={text}>
              <Grid
                container
                xs={12}
                sm={12}
                align="center"
                style={{ fontSize: "10px", marginTop:'-8.5vh' }}
              >
                <Grid item xs={1} style={{ fontSize: "10px" }} />
                <Grid item xs={10} style={{ fontSize: "10px" }}>
                  <ListItemText
                    style={{ fontSize: "10px" }}
                    classes={{ primary: classes.listItemText1 }}
                    primary={text}
                  />
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </ListItem>
          )
        )}
      </List>
      <List>
        {["Sign in"].map((text, index) => (
          <ListItem button key={text}>
            <Grid
              container
              xs={12}
              sm={12}
              align="center"
              style={{ marginTop: "-4vh" }}
            >
              <Grid item xs={1} sm={3} />
              <Grid container xs={10} sm={6} style={{marginLeft:'2vh'}}>
                <Grid item xs={5}>
                  <ListItemText
                    primary={text}
                    style={{ border: "2px solid black",color: '#4040e5', fontWeight: '800', borderRadius: "15px", paddingTop:'.5vh',paddingBottom: '.5vh' }}
                  />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={6}>
                  <ListItemText
                    style={{ border: "2px solid black",color: '#4040e5', fontWeight: '800', borderRadius: "15px", paddingTop:'.5vh',paddingBottom: '.5vh' }}
                  >
                    Create an account
                  </ListItemText>
                </Grid>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const [auth, setAuth] = React.useState(true);
  const [spacing, setSpacing] = React.useState(2);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const handleChanger = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const open = Boolean(anchorEl);
  const bull = <span className={classes.bullet}>•</span>;
  

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div className={classes.root}>
      <AppBar color="white" position='fixed' id='largeAppBar'>
        <Toolbar>
          <Grid
            xs={12}
            md={12}
            lg={12}
            container
            spacing={2}
            textAlign="center"
            style={{ marginTop: "1vh"}}
          >
            
            <Grid item      xs={4} md={3} lg={4}  />
            <Grid container xs={5} md={6} lg={5} align='center'>
              <Grid item    xs={3} md={3} lg={3}>
                <Typography variant="h6" className={classes.title}>
                  Shop Products
                </Typography>
              </Grid>
              <Grid item xs={3} md={3} lg={3}>
                <Typography variant="h6" className={classes.title}>
                  Shop By Brands
                </Typography>
              </Grid>
              <Grid item xs={3} md={3} lg={3}>
                <Typography variant="h6" className={classes.title}>
                  Shop Deals
                </Typography>
              </Grid>
              <Grid item xs={3} md={2} lg={2}>
                <Typography variant="h6" className={classes.title}>
                  Blog
                </Typography>
              </Grid>
            </Grid>
              <Grid item xs={1} md={0} lg={1} />
            {auth && (
              
                  <Grid container xs={2} md={2}lg={2} spacing={6} align='center'>               
                  <Grid item      xs={3} md={2}lg={3}>
                    <ModalSignIn/>
                  </Grid>
                  <Grid item xs={3} md={2} lg={3}>
                    <SearchIcon
                      style={{
                        color: "#4d44a2",
                        marginTop:'0vh',
                        fontSize: "25px"
                      }}
                    />
                  </Grid>
                  <Grid item xs={3} md={2} lg={3}>
                    <ShoppingCartOutlined
                      style={{
                        color: "#4d44a2",
                        fontSize: "25px",
                        marginTop: "0vh"
                      }}
                    />
                  </Grid>
                </Grid>
              
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" color="white" id='smallNavBar'>
        <Toolbar>
          <Grid
          alignItems="center"
            xs={12}
            sm={12}
            container
            spacing={2}
            
            style={{ marginTop: "1vh"}}
          >
                    
              <Grid item xs={2} sm={2} style={{marginTop: '-1vh'}}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon style={{position: 'absolute', left: '2vh'}} />
                  <div>
      {['..'].map((anchor) => (
        <React.Fragment key={anchor} style={{position: 'absolute',left: '-2vh', width:'100%' }}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
                     classes={{
                      paper: classes.drawerPaper,
                    }}
            anchor={anchor}
            open={state[anchor]}
            
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
                </IconButton>
              </Grid>
              <Grid item xs={9} sm={9}/>
  
            {auth && (
                  <Grid item xs={1} sm={1} style={{marginTop: '.4vh', textAlign: 'center'}}>
                    <SearchIcon
                      style={{
                        position: 'absolute', left: '89%',
                        color: "#4d44a2",
                        marginTop:'0vh',
                        fontSize: "25px",
                        
                      }}
                      textAlign='center'
                    />
                    <div>
      {['.'].map((search) => (
        <React.Fragment key={search} style={{position: 'fixed',left: '2vh', width:'100%' }}>
          <Button onClick={toggleDrawer(search, true)}>{search}</Button>
          <SwipeableDrawer
                     classes={{
                      paper: classes.drawerPaper,
                    }}
            anchor={search}
            open={state[search]}
            onClose={toggleDrawer(search, false)}
            onOpen={toggleDrawer(search, true)}
          >
            {lists(search)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
                  </Grid>
              
            )}
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid container xs={12} sm={12} md={12} lg={12} spacing={1} style={{
          
          border: "2px #4040e5 solid",
          background:'#4040e5',
          height: "18vh",
          width: '100%',
          position: "fixed"          
        }}
      >
        <Grid item xs={3} sm={4} md={5} lg={5}/>
        <Grid container xs={9} sm={8} md={4} lg={6}>
          <Grid item xs={1} sm={1} md={1} lg={1} align='center'>
             <LocationSearchingIcon className={classes.control1}
              style={{ color: "white", marginTop: '12.5vh', }}
            /> 
            </Grid>
          <Grid item xs={11} sm={11} md={11} lg={11} align='left'>
          <Typography className={classes.control1} style={{ color: "white", marginTop: '12.8vh' }}>
            Please Set Your Location
          </Typography>
        </Grid>
        <Grid item xs={5} md={5} lg={3}/>
      </Grid>
    </Grid>
          </div> 
    
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
