import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
   Shop,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

const ShopPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Shop />
    </div>
  );
};

export default ShopPage;
