
import React from "react";
import { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

import Typography from "@material-ui/core/Typography";
import {PersonOutline, ShoppingCartOutlined} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import '../../../../App.css';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from "@material-ui/core/Grid";
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
    
    bottom:0,
    
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

const Footer = props => {
  const classes = useStyles();
  const { className, ...rest } = props;

    
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
                <Grid>
           <div id="box" style={{marginTop: '30vh'}}>
        <Grid container xs={12} lg={12} md={12} spacing={2}>
          <Grid item lg={1} md={1} />
          <Grid item lg={1} md={1}>
            <Typography
              style={{
                marginTop: "6vh",
                fontSize: "14px",
                color: "#281e8f",
                fontWeight: "600",
                fontFamily: "sans-serif",
                marginLeft: "-10vh"
              }}
            >
              Follow Us
            </Typography>
          </Grid>
          <Grid item lg={2} md={2} />

          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "6vh",
                fontSize: "14px",
                color: "#281e8f",
                fontWeight: "600",
                fontFamily: "sans-serif"
              }}
            >
              Legal
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "6vh",
                fontSize: "14px",
                color: "#281e8f",
                fontWeight: "600",
                fontFamily: "sans-serif"
              }}
            >
              Partners
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "6vh",
                fontSize: "14px",
                color: "#281e8f",
                fontWeight: "600",
                fontFamily: "sans-serif"
              }}
            >
              greenrush
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "6vh",
                fontSize: "14px",
                color: "#281e8f",
                fontWeight: "600",
                fontFamily: "sans-serif"
              }}
            >
              Cities
            </Typography>
          </Grid>
          <Grid item lg={1} md={1} />
          <Grid container lg={3} md={3}>
            <Grid item lg={2} md={2}>
              <FacebookIcon
                style={{
                  color: "blue",
                  width: "50px",
                  height: "50px",
                  marginLeft: "-10vh"
                }}
              />
            </Grid>
            <Grid item lg={2} md={2}>
              <TwitterIcon
                style={{
                  color: "blue",
                  width: "50px",
                  height: "50px",
                  marginLeft: "-10vh"
                }}
              />
            </Grid>
            <Grid item lg={2} md={2}>
              <InstagramIcon
                style={{
                  color: "blue",
                  width: "50px",
                  height: "50px",
                  marginLeft: "-10vh"
                }}
              />
            </Grid>
            <Grid item lg={2} md={2}>
              <YouTubeIcon
                style={{
                  color: "blue",
                  width: "50px",
                  height: "50px",
                  marginLeft: "-10vh"
                }}
              />
            </Grid>
          </Grid>

          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Terms & Conditions
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            `{" "}
            <Typography
              style={{
                marginTop: "-.5vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Dispensaries
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              San Francisco
            </Typography>
          </Grid>

          <Grid item lg={1} md={1} />
          <Grid item lg={1} md={1} />
          <Grid item lg={2} md={2} />

          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            `{" "}
            <Typography
              style={{
                marginTop: "-.5vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              BudDrop
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Careers
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Oakland
            </Typography>
          </Grid>

          <Grid item lg={1} md={1} spacing={2} />
          <Grid item lg={3} md={3}>
            <Typography
              style={{
                fontSize: "14px",
                color: "#281e8f",
                fontWeight: "800",
                marginLeft: "-10vh"
              }}
            >
              How can we help?
            </Typography>
          </Grid>

          <Grid item lg={2} md={2} />

          <Grid item lg={2} md={2}>
            `{" "}
            <Typography
              style={{
                marginTop: "-0.5vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Become A Driver
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Press
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              San Diego
            </Typography>
          </Grid>

          <Grid item lg={2} md={2}>
            <Typography
              align="center"
              style={{
                marginLeft: "6vh",
                marginRight: "-0vh",
                border: "2px solid 	#4040e5",
                paddingTop: "2vh",
                paddingBottom: "2vh",
                borderRadius: "30px",
                backgroundColor: "	#4040e5",
                color: "white",
                fontSize: "18px",
                fontWeight: "600"
              }}
            >
              Chat
            </Typography>
          </Grid>
          <Grid item lg={2} md={2} />

          <Grid item lg={2} md={2} />
          <Grid item lg={2} md={2} />
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Become An Ambassador
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Los Angeles
            </Typography>
          </Grid>

          <Grid item lg={1} md={1} />
          <Grid item lg={1} md={1} />
          <Grid item lg={2} md={2}/>

          <Grid item lg={2} md={2} />
          <Grid item lg={2} md={2}/>
          <Grid item lg={2} md={2}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              FAQ
            </Typography>
          </Grid>
          <Grid item lg={1} md={1}>
            <Typography
              style={{
                marginTop: "2vh",
                fontSize: "13px",
                color: "#4040e5",
                fontWeight: "400",
                fontFamily: "sans-serif"
              }}
            >
              Las Vegas
            </Typography>
          </Grid>
        </Grid>
            </div>
            <div id="boxSmall" style={{marginTop: '160vh'}}>
              <Grid container xs={12} sm={12}>
                <Grid container xs={12} sm={12} style={{marginTop: '4vh'}}>
                  <Grid item xs={5} sm={5} style={{marginLeft: '4vh'}}/>
                  <Grid item xs={6} sm={2}><Typography style={{color: '#281E8F'}}>Follow Us</Typography></Grid>
                  <Grid item xs={1} sm={5}/>
                </Grid>
                <Grid container xs={12} sm={12} style={{marginTop: '2vh'}}>
                  <Grid item xs={6} sm={5}/>
                  <Grid container xs={6} sm={4}>
                    <Grid item xs={3} sm={3}>
                      <FacebookIcon
                        style={{
                          color: "blue",
                          width: "40px",
                          height: "50px",
                          marginLeft: "-10vh"
                              }}
              />
                    </Grid>
                    <Grid item xs={3} sm={3}>
                     <TwitterIcon
                        style={{
                          color: "blue",
                          width: "40px",
                          height: "50px",
                          marginLeft: "-10vh"
                              }}
                      />
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <InstagramIcon
                        style={{
                          color: "blue",
                          width: "40px",
                          height: "50px",
                          marginLeft: "-10vh"
                              }}
                      />
                    </Grid>
                    <Grid item xs={3} sm={3}>
                      <YouTubeIcon
                        style={{
                          color: "blue",
                          width: "50px",
                          height: "50px",
                          marginLeft: "-10vh"
                              }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={1} sm={3}/>
                </Grid>
                <Grid container xs={12} sm={12} style={{marginTop: '6vh'}}>
                  <Grid item xs={5} sm={5}/>
                  <Grid item xs={7} sm={3} style={{marginLeft: '0vh'}}>
                    <Typography style={{color: '#281E8F'}}>How can we help?</Typography>
                  </Grid>
                  <Grid item xs={0} sm={4}/>
                </Grid>
                
                <Grid container xs={12} sm={12} style={{marginTop: '4vh'}}>
                  <Grid item xs={5} sm={5}/>
                  <Grid item xs={3} sm={2} align='center'>
                    <Typography style={{border: '1px solid black', borderRadius: '25px', paddingTop: '1vh', color: 'white',backgroundColor: '#4040e5', paddingBottom: '1vh'}}>Chat</Typography>
                  </Grid>
                  <Grid item xs={4} sm={5}/>
                </Grid>
              </Grid>
              <Grid container xs={12} sm={12} style={{marginTop: '4vh',marginLeft:'2vh'}}>
                  <Grid item xs={4} sm={4}/>
                  <Grid item xs={4} sm={4} align='center'>
                  <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChanger('panel1')}>
        <ExpansionPanelSummary
          style={{background: '#c9ffe4'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} style={{color: '#281E8F'}}>Legal</Typography>
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Terms & Conditions
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Privacy Policy
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
                  </Grid>
                  <Grid item xs={4} sm={4}/>
                </Grid>
                <Grid container xs={12} sm={12} style={{marginTop: '1vh',marginLeft:'2vh'}}>
                  <Grid item xs={4} sm={4}/>
                  <Grid item xs={4} sm={4} align='center'>
                  <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChanger('panel2')}>
        <ExpansionPanelSummary
          style={{background: '#c9ffe4'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} style={{color: '#281E8F'}}>Partners</Typography>
          
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Dispensaries
          </Typography>
        </ExpansionPanelDetails>
        
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            BudDrop
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Become A Driver
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
                  </Grid>
                  <Grid item xs={4} sm={4}/>
                </Grid>
                <Grid container xs={12} sm={12} style={{marginTop: '1vh',marginLeft:'2vh'}}>
                  <Grid item xs={4} sm={4}/>
                  <Grid item xs={4} sm={4} align='center'>
                  <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChanger('panel3')}>
        <ExpansionPanelSummary
          style={{background: '#c9ffe4'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} style={{color: '#281E8F'}}>greenrush</Typography>
          
        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Contact Us
          </Typography>
        </ExpansionPanelDetails>
        
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Careers
          </Typography>
        </ExpansionPanelDetails>
        
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Press
          </Typography>
        </ExpansionPanelDetails>
        
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Become An Ambassador
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
                              
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            FAQ
          </Typography>
          
        </ExpansionPanelDetails>
      </ExpansionPanel>
                  </Grid>
                  <Grid item xs={4} sm={4}/>
                </Grid>
                <Grid container xs={12} sm={12} style={{marginTop: '1vh',marginLeft:'2vh'}} align='center'>
                  <Grid item xs={4} sm={4} align='center'/>
                  <Grid item xs={4} sm={4} align='center'>
                  <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChanger('panel4')}>
        <ExpansionPanelSummary
          style={{background: '#c9ffe4'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} style={{color: '#281E8F'}}>Cities</Typography>
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            San Francisco
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Oakland
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            San Diego
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Los Angeles
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Las Vegas
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            + more cities
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Terms & Conditions
          </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails style={{background: '#c9ffe4'}}>
    
    
    
          <Typography style={{marginLeft: '2vh',color: '#4040E5',fontSize:'15px'}}>
            Terms & Conditions
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
                  </Grid>
                  <Grid item xs={4} sm={4}/>
                </Grid>
            </div>        
  
          </Grid>

    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
