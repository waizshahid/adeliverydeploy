import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import {PersonOutline, ShoppingCartOutlined, FlashOnOutlined} from '@material-ui/icons';
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme
} from '@material-ui/core/styles';
import App from "./Stepper/App";
import ForgotPassword from "./ForgotPassword";

import Checkbox from '@material-ui/core/Checkbox';
import { Grid, DialogContent,Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { NavLink } from "react-router-dom";
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'grey',
      borderWidth:'10vh',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
      borderWidth:'.5vh',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        borderWidth:'.5vh',
      },
      '&:hover fieldset': {
        borderColor: 'white',
        borderWidth:'.5vh',

      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        borderWidth:'.5vh',
        
      },
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    
  },

});


class ModalSignIn extends React.Component {
  state = {
    open: false,
    open1: false,
    open2: false,
    email: '',
    password: '',
  };
   onCloseModal = () => {
    this.setState({ open: false });
  };
   createAnAccountOpen = () => {
    this.setState({open1: true, open: false });
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  handleChange1 = (event) => {
    console.log(event.tar)
    var name = event.target.name
    var value = event.target.value
    this.setState({[name]: [value]})
  }


  createAnAccountClose = () => {
    this.setState({ open1: false });
  };
  facilities = [];
  handleChange = (name, checked) => {
    if(checked) {
      this.facilities.push(name)
    }

  }
  render() {
    const { open } = this.state;
    const { open1} =this.state;
    return (
      <div>
  
        <PersonOutline 
        onClick={this.onOpenModal} 
            style={{
                color: "#4d44a2",
                marginTop: '0vh',
                fontSize: "25px",
                marginLeft: '1vh',
                cursor:"pointer",
                  }}
               />
        <Dialog
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
     open={open} onClose={this.onCloseModal}>
       <DialogContent style={{backgroundColor:"blue"}}>
     
          <Grid container spacing={2} xs={12}  >
<Grid item xs={12} align="center">
  <span style={{fontWeight:"bold",color:"white"}}>Sign In</span>
  </Grid>
  <Grid item xs={12}>
          <CssTextField
                              id="validation-outlined-input"
                              InputLabelProps={{
                                style: {
                                  color: 'white',
                                  fontweight:"bold"
                                }
                              }}
                              inputProps={{
                                style: {
                                
                               
                                }
                              }}
                              name='email'
                              label="Email Address"
                              onChange={this.handleChange1}
                              value={this.state.email}
                              variant="outlined"
                              fullWidth={true}
                            />
                            </Grid>
                            <Grid item xs={12}>
          <CssTextField
                              id="validation-outlined-input"
                              InputLabelProps={{
                                style: {
                                  color: 'white',
                                  fontweight:"bold"
                                }
                              }}
                              inputProps={{
                                style: {
                             
                               
                                }
                              }}
                              name='password'
                              label="Password"
                              onChange={this.handleChange1}
                              value={this.state.password}
                              variant="outlined"
                              fullWidth={true}
                            />
                            </Grid>
                            </Grid>
                            <Grid container xs={12} >
                            <Grid item xs={1}>
                            <Checkbox onChange={this.handleChange} />
                            </Grid>
                            <Grid item xs={7} style={{marginTop:"2vh"}}>
                            <span style={{color:"white"}}>  Remember me</span>
                              </Grid>
                              <Grid item xs={4} style={{marginTop:"2vh"}}>
                                <ForgotPassword/>
                                </Grid>
                                <Grid item xs={12} >
                                <Button variant="contained" size="medium" color="primary"   style={{backgroundColor:"white",color:"blue",borderRadius:"4vh",marginTop:"2vh"}} fullWidth={true}>
          Sign In
        </Button>
                                  </Grid>
                              </Grid>
                              <Grid item xs={12} align="center" style={{color:"white",marginTop:"2vh"}}>
                                New to greenrush? <span   onClick={()=>{
            this.createAnAccountOpen();
            
            }
        } 
            style={{
                color: "#4d44a2",
                marginTop: '0vh',
                color:"white",
                marginLeft: '1vh',
                cursor:"pointer",
                  }}
               >Create an Account</span>
                
                                </Grid>
                              
                            </DialogContent>
        </Dialog>


      <Dialog
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open1} onClose={this.createAnAccountClose}>
      <DialogContent style={{backgroundColor:"blue"}}>

        <Grid container spacing={3} xs={12}  >
      <Grid item xs={12} align="center">
      <span style={{fontWeight:"bold",color:"white"}}>Create an Account</span>
      </Grid>
      <Grid item xs={12} align="center">
      <span  style={{fontWeight:"bold",color:"white"}}>Logo Here</span>
      </Grid>
      <Grid item xs={12} align="center">
      <span  style={{fontWeight:"bold",color:"white"}}>Welcome to greenrush</span>
      </Grid>
      <Grid item xs={12} align="center">
      <span  style={{fontWeight:"bold",color:"white",fontSize:"18px"}}>You’ll need a verified phone number and valid Photo ID to use our service. It shouldn’t take more than a couple minutes to get set up. Let’s get started!</span>
      </Grid>

                    <Grid item xs={12} >
                              <App/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} align="center" style={{color:"white",marginTop:"3vh"}}>
                            Already have an Account? Sign In
                              </Grid>
                              <Grid item xs={12} align="center" style={{color:"white",marginTop:"3vh"}}>
                              By signing up, I agree to greenrush’s Terms & Conditions and Privacy Policy.
                              </Grid>
                            
                          </DialogContent>
      </Dialog>

      </div>
    );
  }
}


export default ModalSignIn;