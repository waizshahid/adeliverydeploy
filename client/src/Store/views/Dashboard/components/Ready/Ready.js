import React, {  } from 'react';
import clsx from 'clsx';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,

  CardHeader,
  CardContent,
  Button,
  Divider,
 
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));



const Ready = props => {
  const { className, ...rest } = props;

  const classes = useStyles();



  return (
    <Card
    style={{height:"100%"}}
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
     
        title="Ready To Delivered"
        style={{backgroundColor:"#dddddd"}}
      />
      <Divider />
      <CardContent className={classes.content} >
   </CardContent>
    </Card>
  );
};

Ready.propTypes = {
  className: PropTypes.string
};

export default Ready;
