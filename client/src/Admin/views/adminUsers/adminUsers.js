import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  cards: {
    padding: "2rem 1rem",
  },
});

const AdminUsers = () => {
  const [state, setState] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("/admin/getUsers")
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing="2" justify="center" className={classes.cards}>
      {state.map((user) => {
        return (
          <Grid item xs={6} md={4} key={user._id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={user.imageID}
                  title="Profile Image"
                />
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} sm={3}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Name:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography variant="body2" component="p">
                        {`${user.firstName} ${user.lastName}`}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={3}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Email:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {user.email}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={3}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Phone:
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {user.phoneNumber}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AdminUsers;
