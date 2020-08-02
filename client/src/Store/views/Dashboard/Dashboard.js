import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {

  NewOrders,
  Accepted,
  Progress,
  Ready,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "white",
    height: "89vh"

  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >

        <Grid
          item

          md={3}
          xl={9}
          xs={12}
        >
          <NewOrders />
        </Grid>
        <Grid
          item

          md={3}
          xl={3}
          xs={12}
        >
          <Accepted />
        </Grid>
        <Grid
          item

          md={3}
          xl={3}
          xs={12}
        >
          <Progress />
        </Grid>
        <Grid
          item

          md={3}
          xl={9}
          xs={12}
        >
          <Ready />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
