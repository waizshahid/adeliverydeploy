import React, {  } from 'react';
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
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const Progress = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

 

  return (
    <Card style={{height:"100%"}}
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader

        title="In-Progress"
        style={{backgroundColor:"#dddddd"}}
      />
      <Divider />
      <CardContent className={classes.content}>
       
      </CardContent>
      <Divider />
    
    </Card>
  );
};

Progress.propTypes = {
  className: PropTypes.string
};

export default Progress;
