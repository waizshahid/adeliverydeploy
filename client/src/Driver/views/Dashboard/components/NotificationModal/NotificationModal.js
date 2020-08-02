import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import { Badge, IconButton } from "@material-ui/core";

import "./NotificationModal.css";

const NotificationModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <IconButton color="inherit" onClick={handleShow}>
        <Badge badgeContent="" color="primary" variant="dot">
          <NotificationsIcon color="primary" />
        </Badge>
      </IconButton>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Order Received</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A new order is just placed. Either check your dashboard out or take
          further actions from here!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Decline
          </Button>
          <Button variant="success" onClick={handleClose}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotificationModal;
