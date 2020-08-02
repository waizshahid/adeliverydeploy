import React, { useState, forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import ImageIcon from "@material-ui/icons/Image";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import "../../../../App.css";
import { NavLink as RouterLink } from 'react-router-dom';

import ListItemText from "@material-ui/core/ListItemText";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import {
  InputBase,
  RadioGroup,
  Radio,
  Checkbox,
  Link,
  FormControlLabel,
  Select,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import {
  fade,
  //ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";

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
  button: {
    color: '#777777',
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
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

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const Topbar = props => {

  const sideList = [
    {
      title: 'Home',
      href: '/Main',
    },
    {
      title: 'Shop',
      href: '/shop',
    },
    {
      title: 'Account Settings',
      href: '/settings',
    }
  ];

  const [open, setOpen] = React.useState(false);
  const showOrderConfirmed = () => {
    document.getElementById('orderConfirmed').style.display = 'block';
    document.getElementById('secondCart').style.display = 'none';
}
const hideFirstCart = () => {
  document.getElementById("firstCart").style.display = "none";
  document.getElementById('secondCart').style.display = 'block';
};
const [state, setState] = React.useState({

  top: false,
  left: false,
  bottom: false,
  right: false,
});
  const classes = useStyles();
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <List style={{ marginTop: "12vh" }}>
        {sideList.map((text) => (
          <ListItem key={text}>
            <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={text.href}
            >
              <ListItemIcon>
                  <FiberManualRecordIcon
                    style={{ width: "2vh", color: "black", marginLeft: "2vh" }}
                  />
              </ListItemIcon>
              <ListItemText
                primary={text.title}
                classes={{ primary: classes.listItemText }}
              />
            </Button>
          </ListItem>
        ))}
      </List>
      <div
        style={{
          background: "grey",
          position: "absolute",
          width: "100%",
          bottom: "0",
        }}
      >
        <List style={{ bottom: "0" }}>
          {["Sign in", "Create your Account"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText
                primary={text}
                classes={{ primary: classes.listItemText1 }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
  const handleOpen = () => {
    setOpen(true);
  };
  const lists = (search) => (
    <div
      className={clsx(classes.lists, {
        [classes.fullLists]: search === "top" || search === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(search, false)}
    >
        
      <List id='orderConfirmed' style={{display:'none'}}>
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
                  <ImageIcon style={{ fontSize: "220px",marginLeft:'3vh' }} />
                </listItemIcon>
              </Grid>
              <Grid item xs={1} />
            </Grid>
            <Grid container xs={12}>
              <Grid item xs={1} />
              <Grid container xs={11} style={{ marginTop: "2vh" }}>
                <listItemText style={{ fontSize: "16px", fontWeight: "700",marginLeft:'2vh' }}>
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
                  marginLeft:'0vh'
                }}
              >
                <listItemText style={{ fontSize: "20px", fontWeight: "600"}}>
                  <a onClick={handleOpen} style={{color:'black'}}
                    
                    style={{
                      textDecoration: "none",
                      outline: "none",
                      color: "black"
                    }}
                  >
                    Track Order
                  </a>
                </listItemText>
              </Grid>
              <Grid item xs={2} />
            </Grid>
          </Grid>
        </listItem>
      </List>
    <List id='secondCart' style={{display:'none'}}>
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
            
      <Card className={classes.root} style={{marginTop:'2vh',height:'6vh'}}>
        <CardContent style={{align:'center'}}>
          <Grid container xs={12}>
            <Grid container xs={12} align="center" style={{marginTop:'-4vh'}}>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <ImageIcon style={{marginTop:'1vh'}} />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1} style={{marginTop:'1vh'}}>
                <Typography style={{ fontSize: "10px" }}>
                  [Name/Title]
                </Typography>
                <Typography style={{ fontSize: "10px" }}>
                  [Subcategory]
                </Typography>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={1}>
                <Typography style={{ fontSize: "12px",marginTop:'1vh' }}>Price</Typography>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={1}>
                <DeleteOutlineIcon style={{marginTop:'1vh'}} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card> 
      <Card className={classes.root} style={{marginTop:'2vh',height:'6vh'}}>
        <CardContent>
          <Grid container xs={12}>
            <Grid container xs={12} align="center" style={{marginTop:'-3vh'}}>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <ImageIcon style={{marginTop:'1vh'}} />
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1} style={{marginTop:'1vh'}}>
                <Typography style={{ fontSize: "10px" }}>
                  [Name/Title]
                </Typography>
                <Typography style={{ fontSize: "10px" }}>
                  [Subcategory]
                </Typography>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={1}>
                <Typography style={{ fontSize: "12px",marginTop:'1vh' }}>Price</Typography>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={1}>
                <DeleteOutlineIcon style={{marginTop:'1vh'}} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
      <Card className={classes.root} style={{marginTop:'2vh'}}>
        <CardContent>
          <Grid container xs={12}>
            <Grid container xs={12} align="center">
            
            <Grid item xs={5} align='left'>
                <Typography style={{fontSize:'13px'}}>Subtotal</Typography>
                <Typography style={{fontSize:'13px',marginTop:'1vh'}}>Taxes and Fees</Typography>
                <Typography style={{fontSize:'13px',marginTop:'1vh'}}>Delivery</Typography>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={5} align='right'>
              <Typography style={{fontSize:'13px'}}>[Subtotal]</Typography>
              <Typography style={{fontSize:'13px',marginTop:'1vh'}}>[Taxes and Fees]</Typography>
              <Typography style={{fontSize:'13px',marginTop:'1vh'}}>[Delivery]</Typography>
                  
            </Grid>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
      <Card className={classes.root} style={{marginTop:'1vh'}}>
        <CardContent>
          <Grid container xs={12}>
            <Grid container xs={12} align="center">
            
            <Grid item xs={5} align='left'>
                <Typography style={{fontSize:'13px'}}>Order Total</Typography>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={5} align='right'>
              <Typography style={{fontSize:'13px'}}>[Order Total]</Typography>
              
            </Grid>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
          </Grid>
          <Grid item xs={3} />
          
          <Grid container xs={12} align='center' style={{marginTop:"3.5vh"}}>
              <Grid item xs={1}/>
              <Grid item xs={10} style={{border:'2px solid grey', borderRadius:'15px', color:'white',background:'grey'}}>
                <Typography><a onClick={showOrderConfirmed} style={{color:'white'}}>PLACE ORDER</a></Typography>
              </Grid>
              <Grid xs={2}/>
            </Grid>
        </Grid>
      </listItem>
    </List>
      <List style={{ marginTop: "2vh", display:'block' }} id='firstCart'>
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
        
        <Card className={classes.root} style={{marginTop:'8vh'}}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <ImageIcon style={{marginTop:'1vh'}} />
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
                  <Typography style={{ fontSize: "12px",marginTop:'1vh' }}>Price</Typography>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                  <DeleteOutlineIcon style={{marginTop:'1vh'}} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
        <Card className={classes.root} style={{marginTop:'1vh'}}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
                <Grid item xs={1} />
                <Grid item xs={1}>
                  <ImageIcon style={{marginTop:'1vh'}} />
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
                  <Typography style={{ fontSize: "12px",marginTop:'1vh' }}>Price</Typography>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                  <DeleteOutlineIcon style={{marginTop:'1vh'}} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
        <Card className={classes.root} style={{marginTop:'4vh'}}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
              
              <Grid item xs={5} align='left'>
                  <Typography style={{fontSize:'13px'}}>Subtotal</Typography>
                  <Typography style={{fontSize:'13px',marginTop:'1vh'}}>Taxes and Fees</Typography>
                  <Typography style={{fontSize:'13px',marginTop:'1vh'}}>Delivery</Typography>
              </Grid>
              <Grid item xs={2}/>
              <Grid item xs={5} align='right'>
                <Typography style={{fontSize:'13px'}}>[Subtotal]</Typography>
                <Typography style={{fontSize:'13px',marginTop:'1vh'}}>[Taxes and Fees]</Typography>
                <Typography style={{fontSize:'13px',marginTop:'1vh'}}>[Delivery]</Typography>
                    
              </Grid>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
        <Card className={classes.root} style={{marginTop:'1vh'}}>
          <CardContent>
            <Grid container xs={12}>
              <Grid container xs={12} align="center">
              
              <Grid item xs={5} align='left'>
                  <Typography style={{fontSize:'13px'}}>Order Total</Typography>
              </Grid>
              <Grid item xs={2}/>
              <Grid item xs={5} align='right'>
                <Typography style={{fontSize:'13px'}}>[Order Total]</Typography>
                
              </Grid>
              </Grid>
            </Grid>
          </CardContent>
          
        </Card>
        <Grid container xs={12} align='center' style={{marginTop:'6vh'}}>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Typography style={{border:'2px solid grey', borderRadius:'15px'}}><a style={{color:'black'}}>APPLY PROMO</a></Typography>
                <Typography style={{marginTop:'3vh',border:'2px solid grey',color:'white',background:'grey', borderRadius:'15px'}}><a onClick={hideFirstCart} style={{color:'white'}}>CHECKOUT</a></Typography>
            </Grid>
            <Grid container xs={1}/>
        </Grid>
      </List>
    </div>
  );
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  

  return (
    <AppBar position="sticky">
        <Toolbar>
          <Grid container xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={3} sm={4} md={5} lg={5}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
                <div>
                  {["left"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button
                        onClick={toggleDrawer(anchor, true)}
                        style={{
                          position: "absolute",
                          top: "5%",
                          left: "0%",
                          opacity: "0",
                        }}
                      >
                        {anchor}
                      </Button>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </IconButton>
            </Grid>
            <Grid
              container
              xs={6}
              sm={5}
              md={3}
              lg={2}
              justify="space-Around"
              style={{ marginTop: "2vh" }}
            >
              <Grid item xs={2} sm={2} md={2} lg={2}>
                <LocationOnIcon style={{ width: "15px", marginLeft: "1vh" }} />
              </Grid>
              <Grid item xs={10} sm={10} md={10} lg={10} style={{marginTop:'-.3vh'}}>
                <Typography style={{ fontSize: "11px", marginTop: ".7vh",color:'white' }}>
                  Please Enter your Delivery address
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={4} />
            <Grid item lg={1} align="right">
              <IconButton>
                <ShoppingCartOutlinedIcon style={{ color: "white",align:'right' }} />

                <div>
                  {["right"].map((search) => (
                    <React.Fragment key={search}>
                      <Button
                        onClick={toggleDrawer(search, true)}
                        style={{
                          position: "absolute",
                          top: "5%",
                          left: "0%",
                          opacity: "0",
                        }}
                      >
                        {search}
                      </Button>
                      <Drawer
                        anchor={search}
                        open={state[search]}
                        onClose={toggleDrawer(search, false)}
                      >
                        {lists(search)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,

};

export default Topbar;

