import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
  },
  content: {
    // padding: 0,
  },
  image: {
    height: 48,
    width: 48,
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

const Progress = (props) => {
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
      <CardHeader title="In-Progress" style={{ backgroundColor: "#dddddd" }} />
      <Divider />
      <CardContent className={classes.content}>
        {orderState.map((order) => {
          return (
            <div key={order.id} className={classes.order}>
              <AutorenewIcon htmlColor="#FADA2F" />
              <p className={classes.orderContent}>{order.orderContent}</p>
            </div>
          );
        })}
      </CardContent>
      <Divider />
    </Card>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
};

export default Progress;
