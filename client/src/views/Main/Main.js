import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
   Main1,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Main1 />
    </div>
  );
};

export default Main;