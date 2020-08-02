import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: 'relative'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const NewOrders = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card style={{height:"100%"}}
      {...rest}
      className={clsx(classes.root, className)}
    
    >
      <CardHeader
       

      
        title="New Orders"

        style={{ backgroundColor: "#dddddd" }}
      />
      <Divider />
      <CardContent style={{height:"100%"}}>
    
      </CardContent>
      <Divider />
   
    </Card>
  );
};

NewOrders.propTypes = {
  className: PropTypes.string
};

export default NewOrders;
