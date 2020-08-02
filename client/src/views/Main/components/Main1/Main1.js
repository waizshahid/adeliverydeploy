import React from "react";
import $ from 'jquery';

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
import "../../../../App.css"
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 50,
    
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


const Main1 = props => {
/*Scroll animation of clouds*/
  var $animation_elements = $('.marketing-banner-cloud--bottom-left-back');
  var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
  const classes = useStyles();
  const { className, ...rest } = props;

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
  $(document).ready(function() {
    //parallax scroll
    $(window).on("load scroll", function() {
      var parallaxElement = $(".parallax_scroll"),
        parallaxQuantity = parallaxElement.length;
      window.requestAnimationFrame(function() {
        for (var i = 0; i < parallaxQuantity; i++) {
          var currentElement = parallaxElement.eq(i),
            windowTop = $(window).scrollTop(),
            elementTop = currentElement.offset().top,
            elementHeight = currentElement.height(),
            viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
            scrolled = windowTop - elementTop + viewPortHeight;
          currentElement.css({
            transform: "translate3d(0," + scrolled * -0.4 + "px, 0)"
          });
        }
      });
    });
  });
  return (
    <div className={classes.root} style={{height: '50vh'}}>
        <div class="marketing-banner-clouds parallax_scroll" aria-hidden="true">
          <div class="marketing-banner-cloud marketing-banner-cloud--top-left js-parallax-cloud" id="baby" data-depth="0.1" >
            <svg fill='#99f6c8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 140" id="shape--cloud-1-flip"><path d="M84.66 0A23.34 23.34 0 0 0 61.5 23.33a23.07 23.07 0 0 0 1.41 7.92h-.11c.11.19.19.37.29.56a23.25 23.25 0 0 0 1.38 2.95c3.83 9.76-3.32 11.66-4.84 12H23.34a23.33 23.33 0 1 0 0 46.66h19c11.56 3.06 11.42 14.08 11 17.82A23.27 23.27 0 0 0 76 140h180.66a23.34 23.34 0 1 0 0-46.67h-22.58c-19.47-2.94-12.58-14.56-12.58-14.56h-.09a23.32 23.32 0 0 0-21.61-32.1h-12.93C167.44 43.73 173 33 173 33a23.31 23.31 0 0 0-21.15-33z"></path></svg>
          </div>
          <div class="marketing-banner-cloud marketing-banner-cloud--bottom-left-back js-parallax-cloud" data-depth="0.50">
            <svg fill='#99f6c8'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 473 187" id="shape--cloud-4-flip"><path d="M197.786 0c12.904 0 23.365 10.465 23.365 23.375 0 6.855-2.967 13-7.666 17.277l.027-.003s-3.75 4.148 2.372 6.095l-.009.006h28.815c12.905 0 23.366 10.465 23.366 23.374 0 6.183-2.417 11.79-6.335 15.97-2.904 6.187 3.018 7.31 3.018 7.31l-.126.096h185.021C462.54 93.5 473 103.965 473 116.875s-10.46 23.375-23.366 23.375h-78.639c-.055.008-6.622.9-4.658 6.243l-.035-.001c4.608 4.269 7.51 10.355 7.51 17.133 0 12.91-10.462 23.375-23.366 23.375H79.854c-12.904 0-23.365-10.465-23.365-23.375S66.95 140.25 79.854 140.25h20.507l.044-.003.006.003h.25c4.564-.612 2.435-3.4 2.435-3.4h.044c-6.75-4.097-11.276-11.498-11.276-19.975 0-7.362 3.41-13.918 8.726-18.204 2.605-4.1-1.507-5.104-1.507-5.104l.048-.067H23.366C10.462 93.5 0 83.035 0 70.124 0 57.214 10.462 46.75 23.366 46.75h85.008c5.381-1.725 3.044-5.025 2.431-5.768-4.91-4.285-8.03-10.575-8.03-17.607C102.775 10.465 113.236 0 126.14 0h71.646z"></path></svg>      
          </div>
          <div class="marketing-banner-cloud marketing-banner-cloud--top-center js-parallax-cloud" data-depth="0.2">
            <svg fill='#99f6c8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 559 187" id="shape--cloud-2"><path class="dbd5a7f28d-0fed-473a-83b5-8dce08010dff" d="M252.6 0a23.34 23.34 0 0 0-20.93 33.73c.81 3 1.2 10.52-14.65 13H23.37a23.38 23.38 0 0 0 0 46.75h123.4c19.63 3.18 14 14.21 14 14.21l.13-.06a23.37 23.37 0 0 0 21.48 32.6h42.2c2.22.34 9.17 2 4.55 9.46h.12A23.35 23.35 0 0 0 248 187h79.6a23.34 23.34 0 0 0 18.79-37.23h.05c-5.05-8.15 3.7-9.39 5-9.53h184.19a23.38 23.38 0 0 0 0-46.75h-112c-6-1.67-1.47-5.18-1.47-5.18a23.37 23.37 0 0 0-14.68-41.55H397c-17.84-2.69-15.55-11.7-14.74-13.84A23.34 23.34 0 0 0 360.92 0z"></path></svg>
          </div>
          <div class="marketing-banner-cloud marketing-banner-cloud--bottom-right-back js-parallax-cloud" data-depth="0.50">
            <svg fill='#99f6c8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 140" id="shape--cloud-1-flip"><path d="M84.66 0A23.34 23.34 0 0 0 61.5 23.33a23.07 23.07 0 0 0 1.41 7.92h-.11c.11.19.19.37.29.56a23.25 23.25 0 0 0 1.38 2.95c3.83 9.76-3.32 11.66-4.84 12H23.34a23.33 23.33 0 1 0 0 46.66h19c11.56 3.06 11.42 14.08 11 17.82A23.27 23.27 0 0 0 76 140h180.66a23.34 23.34 0 1 0 0-46.67h-22.58c-19.47-2.94-12.58-14.56-12.58-14.56h-.09a23.32 23.32 0 0 0-21.61-32.1h-12.93C167.44 43.73 173 33 173 33a23.31 23.31 0 0 0-21.15-33z"></path></svg>  
          </div>       
        </div>
        <div>
          <Grid item xs={12} sm={12} lg={12} align='center' style={{}}>
            <Typography
              style={{
                fontSize: "48px",
                fontWeight: "800",
                color: "#ff29a6",
                paddingTop: "30vh"
              }}
            >
              Relax,
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} align='center'>
            <Typography
              style={{
                fontSize: "52px",
                fontWeight: "800",
                color: "#4545e6",
                paddingTop: "5vh"
              }}
            >
              weed's on the way
            </Typography>
          </Grid>
          <Grid
            item
            spacing={4}
            Align="center"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{
              paddingTop: "3vh",
              fontSize: "3.2vh",
              fontFamily: "sans-serif",
              color: "#605e5f"
            }}
          >
            <text>Choose from thousands of products in your area.</text>
          </Grid>
          <Grid container xs={12}   sm={12} md={12} lg={12}  align='center'>
            
            <Grid item    xs={3}  sm={4}  md={2} lg={2} style={{marginLeft: '-7vh'}}/>
            <Grid container xs={8} sm={8} md={9} lg={9} align='center' style={{marginTop:'11vh'}}>
            <Grid item      xs={9} sm={6} md={3} lg={3} style={{marginTop:'2vh',backgroundColor: "#4040e5", color: 'white', border: '2px solid #4040e5', borderRadius: '20px', paddingTop: '1vh', paddingBottom: '1.2vh', marginLeft: '8vh' }}>
              <Typography style={{color:'white'}}>Shop Products Near Me</Typography>
            </Grid>
            
            
            
            <Grid item    xs={9}  sm={6} md={3} lg={3}  style={{marginTop:'2vh',backgroundColor: "#4040e5", color: 'white', border: '2px solid #4040e5', borderRadius: '20px', paddingTop: '1vh', paddingBottom: '1.2vh', marginLeft: '8vh' }}>
              <Typography style={{color:'white'}}>Shop By Brands</Typography>
            </Grid>
            
            
            
            <Grid item    xs={9}  sm={6} md={3} lg={3} style={{marginTop:'2vh',backgroundColor: "#4040e5", color: 'white', border: '2px solid #4040e5', borderRadius: '20px', paddingTop: '1vh', paddingBottom: '1.2vh', marginLeft: '8vh' }}>
              <Typography style={{color:'white'}}>Shop Deals</Typography>
            </Grid>
            </Grid>
            <Grid item sm={0} md={0} lg={2}/>
            

          </Grid>
          <Grid container xs={12} className={classes.control}>
            <Grid item xs={2}/>
            <Grid item xs={8} align='center'>
              <Typography style={{marginTop: '22vh', fontSize: '40px', color: '#4040E5', marginLeft: '0vh',fontWeight: '600'}}>Go ahead, find your<span style={{color: '#ff29a6', paddingLeft:'1.5vh'}}>experience.</span></Typography> 
            </Grid>
            <Grid item xs={2}/>
            
            
          </Grid>
          <Grid container xs={12} sm={12} md={12} lg={12} style={{marginTop: '12vh'}} align='center'>
          <Grid item sm={3} md={1} lg={1}/>
            <Grid container sm={9} md={10} lg={10} spacing={4}>
              
             <Grid item xs={12} sm={8} md={3} lg={3}>
                <Card className={classes.control} variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom style={{color:'#281e8f',fontSize: '20px', fontWeight: '600',textAlign:'center'}}>
                      Uplifted
                    </Typography>
                    <Typography variant="h5" component="h2" style={{fontSize: '18px'}}>
                      Known as Savitas in the "biz", these strains create an alert, energetic effect.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={8} md={3} lg={3} align='center'>
                <Card className={classes.control} variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom style={{color:'#281e8f',fontSize: '20px', fontWeight: '600'}}>
                      Relaxed
                    </Typography>
                    <Typography variant="h5" component="h2" style={{fontSize: '18px'}}>
                    Indica strains that will put you in-da-couch.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {/* <Grid item xs={1}/> */}
              <Grid item xs={12} sm={8} md={3} lg={3}>
                <Card className={classes.control} variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom style={{color:'#281e8f',fontSize: '20px', fontWeight: '600'}}>
                      Best of Both
                    </Typography>
                    <Typography variant="h5" component="h2" style={{fontSize: '18px'}}>
                      These hybrids have been bred for smell, taste and effect.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {/* <Grid item xs={1}/> */}
              <Grid item xs={12} sm={8} md={3} lg={3}>
                <Card className={classes.control} variant="outlined">
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom style={{color:'#281e8f',fontSize: '20px', fontWeight: '600'}}>
                      Healing
                    </Typography>
                    <Typography variant="h5" component="h2" style={{fontSize: '18px'}}>
                      CBD heavy products that promote wellness and relief
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              {/* <Grid item xs={1}/> */}
            </Grid>
          </Grid>
          <Grid>
           
          </Grid>
        </div>

          </div> 
      
  );
}

Main1.propTypes = {
    className: PropTypes.string
  };

export default Main1;
