import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import { NewOrders, Accepted, GoogleMap, Progress, Ready } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const updateAcceptedOrders = (acceptedOrders) => {
    const newAcceptedOrdersState = [...acceptNewOrdersState];
    newAcceptedOrdersState.push(acceptedOrders[0]);
    setAcceptNewOrdersState(newAcceptedOrdersState);
  };

  const [acceptNewOrdersState, setAcceptNewOrdersState] = useState([]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={3} xl={9} xs={12}>
          <NewOrders acceptClick={updateAcceptedOrders} />
        </Grid>
        <Grid item md={3} xl={3} xs={12}>
          <Accepted ordersToShow={acceptNewOrdersState} />
        </Grid>
        <Grid item md={3} xl={3} xs={12}>
          <Progress />
        </Grid>
        <Grid item md={3} xl={9} xs={12}>
          <Ready />
        </Grid>
      </Grid>
      <div style={{ marginTop: "2vh" }}>
        <GoogleMap />
      </div>
    </div>
  );
};

export default Dashboard;
