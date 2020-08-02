import React from 'react';
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme
} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { grey } from '@material-ui/core/colors';
import '../../../../App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios'

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
        borderColor: 'grey',
        borderWidth:'.5vh',
      },
      '&:hover fieldset': {
        borderColor: 'grey',
        borderWidth:'.5vh',

      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
        borderWidth:'1vh',
        
      },
    },
  },
})(TextField);

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },

});

export default class Business1 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      FullName: '',
      Email:'',
      PhoneNumber:'',
      BusinessName:'',
      City:'',
      AdditionalComments:'',
    }
  }

  viewData = () => {
    axios.post('/business', this.state)
      .then(res => this.state)
      .catch(err => console.log(err))
  }

handleChangeFullName = event => {
  this.setState({ FullName: event.target.value });
};

handleChangeEmail = event => {
  this.setState({ Email: event.target.value });
};

handleChangePhoneNumber = event => {
  this.setState({ PhoneNumber: event.target.value });
};

handleChangeBusinessName = event => {
  this.setState({ BusinessName: event.target.value });
};
handleChangeCity = event => {
  this.setState({ City: event.target.value });
};
handleChangeAdditionalComments = event => {
  this.setState({ AdditionalComments: event.target.value });
};
render() {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <div  style={{height: '50vh'}}>
        <div>
          <div>
            <Grid
              container
              xs={12}
            >
        
              <Grid
                align="center"
                container
                xs={12}
              >
          
                <div>
                  <Grid
                    align="center"
                    container
                    style={{marginTop:'25vh'}}
                    xs={12}
                  >
                    <Grid
                      item
                      xs={12}
                    >
                      <Typography style={{ fontSize: '25px',color:'black' }}>
                      Awesome Work!
                      </Typography>
                      <Typography style={{ fontSize: '13px', marginTop: '5vh',color:'black' }}>
                      If you're a cannabis business owner, complete the form,
                      we'll reach out to answer
                      </Typography>
                      <Typography style={{ fontSize: '13px', marginTop: '1vh',color:'black' }}>
                      your questions and get you started.
                      </Typography>
                      <Typography style={{ fontSize: '13px', marginTop: '5vh',color:'black' }}>
                      If you're a customer needing assistance, please contact
                      us.
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      justify="center"
                      xs={12}
                    >
                      <form
                        align="center"
                        autoComplete="off"
                      >
                        <Grid
                          container
                          xs={12}
                        >
                          <Grid
                            item
                            style={{ marginTop: '4vh' }}
                          
                            xs={12}
                          >
                            {' '}
                            <CssTextField
                              InputLabelProps={{
                                style: {
                                  color: 'black'
                                }
                              }}
                              inputProps={{
                                // classes: classes.rootModal,
                                style: {
                                  align: 'center',
                                  width: '70vh', 
                                }
                              }}
                              label="Full Name"
                              onChange={this.handleChangeFullName}
                              value={this.state.FullName}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            style={{ marginTop: '4vh' }}
                            xs={12}
                          >
                            <CssTextField
                              id="validation-outlined-input"
                              InputLabelProps={{
                                style: {
                                  color: 'black'
                                }
                              }}
                              inputProps={{
                                style: {
                                  align: 'center',
                                  width: '70vh'
                                }
                              }}
                              label="Email"
                              onChange={this.handleChangeEmail}
                              type="email"
                              value={this.state.Email}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            style={{ marginTop: '4vh' }}
                          
                            xs={12}
                          >
                            <CssTextField
                              floatingLabelText="Numeric"
                              hintText="Numeric"
                              id="validation-outlined-input"
                              InputLabelProps={{
                                style: {
                                  color: 'black'
                                }
                              }}
                              inputProps={{
                                style: {
                                  align: 'center',
                                  width: '70vh'
                                }
                              }}
                              label="Phone Number"
                              onChange={this.handleChangePhoneNumber}
                              type="Numeric"
                              useref="Numeric"
                              value={this.state.PhoneNumber}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            style={{ marginTop: '4vh' }}
                            xs={12}
                          >
                            <CssTextField
                              id="validation-outlined-input"
                              InputLabelProps={{
                                style: {
                                  color: 'black'
                                }
                              }}
                              inputProps={{
                                style: {
                                  width: '70vh'
                                }
                              }}
                              label="Business Name"
                              onChange={this.handleChangeBusinessName}
                              value={this.state.BusinessName}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            style={{ marginTop: '4vh' }}
                            xs={12}
                          >
                            <CssTextField
                              id="validation-outlined-input"
                              InputLabelProps={{
                                style: {
                                  color: 'black'
                                }
                              }}
                              inputProps={{
                                style: {
                                  align: 'center',
                                  width: '70vh'
                                }
                              }}
                              label="City"
                              onChange={this.handleChangeCity}
                              value={this.state.City}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            style={{ marginTop: '4vh' }}
                            xs={12}
                          >
                            <CssTextField
                              id="validation-outlined-input"
                              InputLabelProps={{
                                style: {
                                  color: 'black'
                                }
                              }}
                              inputProps={{
                                style: {
                                  width: '70vh',
                                  height: '44px'
                                }
                              }}
                              label="Additional Comments"
                              onChange={this.handleChangeAdditionalComments}
                              value={this.state.AdditionalComments}
                              variant="outlined"
                            />
                          </Grid>
                          <Grid
                            item
                            xs={1}
                          />
                        </Grid>
                      </form>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
            >
              <Grid
                align="center"
                item
                style={{marginTop:'10vh'}}
                xs={12}
              >
                <Button
                  color="primary"
                  style={{width:'160px',borderRadius:'25px',paddingTop:'2vh',paddingBottom:'2vh'}}
                  variant="contained"
                  onClick={this.viewData}
                >
                Submit
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div> 
    </React.Fragment>
  );
}
}


