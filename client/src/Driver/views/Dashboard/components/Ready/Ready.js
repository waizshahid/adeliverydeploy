import React, { useState } from "react";
import clsx from "clsx";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    // padding: 0,
  },
  inner: {
    minWidth: 800,
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
  },
  status: {
    marginRight: theme.spacing(1),
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

const Ready = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orderState, setOrderState] = useState([
    { id: "o1", orderContent: "Lorem Ipsum" },
    { id: "o2", orderContent: "Lorem Ipsum" },
    { id: "o3", orderContent: "Lorem Ipsum" },
  ]);

  return (
    <Card
      style={{ height: "100%" }}
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Ready To Delivered"
        style={{ backgroundColor: "#dddddd" }}
      />
      <Divider />
      <CardContent className={classes.content}>
        {orderState.map((order) => {
          return (
            <div key={order.id} className={classes.order}>
              <CheckCircleIcon htmlColor="green" />
              <p className={classes.orderContent}>{order.orderContent}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

Ready.propTypes = {
  className: PropTypes.string,
};

export default Ready;
