import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Grid,Button} from '@material-ui/core';
import { Link as RouterLink, withRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '35ch',
    },
   
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setValue1] = React.useState('');
  const [password, setValue2] = React.useState('');
  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  return (
   
      <Grid container xs={12} >
      <Grid item xs={6}>
      <img 
      src="https://themeforest.img.customer.envatousercontent.com/files/218860560/Pizzaro-Preview/00-Pizzaro.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=08d5470967d3ae66cf3d13d31d781f3e"
      alt="new"
      style={{height:"88vh",width:"100%"}}
      />
      </Grid>
<Grid container xs={6} justify='center' spacing={2} >
<form className={classes.root}>
  <Grid item xs={7}>
        <TextField
          fullWidth
          label="Email Or Phone"
          value={email}
          onChange={handleChange1}
        />
       </Grid>
       
       <Grid item xs={7} >
        <TextField
        
          label="Password"
          fullWidth
    
          value={password}
          onChange={handleChange2}
        />
       </Grid>
       <Grid item xs={12}>
       <Button variant="contained" color="primary" component={RouterLink}  to="/store/dashboard" fullWidth style={{marginTop:"6vh",marginLeft:"2vh"}}>
        Login
      </Button>
       </Grid>
       </form>
      </Grid>
     
    </Grid>
  );
}
