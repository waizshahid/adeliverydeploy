import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

import {  Topbar } from './components';

const useStyles = makeStyles(theme => ({
  
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  

 
  return (
    <div
      
    >
      <Topbar />
      <main className={classes.content}>
        {children}
        
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;

