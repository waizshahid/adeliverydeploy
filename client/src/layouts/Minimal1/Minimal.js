import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Topbar } from './components';
import { Footer } from '../../layouts/Main1/components';

const useStyles = makeStyles(() => ({
  
}));

const Minimal = props => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
      <Footer style={{marginTop:'100vh'}}/>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
