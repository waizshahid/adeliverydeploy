import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/styles';
import { StoreToolbar, StoreTable } from './components';
import mockData from './storeData';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: "white",
    height: "155vh"
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const StoreList = () => {
  const classes = useStyles();

  const [users, setUser] = useState(mockData);

  return (
    <div className={classes.root}>
      <StoreToolbar />
      <div className={classes.content}>
        <StoreTable users={users} />
      </div>
    </div>
  );
};

export default StoreList;