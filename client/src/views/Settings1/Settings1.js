import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
   Settings,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

const Settings1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Settings />
    </div>
  );
};

export default Settings1;