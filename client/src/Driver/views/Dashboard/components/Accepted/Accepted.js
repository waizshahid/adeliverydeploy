import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles(() => ({
  root: {},
  chartContainer: {
    height: 400,
    position: "relative",
  },
  actions: {
    justifyContent: "flex-end",
  },
  order: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "1rem 0",
  },
  orderContent: {
    marginLeft: "1rem",
    marginBottom: 0,
  },
}));

const Accepted = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      style={{ height: "100%" }}
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="Accepted" style={{ backgroundColor: "#dddddd" }} />
      <Divider />
      <CardContent style={{ height: "100%" }}>
        {props.ordersToShow.map((order) => {
          return (
            <div key={order.id} className={classes.order}>
              <CheckIcon htmlColor="green" />
              <p className={classes.orderContent}>{order.orderContent}</p>
            </div>
          );
        })}
      </CardContent>
      <Divider />
    </Card>
  );
};

Accepted.propTypes = {
  className: PropTypes.string,
};

export default Accepted;
