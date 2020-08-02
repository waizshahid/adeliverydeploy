import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

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
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    marginBottom: 0,
  },
  orderHandleButton: {
    cursor: "pointer",
  },
}));

const NewOrders = (props) => {
  const { className, ...rest } = props;

  const removeItemFromState = (order) => {
    const clonedArray = [...orderState];
    setOrderState(clonedArray);
    const orderIndexToRemove = clonedArray.findIndex(
      (stateOrder) => stateOrder.id === order.id
    );
    return clonedArray.splice(orderIndexToRemove, 1);
  };

  const orderAcceptHandler = (receivedOrder) => {
    const splicedElements = removeItemFromState(receivedOrder);
    props.acceptClick(splicedElements);
  };

  const orderDeclineHandler = (receivedOrder) => {
    removeItemFromState(receivedOrder);
  };

  const classes = useStyles();

  const [orderState, setOrderState] = useState([
    { id: "o1", orderContent: "Lorem Ipsum 1" },
    { id: "o2", orderContent: "Lorem Ipsum 2" },
    { id: "o3", orderContent: "Lorem Ipsum 3" },
  ]);

  return (
    <Card
      style={{ height: "100%" }}
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader title="New Orders" style={{ backgroundColor: "#dddddd" }} />
      <Divider />
      <CardContent style={{ height: "100%" }}>
        {orderState.map((order) => {
          return (
            <div key={order.id} className={classes.order}>
              <NewReleasesIcon htmlColor="#FADA2F" />
              <p className={classes.orderContent}>{order.orderContent}</p>
              <CheckIcon
                htmlColor="green"
                className={classes.orderHandleButton}
                onClick={() => orderAcceptHandler(order)}
              />
              <ClearIcon
                htmlColor="red"
                className={classes.orderHandleButton}
                onClick={() => orderDeclineHandler(order)}
              />
            </div>
          );
        })}
      </CardContent>
      <Divider />
    </Card>
  );
};

NewOrders.propTypes = {
  className: PropTypes.string,
};

export default NewOrders;
