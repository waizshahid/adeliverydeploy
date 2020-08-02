import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
   Business1,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

export default class Business extends React.Component {
 
  render() {
    return(
      <div>    
        <Business1 />
      </div>   
    );
  }
}